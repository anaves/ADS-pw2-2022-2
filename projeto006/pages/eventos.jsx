function acao1(){
    alert("acao 1")
}

export default function init(){
    function acao2(){
        alert("acao 2")
    }

    function acao5(evt){
        console.log(evt)
    }
    function acao5v2(evt){
        alert(evt)
    }
    return (
        <>
            <button onClick={acao1}>Clique 1</button>
            <button onClick={acao2}>Clique 2</button>
            <button onClick={function (){
                alert("acao 3")
            }}>Clique 3</button>
            <button onClick={()=>alert("acao 4")}>Clique 4</button>
            <button onClick={acao5}>Clique 5</button>
            <button onClick={evt=>acao5v2(evt.altKey)}>Clique 5 v2</button>
            <div>
                <input type="text" onChange={evt=>console.log(evt.target.value)}/>
            </div>
            
        </>
    )
}