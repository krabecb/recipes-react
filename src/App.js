import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe'

const App = () => {

  //Normally you'd use environment tools to protect these.
  const APP_ID = '32887e3f'
  const APP_KEY = 'a3682fcc7c9c1dbbf3f353117ade4f36'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
  	getRecipes()
  }, [query]) //Second argument of useEffect. Empty array makes useEffect run once and not everytime we increment the counter. [counter]
  				//makes useEffect run everytime counter changes.

  const getRecipes = async () => {
  	const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`) //We're waiting and requesting from a external API
  																												//We don't know when this info will come back. So
  																												//we need to add await(line 18) every time we have
  																												//a promise.
  	const data = await response.json() //Formats in a way that we can work with the data.
  	setRecipes(data.hits)
  	console.log(data.hits)
  }

  const updateSearch = e => {
  	setSearch(e.target.value)
  }

  const getSearch = e => {
  	e.preventDefault()
  	setQuery(search)
  	setSearch('')
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
      	<input className="search-bar" type="text" value={search} onChange={updateSearch}/>
      	<button className="search-button" type="submit">
      		Search
      	</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe =>(
        	<Recipe
        		key={recipe.recipe.label}
  	      	title={recipe.recipe.label} 
  	      	calories={recipe.recipe.calories} 
  	      	image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
