import { useState } from "react";
import Display from "../componentes/Display"

export default function init(){
    const [valor, setValor] = useState(0)

    function somar(){
        setValor(valor+1)
    }
    
    const sub = () => setValor(valor - 1)

    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "gray"
        }}>
            <Display numero={valor}/>
            <div>
                <button onClick={sub}>-</button>
                <button onClick={somar}>+</button>
            </div>

            <Display numero={valor}/>
            
        </div>
    )
}