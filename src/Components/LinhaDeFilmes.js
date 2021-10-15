import "./LinhaDeFilmes.css";
import React, { useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

export default ({ titulo, itens }) => {
    // Declaração de Constantes
    const [ rolarX, setRolarX ] = useState(0);

    const lidarSetaDireita = () => {
        let tam_lista = itens.results.length * 150;
        let x = rolarX - Math.round(window.innerWidth / 2);
        
        if(window.innerWidth - tam_lista > x) {
            x = (window.innerWidth - tam_lista) - 60
        }
        setRolarX(x);
    }

    const lidarSetaEsquerda = () => {
        let x = rolarX + Math.round(window.innerWidth / 2);
        if(x > 0) { x = 0; }
        setRolarX(x);
    }
    
    return [
        <div className="linhaFilmes">
            <h2>{ titulo }</h2>
            
            <div className="linhaFilmes-esquerda" onClick={lidarSetaEsquerda}>
                <GoChevronLeft style={{fontSize: 50}}/>
            </div>

            <div className="linhaFilmes-direita" onClick={lidarSetaDireita}>
                <GoChevronRight style={{fontSize: 50}}/>
            </div>
            
            <div className="linhaFilmes-areaLista">
                <div className="linhaFilmes-lista" style={{
                    marginLeft: rolarX,
                    width: itens.results.length * 150
                }}>
                    {itens.results.length > 0 && itens.results.map(( item, chave ) => (
                        <div key={chave} className="linhaFilmes-item">
                            <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.original_title}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ];
}
