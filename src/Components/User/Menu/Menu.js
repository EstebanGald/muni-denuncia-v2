import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import map from './mapa.png';
import './Menu.css';

//Vista asociada al proceso de logeo
const ViewMenu = () => {
    return(
      <div className='menu'>
        <img src={map} alt="mapa" className="mapa"/>
        <Button variant="contained" component={Link} to='/User/App/Filtro'>
            Buscar
        </Button>
        <Button variant="contained" component={Link} to='/User/App/Generar'>
            Generar denuncia
        </Button>
      </div>
    );
  }
  
  export default ViewMenu;