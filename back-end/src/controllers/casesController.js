const connection = require("../database")

const casesController = async (req, res) => {
    const { dataInicio, dataFim, estado, municipio, campo, maiorQue } = req.query;

    let whereClause = '';
    const values = [];

    if (dataInicio) {
        whereClause += 'data_referencia >= ? AND ';
        values.push(dataInicio);
    }

    if (dataFim) {
        whereClause += 'data_referencia <= ? AND ';
        values.push(dataFim);
    }

    if (estado) {
        whereClause += 'UF = ? AND ';
        values.push(estado);
    }

    if (municipio) {
        whereClause += 'municipio = ? AND ';
        values.push(municipio);
    }

    if (campo && maiorQue) {
        whereClause += '?? > ? AND ';
        values.push(campo, maiorQue);
    }

    if (whereClause.endsWith('AND ')) {
        whereClause = whereClause.slice(0, -4);
    }

    const query = `
        SELECT * FROM Casos c
        JOIN Municipio m ON (c.cod_ibge = m.cod_ibge)
        WHERE ${whereClause}
    `;

    const percentuais = await getPercentuaisPorMunicipio(municipio, dataInicio, dataFim);

    connection.query(query, values, (err, results) => {
        if (err) {
            console.error('Erro ao executar a consulta:', err);
            res.status(500).send('Erro ao executar a consulta.');
        } else {
            res.json({
                data: results,
                statistics: percentuais,
            });
        }
    });
};

const getPercentuaisPorMunicipio = (municipio, dataInicio, dataFim) => {
    return new Promise((resolve, reject) => {
        if (!municipio) {
            resolve();
            return;
        }

        let whereClause = '';
        const values = [municipio];

        if (dataInicio) {
            whereClause += ' AND data_referencia >= ?';
            values.push(dataInicio);
        }

        if (dataFim) {
            whereClause += ' AND data_referencia <= ?';
            values.push(dataFim);
        }

        const query = `
        SELECT 
            (obitos_acum * 100 / popula_estimada) as percentual_obitos_por_populacao,
            (obitos_acum * 100 / confirm_acum) as percentual_obitos_por_confirmados,
            (confirm_acum * 100 / popula_estimada) as percentual_confirmados_por_populacao,
            (confirm_acum * 1000 / popula_estimada) as casos_por_1000hab
        FROM Casos c
        JOIN Municipio m ON (c.cod_ibge = m.cod_ibge)
        WHERE municipio = ?
        ${whereClause}
        ORDER BY numero_atualizacao DESC LIMIT 1
      `;

        connection.query(query, values, (err, results) => {
            if (err) {
                console.error('Erro ao executar a consulta:', err);
                reject('Erro ao executar a consulta.');
            } else {
                resolve(results);
            }
        });
    });
};

module.exports = casesController;
