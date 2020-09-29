import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

  //Normally you'd use environment tools to protect these.
  const APP_ID = '32887e3f'
  const APP_KEY = 'a3682fcc7c9c1dbbf3f353117ade4f36'
  const exampleText = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [counter, setCounter] = useState(0)

  useEffect(() => {
  	console.log('Effect has been run')
  })

  return (
    <div className="App">
      <form className="search-form">
      	<input className="search-bar" type="text"/>
      	<button className="search-button" type="submit">
      		Search
      	</button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
}

export default App;
