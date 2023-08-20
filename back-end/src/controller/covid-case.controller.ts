import { Request, Response } from "express";
import dataSource from "../app-data-source";
import { CovidCase } from "../entity/covid-case.entity";

const covidCaseRepository = dataSource.getRepository(CovidCase);

export const getCases = async (req: Request, res: Response) => {
    const { dataInicio, dataFim, estado, municipio, campo, maiorQue } = req.query;

    const whereConditions = [];

    if (dataInicio) {
        whereConditions.push({ data_referencia: { $gte: dataInicio } });
    }

    if (dataFim) {
        whereConditions.push({ data_referencia: { $lte: dataFim } });
    }

    if (estado) {
        whereConditions.push({ 'city.state': estado });
    }

    if (municipio) {
        whereConditions.push({ 'city.city': municipio });
    }

    if (campo && maiorQue) {
        whereConditions.push({ [campo as string]: { $gt: maiorQue } });
    }

    const filteredCases = await covidCaseRepository.find({
        where: whereConditions
    });

    return filteredCases;
};

// const getPercentuaisPorMunicipio = (municipio, dataInicio, dataFim) => {
//     return new Promise((resolve, reject) => {
//         if (!municipio) {
//             resolve([]);
//             return;
//         }

//         let whereClause = '';
//         const values = [municipio];

//         if (dataInicio) {
//             whereClause += ' AND data_referencia >= ?';
//             values.push(dataInicio);
//         }

//         if (dataFim) {
//             whereClause += ' AND data_referencia <= ?';
//             values.push(dataFim);
//         }

//         const query = `
//             SELECT 
//                 (obitos_acum * 100 / popula_estimada) as percentual_obitos_por_populacao,
//                 (obitos_acum * 100 / confirm_acum) as percentual_obitos_por_confirmados,
//                 (confirm_acum * 100 / popula_estimada) as percentual_confirmados_por_populacao,
//                 (confirm_acum * 1000 / popula_estimada) as casos_por_1000hab
//             FROM Casos c
//             JOIN Municipio m ON (c.cod_ibge = m.cod_ibge)
//             WHERE municipio = ?
//             ${whereClause}
//             ORDER BY numero_atualizacao DESC LIMIT 1
//         `;

//         connection.query(query, values, (err, results) => {
//             if (err) {
//                 console.error('Erro ao executar a consulta:', err);
//                 reject('Erro ao executar a consulta.');
//             } else {
//                 resolve(results);
//             }
//         });
//     });
// };
