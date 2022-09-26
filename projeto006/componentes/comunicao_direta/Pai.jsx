import Filho from "./Filho"
export default function init(props){
    return (
        <>
            <Filho nome="Alan" sobrenome="Turing"/>
            <Filho {...props} nome="Nivio"/>
        </>
    )
}