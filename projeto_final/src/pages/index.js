import Cabecalho from "../components/Cabecalho"
export default function Home() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-screen flex justify-center items-center">
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
    
      <Cabecalho titulo="Pagina inicial" subtitulo="Subitulo da pagina inicial" />

      <Cabecalho titulo="Outra pagina" subtitulo="Subitulo da pagina" />
    </div>
  )
}
