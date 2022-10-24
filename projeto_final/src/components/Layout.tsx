import Cabecalho from "./Cabecalho"
import MenuLateral from "./MenuLateral"
import Conteudo from "./Conteudo"

interface LayoutProps{
    titulo:string
    subtitulo:string
    children?:any
}

export default function Layout(props:LayoutProps){
    return (
        <div>
            <MenuLateral />
            <div>
                <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
                <Conteudo>
                    {props.children}
                </Conteudo>
            </div>
        </div>
    )
}