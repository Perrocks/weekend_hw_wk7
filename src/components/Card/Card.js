import React from "react";
import './Card.css';

function Card({ pokemon }) {
    return (<div className="Card">
        <div className="Card__img">
            <img src={pokemon.sprites.front_default} alt="" />
            <img src={pokemon.sprites.front_shiny} alt="" />
        </div>

        <div className="Card__name">

            {pokemon.name}
        </div>

        <div className="Card__types">
            <div>
                {pokemon.types.map(type => {
                    return (
                        <div className="Card__type">
                            {type.type.name}
                        </div>
                    )
                })}
            </div>
        </div>

        <div className="Card__info">
            <div className="Card__data Card__data--weight">
                <p className="title">Weight</p>
                <p className="weight">{pokemon.weight / 10}kg</p>
            </div>
            <div className="Card__data Card__data--height">
                <p className="title">Height</p>
                <p className="height">{pokemon.height / 10}m</p>
            </div>
            <div className="Card__data Card__data--id">
                <p className="title">Pokédex No.</p>
                <p>{pokemon.id}</p>
            </div>
        </div>
    </div >
    )
} 
 
export default Card