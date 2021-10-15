// Importação de Módulos e Bibliotecas
import React from "react";
import "./Header.css";

export default ({ preto }) => {
    return (
        <header className={preto ? "preto" : ""}>
            <div className="header-logo">
                <a href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png" alt="NetFlix"/></a>
            </div>
            
            <div className="header-usuario">
                <a href="/"><img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="NetFlix"/></a>
            </div>
        </header>
    );
}
