import React, { useEffect, useState } from 'react'
import { getAccesses } from '../../services/api'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Card, CardContent, CardHeader } from '@mui/material';
import './styles.css'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function Map() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function loadData() {
            const response = await getAccesses()
            if (response.data) {
                setData(response.data)
            }
        }

        loadData()
    }, [])

    return (
        <div className='map-container'>
            <Card sx={{ width: '90%' }}>
                <CardHeader
                    title="Mapa de Acessos"
                    titleTypographyProps={{ color: 'black', align: 'center' }}
                />
                <CardContent>
                    <MapContainer center={[0, 0]} zoom={2} style={{ height: '500px' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        {data.map((point, index) => (
                            <Marker key={index} position={[point.latitude, point.longitude]} />
                        ))}
                    </MapContainer>
                </CardContent>
            </Card>
        </div>
    )
}

export default Map