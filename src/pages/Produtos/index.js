import Produto from '../../components/Produto';
import imgreflexologia from '../../img/reflexologia-tailandesa.jpeg';
import imgppedrasquentes from '../../img/pedras-quentes.jpeg';
import imgmassagem from '../../img/massagem.jpg';
import imgprincipal from '../../img/foto_principal.jpg';

import './styles.css';

const ListaProdutos = () => {
    return(
        <main className='main-produtos'>
            <Produto nome="Reflexologia Tailandesa" imgproduto={imgreflexologia} texto="A reflexologia tailandesa é uma técnica terapêutica que utiliza a pressão dos dedos em pontos específicos dos pés para aliviar a tensão muscular e promover o equilíbrio no corpo e na mente. Durante a sessão, o terapeuta trabalha em pontos de acupressão para melhorar a circulação sanguínea e reduzir o estresse. É uma terapia não invasiva e relaxante." />
            <Produto nome='Massagem com Pedras Quentes' imgproduto={imgppedrasquentes} texto="A massagem com pedras quentes utiliza pedras aquecidas para relaxar os músculos e aliviar o estresse. Durante a sessão, o terapeuta coloca as pedras em pontos estratégicos do corpo e utiliza movimentos suaves para massagear os músculos. É uma ótima opção terapêutica para melhorar a circulação sanguínea, reduzir a dor e proporcionar relaxamento profundo."/>
            <Produto nome='Massagem Relaxante' imgproduto={imgmassagem} texto="A massagem relaxante é uma técnica terapêutica que busca aliviar a tensão muscular e promover um estado de relaxamento profundo no corpo e na mente. Durante a sessão, o terapeuta utiliza movimentos suaves e ritmados para acalmar os músculos e reduzir o estresse. É uma ótima opção para quem busca um momento de cuidado e bem-estar."/>
            <Produto nome='Quiropraxia' imgproduto={imgprincipal} texto="A quiropraxia é uma técnica terapêutica que busca identificar e tratar disfunções no sistema musculoesquelético, especialmente vertebral. Durante a sessão, o quiropraxista realiza ajustes manuais nas articulações para aliviar a dor e melhorar a função do sistema nervoso. Pode ser usada para tratar dores nas costas, torcicolos e hérnias de disco."/>
        </main>
    );
}

export default ListaProdutos;