import './NavBarStyles.css';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';

const NavigationBar = () => {
    return (
      <nav>
        <ul>
          <li>
            <div>Muni-denuncia</div>
          </li>
          <li className='navMenuPrincipal'>
          {useLocation().pathname !== "/" &&
          <Button variant="contained" component={Link} to='/menu-principal/MenuPrincipal'>
          Menu principal
          </Button>}
          <Button variant="contained" component={Link} to='/'>
            Log Out
          </Button>
          
          </li>
        </ul>
      </nav>
    );
}

export default NavigationBar;