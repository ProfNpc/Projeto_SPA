import {Link} from 'react-router-dom';
import imagem from '../../img/foto_principal.jpg';
import './styles.css';

const Home = () => {
    return(
     
        <main className='main-home'>
          <QuadroComBorda>  
            <img alt='Imagem' src={imagem} />
             <div>          
                <h1>SPA das Flores</h1>
                <p>Somos uma clínica especializada em massagens terapêuticas onde os clientes podem encontrar alívio para diversos tipos de dor e desconforto físico, além de promover relaxamento e bem-estar geral. As massagens terapêuticas são técnicas que utilizam a pressão e o movimento das mãos em áreas específicas do corpo, a fim de melhorar a circulação sanguínea, reduzir a tensão muscular e aliviar a dor. A equipe de profissionais do SPA das Flores são altamente qualificados e estão em constantes treinamentos afim de trazer sempre o que há de mais moderno e mais eficaz para o tratamento.</p>
                <Link to='/produtos'><button>Confira nossos procedimentos!</button></Link>
            </div>
            </QuadroComBorda>
          
        </main>
    );
}

function QuadroComBorda(props) {
    return (
      <div className="quadro">
        {props.children}
      </div>
    );
  }

export default Home;