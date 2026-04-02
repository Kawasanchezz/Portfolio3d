import { Outlet } from "react-router-dom";
import "./MenuProjetos.css"

export function MenuProjetos({ fechar }) {
    return (
        <div className="menu-projetos">
            <h1>Projetos</h1>
            <div className="box-projetos">
                <Outlet />
            </div>


            <button className="buttonClose" onClick={fechar}>X</button>
        </div>

    );
}