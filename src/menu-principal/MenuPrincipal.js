import mapa from './../media/mapa.png';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import './MenuPrincipal.css';

const MenuPrincipal = () => {

    return <div className='menu'>
            <img src={mapa} alt="mapa" className="mapa" />
            <div className='menuButtons'>
            <Button variant="contained" component={Link} to='/filtros/filtro'>
            Buscar
            </Button>
            <Button variant="contained" component={Link} to='/creardenuncia/Formulario'>
            Generar denuncia
            </Button>
            </div>
        </div>
}

export default MenuPrincipal;