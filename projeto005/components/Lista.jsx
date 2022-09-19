export default function init(props){
    return (
        <>
            <h1>Lista de valores</h1>
            <ul>
                {props.children}
            </ul>
        </>
    )
}