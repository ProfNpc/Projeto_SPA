import './styles.css';

const Produto = ({nome,imgproduto,texto}) => {
    return(
        <div className='container'>
            <img src={imgproduto} alt="Produto"></img>
            <h4>{nome}</h4>
            <p>{texto}</p>
        </div>
    );
}

export default Produto;