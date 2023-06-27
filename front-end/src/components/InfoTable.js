import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";

function InfoTable({ rows }) {
  return (
    <TableContainer component={Paper} sx={{
      overflowX: 'unset',
      height: '100%',
      boxShadow: 'none'
    }}>
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
                {row.UF}
              </TableCell>
              <TableCell align="right">{row.cod_ibge}</TableCell>
              <TableCell align="right">{row.municipio}</TableCell>
              <TableCell align="right">{row.data_coleta}</TableCell>
              <TableCell align="right">{row.tipo_de_local}</TableCell>
              <TableCell align="right">{row.confirm_acum}</TableCell>
              <TableCell align="right">{row.confirm_no_dia}</TableCell>
              <TableCell align="right">{row.confirm_acum_por_100k_hab}</TableCell>
              <TableCell align="right">{row.semana_epidemologica}</TableCell>
              <TableCell align="right">{row.obitos_acum}</TableCell>
              <TableCell align="right">{row.obitos_no_dia}</TableCell>
              <TableCell align="right">{row.obitos_por_confirm}</TableCell>
              <TableCell align="right">{row.popula_estimada_2019}</TableCell>
              <TableCell align="right">{row.ultima_atualizacao}</TableCell>
              <TableCell align="right">{row.dado_repetido}</TableCell>
              <TableCell align="right">{row.popula_estimada}</TableCell>
              <TableCell align="right">{row.data_referencia}</TableCell>
              <TableCell align="right">{row.numero_atualizacao}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default InfoTable;