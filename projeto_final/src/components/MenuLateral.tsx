import MenuItem from "./MenuItem"
import {iconeCasa,iconeAjuda} from "./icons/index"

export default function MenuLateral(){
    return (
        <aside>
            <div>
                LOGO
            </div>
            <ul>
                <MenuItem url="/" texto="Inicial" icone={iconeCasa} />
                <MenuItem url="ajuda" texto="Ajuda" icone={iconeAjuda} />
            </ul>
        </aside>
    )
}