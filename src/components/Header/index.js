import {Link} from 'react-router-dom';
import './styles.css';
import imagem from '../../img/flor.png';

const Header = () => {
    return(
        <main className='main-header'>
            <img  src={imagem} height="100px"></img>
            <h1>
                SPA das Flores
            </h1>
            <ul>
                <li><Link to='/'><a>Home</a></Link></li>
                <li><Link to='/produtos'><a>Procedimentos</a></Link></li>
                <li><Link to='/contato'><a>Contato</a></Link></li>
            </ul>
        </main>
    );
}

export default Header;