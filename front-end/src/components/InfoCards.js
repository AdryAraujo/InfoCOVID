import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

function InfoCards() {
    return (
        <>
            <Card
                sx={{
                    width: '150px',
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
                sx={{
                    width: '170px',
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
                sx={{
                    width: '150px',
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
                sx={{
                    width: '150px',
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
        </>
    );
}

export default InfoCards;
