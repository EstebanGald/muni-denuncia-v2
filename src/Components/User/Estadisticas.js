import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './EstadisticasStyles.css'
import security from './seguridad.jpg'
import transito from './transito.jpg'
import infraestructura from './infraestructura.jpg'

const Estadisticas = () => {

    return (
        <div className='Cartas'>
        <Card sx={{ maxWidth: 320 }}>
            <img src={security} alt="security" style={{ width: '300px', height: 'auto' }}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Seguridad
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Ver estadísticas en Seguridad
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Ingresar</Button>
            </CardActions>
        </Card>
        <Card sx={{ maxWidth: 320 }}>
            <img src={transito} alt="transito" style={{ width: '312px', height: 'auto' }}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Tránsito
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Ver estadísticas en Tránsito
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Ingresar</Button>
            </CardActions>
        </Card>
        <Card sx={{ maxWidth: 320 }}>
            <img src={infraestructura} alt="infraestructura" style={{width: '300px', height: 'auto' }}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Infraestructura
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Ver estadísticas en Infraestructura
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Ingresar</Button>
            </CardActions>
        </Card>
        </div>
    );

}

export default Estadisticas;