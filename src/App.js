import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

  //Normally you'd use environment tools to protect these.
  const APP_ID = '32887e3f'
  const APP_KEY = 'a3682fcc7c9c1dbbf3f353117ade4f36'

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
  	getRecipes()
  }, []) //Second argument of useEffect. Empy array makes useEffect run once and not everytime we increment the counter. [counter]
  				//makes useEffect run everytime counter changes.

  const getRecipes = async () => {
  	const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`) //We're waiting and requesting from a external API
  																												//We don't know when this info will come back. So
  																												//we need to add await(line 18) every time we have
  																												//a promise.
  	const data = await response.json() //Formats in a way that we can work with the data.
  	console.log(data.hits)
  }

  return (
    <div className="App">
      <form className="search-form">
      	<input className="search-bar" type="text"/>
      	<button className="search-button" type="submit">
      		Search
      	</button>
      </form>
    </div>
  );
}

export default App;
