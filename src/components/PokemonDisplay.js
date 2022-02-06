import React from "react"


const PokemonDisplay = props => {
    const { pokemon } = props
    console.log(pokemon)
    return(
        <div className="row" style={{marginTop: "20px"}}>
            <div className="col-12 text-center">
            {    
                pokemon.map( (name, i)=> (
                    <p key={ i }>{ name }</p>
                ))
            }
            </div>
        </div>
    )

}

export default PokemonDisplay