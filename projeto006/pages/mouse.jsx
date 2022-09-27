import { useState } from "react";

export default function init(){
    // React Hooks
    // const vetor = useState(0)
    // let x = vetor[0]
    // let setX = vetor[1]
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    function moveMouse(evt){
        console.log(evt.clientX, evt.clientY)
        setX(evt.clientX)  // x =  evt.clientX (nao funciona)
        setY(evt.clientY)
    }

    return (
        <div style={{
            height:"100vh",
            display:"flex",
            flexDirection:"column",
            backgroundColor: "black",
            color: "white",
            alignItems: "center",
            justifyContent: "center"
        }} onMouseMove={moveMouse}>
            <span>Mouse x: {x}</span>
            <span>Mouse y: {y}</span>
        </div>
    )
}