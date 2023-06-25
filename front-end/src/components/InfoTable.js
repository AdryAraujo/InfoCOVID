import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";

function createData(uf,
    cod_IBGE,
    municipio,
    data_de_coleta,
    tipo_de_local,
    confirm_acum,
    confirmados_acum_100k_hab,
    confirm_dia,
    semana_epidem,
    obitos_acum,
    obitos_dia,
    obitos_por_conf,
    pop_esti_2019,
    ultima_atuali,
    dado_repetido,
    popu_estimada,
    data_ref,
    num_atuali) {
    return {
      uf,
      cod_IBGE,
      municipio,
      data_de_coleta,
      tipo_de_local,
      confirm_acum,
      confirmados_acum_100k_hab,
      confirm_dia,
      semana_epidem,
      obitos_acum,
      obitos_dia,
      obitos_por_conf,
      pop_esti_2019,
      ultima_atuali,
      dado_repetido,
      popu_estimada,
      data_ref,
      num_atuali
    };
  }
  
  const rows = [
    createData('SE', 2800308, "Aracaju", "2020-04-02T03:00:00.000Z", "city", 20, 3, "20", "202014", 2, 2, "0.1", 657013, 0, 0, 0, 664908, "2020-04-02T03:00:00.000Z", 20,),
    createData('SE', 2800308, "Aracaju", "2020-04-02T03:00:00.000Z", "city", 20, 3, "20", "202014", 2, 2, "0.1", 657013, 0, 0, 0, 664908, "2020-04-02T03:00:00.000Z", 20,),
    createData('SE', 2800308, "Aracaju", "2020-04-02T03:00:00.000Z", "city", 20, 3, "20", "202014", 2, 2, "0.1", 657013, 0, 0, 0, 664908, "2020-04-02T03:00:00.000Z", 20,),
    createData('SE', 2800308, "Aracaju", "2020-04-02T03:00:00.000Z", "city", 20, 3, "20", "202014", 2, 2, "0.1", 657013, 0, 0, 0, 664908, "2020-04-02T03:00:00.000Z", 20,),
    createData('SE', 2800308, "Aracaju", "2020-04-02T03:00:00.000Z", "city", 20, 3, "20", "202014", 2, 2, "0.1", 657013, 0, 0, 0, 664908, "2020-04-02T03:00:00.000Z", 20,),
    createData('SE', 2800308, "Aracaju", "2020-04-02T03:00:00.000Z", "city", 20, 3, "20", "202014", 2, 2, "0.1", 657013, 0, 0, 0, 664908, "2020-04-02T03:00:00.000Z", 20,),
    createData('SE', 2800308, "Aracaju", "2020-04-02T03:00:00.000Z", "city", 20, 3, "20", "202014", 2, 2, "0.1", 657013, 0, 0, 0, 664908, "2020-04-02T03:00:00.000Z", 20,)
  ];

function InfoTable(){
    return(
        <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>UF</TableCell>
                    <TableCell align="right">Cod. IBGE</TableCell>
                    <TableCell align="right">Município</TableCell>
                    <TableCell align="right">Data de coleta</TableCell>
                    <TableCell align="right">Tipo de local</TableCell>
                    <TableCell align="right">Confirmados acumulado</TableCell>
                    <TableCell align="right">Confirmados no dia</TableCell>
                    <TableCell align="right">Confirmados acumulado/100k de hab.</TableCell>
                    <TableCell align="right">Semana epidemológica</TableCell>
                    <TableCell align="right">Óbitos acumulados</TableCell>
                    <TableCell align="right">Óbitos no dia</TableCell>
                    <TableCell align="right">Óbitos/Confirmados</TableCell>
                    <TableCell align="right">População estimada 2019</TableCell>
                    <TableCell align="right">Última atualização</TableCell>
                    <TableCell align="right">Dado repetido</TableCell>
                    <TableCell align="right">População estimada</TableCell>
                    <TableCell align="right">Data referência</TableCell>
                    <TableCell align="right">Número da atualização</TableCell>
                  </TableRow>

                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.uf}
                      </TableCell>
                      <TableCell align="right">{row.cod_IBGE}</TableCell>
                      <TableCell align="right">{row.municipio}</TableCell>
                      <TableCell align="right">{row.data_de_coleta}</TableCell>
                      <TableCell align="right">{row.tipo_de_local}</TableCell>
                      <TableCell align="right">{row.confirm_acum}</TableCell>
                      <TableCell align="right">{row.confirm_dia}</TableCell>
                      <TableCell align="right">{row.confirmados_acum_100k_hab}</TableCell>
                      <TableCell align="right">{row.semana_epidem}</TableCell>
                      <TableCell align="right">{row.obitos_acum}</TableCell>
                      <TableCell align="right">{row.obitos_dia}</TableCell>
                      <TableCell align="right">{row.obitos_por_conf}</TableCell>
                      <TableCell align="right">{row.pop_esti_2019}</TableCell>
                      <TableCell align="right">{row.ultima_atuali}</TableCell>
                      <TableCell align="right">{row.dado_repetido}</TableCell>
                      <TableCell align="right">{row.popu_estimada}</TableCell>
                      <TableCell align="right">{row.data_ref}</TableCell>
                      <TableCell align="right">{row.num_atuali}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
    );
}

export default InfoTable;