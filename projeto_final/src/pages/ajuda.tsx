import Layout from "../components/Layout";
import CampoTexto from "../components/CampoTexto"

export default function init(){
    return (
        <Layout titulo="Ajuda" subtitulo="subtitulo da ajuda">
            <h2>Texto como conteudo da ajuda</h2>
            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
                <CampoTexto label="Nome" tipo="text" valor="teste" />
                <CampoTexto label="Endereco" tipo="text" valor="teste" />
                <CampoTexto label="Cidade" tipo="text" valor="teste" />
                <button className="bg-indigo-500 hover:bg-indigo-400 w-full rounded-lg px-4 py-3 text-white mt-6" onClick={()=>router.push("/")}>Entrar</button>
            </div>
        </Layout>
    )
}