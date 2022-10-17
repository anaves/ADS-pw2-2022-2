import Pessoa from "../componentes/Pessoa"
export default function init(){

    return (
        <>
        <h1>Exemplo Typescript</h1>
            <Pessoa idade={19} nome={"Franjinha"} sobrenome={"Souza"}/>
            <Pessoa idade={17} nome={"Maria Cascuda"} sexo={"feminino"}/>
        </>

    )
}