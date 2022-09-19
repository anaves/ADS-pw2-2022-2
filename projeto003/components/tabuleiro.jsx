import Linha from "./linha"

export default function init(props){
    const lista = []
    var valor = false
    for (let index = 0; index < props.dimensao; index++) {
        lista.push(<Linha preto={valor} dimensao = {props.dimensao}/>)
        valor = !valor
    }
    return (
        <>         
          {lista}  
        </>
    )

    // <Linha/>
    //        <Linha preto/>
    //        <Linha/>
    //        <Linha preto/>
    //        <Linha/>
    //        <Linha preto/>
    //        <Linha/>
    //        <Linha preto/>
}