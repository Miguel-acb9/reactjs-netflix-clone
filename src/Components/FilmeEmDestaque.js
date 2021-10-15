import React from "react";
import "./FilmeEmDestaque.css";


export default ({ item }) => {
    // Declaração de Variáveis
    let data_lancamento = new Date(item.first_air_date);
    let listaGeneros = [];
    for(let i in item.genres) { listaGeneros.push(item.genres[i].name); }
    
    // Limitar tamanho da descrição
    let descricao = item.overview;
    if (descricao.length > 200) { descricao = descricao.substring(0, 200) + "..."; }

    return (
        <section className="emDestaque" style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`     
        }}>
            <div className="emDestaque-vertical">
                <div className="emDestaque-horizontal">
                    <div className="emDestaque-nome">{ item.original_name }</div>
                    
                    <div className="emDestaque-info">
                        <div className="emDestaque-pontos">{ item.vote_average } pontos</div>
                        <div className="emDestaque-lancamento">{ data_lancamento.getFullYear() }</div>
                        <div className="emDestaque-temporadas">{ item.number_of_seasons } temporada{item.number_of_seasons !== 1 ? "s" : ""}</div>
                    </div>

                    <div className="emDestaque-descricao">{ descricao }</div>
                    
                    <div className="emDestaque-butoes">
                        <a href={`/assistir/${item.id}`} className="emDestaque-btnAssistir">▶ Assistir</a>
                        <a href={`/lista/adicionar/${item.id}`} className="emDestaque-btnAdicionar">+ Minha Lista</a>
                    </div>
                    
                    <div className="emDestaque-genero"><strong>Gêneros: </strong>{ listaGeneros.join(", ") }</div>
                </div>
            </div>
        </section>
    );
}

