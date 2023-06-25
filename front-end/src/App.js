import './App.css';
import * as React from 'react';
import logo from '../src/assets/img/logoSemNome.png'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function App() {
  return (
    <div className='container'>
      <div className='cabecalho'>
        <img id="logo" src={logo} alt='Info Covid'/>
        <h1>INFO COVID</h1>
      </div>
      <div className='container-dados'>
        <div className='container-lateral'>
          <div className='container-lateral-titulo'>
            <h2>Refine sua busca aqui!</h2>
          </div>
          <div className='filtros'>
            <FormControl fullWidth >
              <InputLabel id="input-municipios">Municípios</InputLabel>
              <Select
                labelId="select-municipios"
                id="municipios"
                label="Municípios"
              >
                <MenuItem >Twenty</MenuItem>
                <MenuItem >Thirty</MenuItem>

              </Select>
              <InputLabel id="input-municipio">Município</InputLabel>
              <Select fullWidth
                labelId="select-municipio"
                id="municipio"
                label="Município"
              >
                <MenuItem >Ten</MenuItem>
                <MenuItem >Twenty</MenuItem>
                <MenuItem >Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className='container2'>

        
          <div className='container-inf'>
            <Card 
            sx={{ width: '150px',
                  height: '100px',
                  marginRight: '20px',
                  backgroundColor: '#3D989B',
                  color: 'white'
          }}>
              <CardContent>
                <Typography fontSize={13} textAlign={'justify'}>
                Óbitos acumulados p/ população (%)
                </Typography>
                <Typography fontSize={15} >
                  <b>30.000</b>
                </Typography>
              </CardContent>
            </Card>
            <Card 
            sx={{ width: '170px',
                  height: '100px',
                  marginRight: '20px',
                  backgroundColor: '#3D989B',
                  color: 'white'
          }}>
              <CardContent>
                <Typography fontSize={13} textAlign={'justify'}>
                Óbitos acumulados p/ casos confirmados (%)
                </Typography>
                <Typography fontSize={15} >
                  <b>30.000</b>
                </Typography>
              </CardContent>
            </Card>
            <Card 
            sx={{ width: '150px',
                  height: '100px',
                  marginRight: '20px',
                  backgroundColor: '#3D989B',
                  color: 'white'
          }}>
              <CardContent>
                <Typography fontSize={13} textAlign={'justify'}>
                Casos acumulados p/ população (%)
                </Typography>
                <Typography fontSize={15} >
                  <b>30.000</b>
                </Typography>
              </CardContent>
            </Card>
            <Card 
            sx={{ width: '150px',
                  height: '100px',
                  marginRight: '20px',
                  backgroundColor: '#3D989B',
                  color: 'white'
          }}>
              <CardContent>
                <Typography fontSize={13} textAlign={'justify'}>
                Casos acumulados p/ 1000hab
                </Typography>
                <Typography fontSize={15} >
                  <b>30.000</b>
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='container-table'>
          <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
