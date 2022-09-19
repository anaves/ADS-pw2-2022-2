import If from "../components/If"
export default function init(){
    const num =  8;
    return (
        <>
            <h1>Saida</h1>
            <If condicao={num%2===0}>
                <h2>{num} eh par</h2>
            </If>
            <If condicao={num%2===1}>
                <h2>{num} eh impar</h2>
            </If>
        </>
    )
}