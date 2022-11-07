import MenuItem from "./MenuItem"
import {iconeCasa,iconeAjuda, iconeAjustes} from "./icons/index"

export default function MenuLateral(){
    return (
        <aside>
            <div className="h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-300 flex flex-col items-center justify-center">
                LOGO
            </div>
            <ul>
                <MenuItem url="main" texto="Inicial" icone={iconeCasa} />
                <MenuItem url="ajuda" texto="Ajuda" icone={iconeAjuda} />
                <MenuItem url="ajustes" texto="Ajustes" icone ={iconeAjustes} />
                <MenuItem url="/" texto="Logout" icone ={iconeAjustes} />
            </ul>
        </aside>
    )
}