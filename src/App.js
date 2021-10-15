// Importação de Módulos e Bibliotecas
import "./App.css"
import theMovieDB from "./theMovieDB"
import Header from "./Components/Header";
import React, { useEffect, useState }  from "react";
import LinhaDeFilmes from "./Components/LinhaDeFilmes";
import FilmeEmDestaque from "./Components/FilmeEmDestaque";

export default () => {
    // Declaração de Constantes
    const [ listaFilmes, setListaFilmes ] = useState([]);
    const [ headerPreto, setHeaderPreto] = useState(false);
    const [ dadosFilmeDestaque, setDadosFilmeDestaque] = useState(null);
    
    useEffect(() => {
        const carregarTudo = async () => {
            // Pegar Lista Total de Filmes
            let lista = await theMovieDB.getListaHome();
            setListaFilmes(lista);

            // Pegar Filme em Destaque
            let originals = lista.filter(i => i.slug === "originals");
            let escolhaAleatoria = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let emDestaque = originals[0].items.results[escolhaAleatoria];
            let infoEmDestaque = await theMovieDB.getInfoFilme(emDestaque.id, "tv")
            setDadosFilmeDestaque(infoEmDestaque);
        }
        carregarTudo();
    }, []);

    useEffect(() => {
        const scrollOuvinte = () => {
            if (window.scrollY > 20) { setHeaderPreto(true); }
            else { setHeaderPreto(false); }
        }
        window.addEventListener("scroll", scrollOuvinte);
        return () => { window.removeEventListener("scroll", scrollOuvinte); }
    }, []);

    return (
        <div className="page">
            <Header preto={ headerPreto }/>

            {dadosFilmeDestaque && 
                <FilmeEmDestaque item={ dadosFilmeDestaque }/>
            }

            <section className="listas">
                {listaFilmes.map((item, chave) => (
                    <LinhaDeFilmes key={chave} titulo={item.title} itens={item.items}/>
                ))}
            </section>

            <footer>
                Feito com <span role="img" aria-label="coração">❤</span> pela B7Web<br/>
                Diteitos de imagens para NetFlix<br/>
                Dados pegos do site themoviedb.org
            </footer>

            {listaFilmes.length <= 0 &&
                <div className="carregamento">
                    <img src="https://1.bp.blogspot.com/-B9juta27w6o/Xzk4GGrOziI/AAAAAAABtpE/0OMhU_0hPTY7PhayDfL3eJ5mIc2csWWWwCLcBGAsYHQ/s1600/Netflix_LoadTime.gif" alt="Carregando"/>
                </div>
            }
        </div>
    );
}
