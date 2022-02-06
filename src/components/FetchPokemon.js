import React, { useState, useEffect, useRef } from "react"
import axios from "axios"

const FetchPokemon = props => {
    const { pokemon, setPokemon } = props

    // THIS BLOCK PREVENTS useEffect from running on initial page load
    const useDidMountEffect = (func, deps) => {
        const didMount = useRef(false);
    
        useEffect(() => {
            if (didMount.current) func();
            else didMount.current = true;
        }, deps);
    }
    // THIS BLOCK PREVENTS useEffect from running on initial page load

    const [clicked, setClicked] = useState(false)

    useDidMountEffect( ()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807").then(response=>{
            let results = response.data.results.map( p => p.name)
            setPokemon(results)
        }).catch(err=>{console.log(err)})
    }, [clicked] )

    const onClick = e => {
        clicked?
        setClicked(false):
        setClicked(true)
    }

    return(
        <div className="row" style={{marginTop: "30px"}}>
            <div className="col-12 text-center">
                <button onClick={ onClick } type="button" className="btn btn-primary btn-lg">Fetch Pokemon</button>
            </div>
        </div>
    )
}

export default FetchPokemon