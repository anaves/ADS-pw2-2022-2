import Pai from "../componentes/comunicao_direta/Pai"
export default function init(){
    return (
        <>
            <h1>Teste Pai</h1>
            <Pai />
            <h2>------------------------------------</h2>
            <Pai nome="Cebolinha" sobrenome="Souza"/>
        </>
    )
}