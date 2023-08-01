import 'leaflet/dist/leaflet.css';
import '../../helpers/SmoothWheelZoom';
import { MapContainer, MapContainerProps, Marker, TileLayer } from 'react-leaflet';
import { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { BusPosition } from './map.types.d';
import * as api from './api.service';

const ScreenMap: React.FC = () => {

    const tileLayer = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const mapContainerConfig: MapContainerProps = {
        center: [43.46, -3.816611],
        zoom: 15,
        scrollWheelZoom: false,
        style: {
            height: '100%',
            width: '100%',
        }
    };

    const [loading, setLoading] = useState(false);
    const [busesPositions, setBusesPositions] = useState<BusPosition[] | void>([]);

    useEffect(() => {
        api.getPositions().then((res) => setBusesPositions(res));
    }, []);

    const handleClick = () => {
        setLoading(true);
        const timeout = setTimeout(() => {
            api.getPositions().then((res) => setBusesPositions(res));
            setLoading(false);
            clearTimeout(timeout);
        }, 400);
    };

    return (
        <>
            <Container>
                <Grid container sx={{ margin: '1rem 0px' }} justifyContent='flex-end'>
                    <Grid item>
                        <LoadingButton loading={loading} variant='outlined' onClick={handleClick}>Sync Buses</LoadingButton>
                    </Grid>
                </Grid>
            </Container>

            <MapContainer {...mapContainerConfig} >
                <TileLayer url={tileLayer} />
                {busesPositions?.map((position, i) => <Marker key={`marker-${i}`} position={[position.lat, position.lon]}></Marker>)}
            </MapContainer>
        </>

    );
};

export default ScreenMap;