export default function init(props){
    return (
        <div style={{
            display: "flex",
            height: "50px",
            width: "50px",
            backgroundColor: "black",
            color: "white",
            fontSize: "2rem",
            borderRadius: "25px",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px"
        }}>
            {props.numero}
        </div>
    )
}