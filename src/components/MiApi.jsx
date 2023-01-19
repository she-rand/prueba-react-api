import { useEffect, useState } from "react"
import Card from "./Card"

function MiApi() {
  useEffect(()=>{
     getData()

  },[])

const [pokemones, setPokemones]=useState([])
const [pokemonesInfo, setPokemonesInfo]=useState([])
const [findPokemon,setFindPokemon]=useState([])

const getDataByUrl=async(name,url)=>{
  const response=await fetch(url);
  const data= await response.json();
  const urlPhoto=data.sprites.other.dream_world.front_default;
  
  return {name:name,urlPhoto:urlPhoto};
  

  
}

const handleFilter=(e)=>{
  setFindPokemon(e.target.value);
 };


  const getData=async()=>{

    const response=await fetch('https://pokeapi.co/api/v2/pokemon')
    const data= await response.json()
    setPokemones(data.results)
    const todos=await Promise.all(data.results.map(async (elem)=>{
      return  getDataByUrl(elem.name,elem.url)
}))
  setPokemonesInfo(todos)
   
  }

  
  return (
    <div>
      <div className="grid-container">
        <header>
          <h1 className="m-2">Pokemones</h1>
        </header>
        <div className="filter">
            <input name="filtrar" className="m-3" placeholder="Ingresa un nombre" onChange={handleFilter} value={findPokemon}></input>
        </div>
        <main>
          
          {pokemonesInfo.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            // a must be equal to b
            return 0;
}).filter((elem)=>  elem.name.toLowerCase().includes(findPokemon.toString().toLowerCase())).map((pokemonInfo)=>{
            return <Card key={pokemonInfo.name} titulo={pokemonInfo.name} url={pokemonInfo.urlPhoto}/>
          })}
         
        </main>
      </div>
      
    </div>
   
  )
}

export default MiApi;

