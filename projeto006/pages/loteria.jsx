import Display from "../componentes/Display"
import {useState} from "react"


function gerador_valores(qtd, numeros=[]){
    // caso base
    qtd = parseInt(qtd)
    if (numeros.length === qtd){
        return numeros.sort((a,b)=>a-b);
    }
    const numero = parseInt(Math.random()*60)+1

    if (!numeros.includes(numero)){
        numeros.push(numero);
    }
    
    return gerador_valores(qtd, numeros);
    

}

export default function init(){
    const [numeros, setNumeros] = useState([])
    const [valor, setValor] = useState(0)

    function renderizaNumeros(){
        return numeros.map((n, index) => <Display key={index} casa={0} numero={n} />)
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"
            }}>
                {renderizaNumeros()}
            </div>
            <div>
            <input type="number" min={6} max={15} 
                onChange={e=>setValor(e.target.value)}/>
            <button onClick={()=>setNumeros(gerador_valores(valor))}>Gerar</button>
            </div>
           
        </div>
    )
}