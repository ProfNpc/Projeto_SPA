import './styles.css';

const Contato = () => {
    return(
        <div className='contato'>
            <h3>Fale com a gente:</h3>
            <form>
                <input placeholder="Nome Completo"></input>
                <input placeholder="Email"></input>
                <input placeholder="Telefone"></input>
                <textarea placeholder="Mensagem"></textarea>
                <input type="submit" className='btn-custom'></input>
            </form>
        </div>
    );
}

export default Contato;