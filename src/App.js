import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
    };
  }

   // We use async because we want to wait for the response to come back before rendering the full page
   async componentDidMount() {
    //change url to "/api/pokemon" to use your own server to hit the pokemon API
    const pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon");
    this.setState({
      pokemon: pokemon.data.results,
    });
  }

  render() {
    console.log("We store the response in state here:", this.state.pokemon);
    return (
      <div className="App">
        <h1>Pokemon API</h1>
        <h4>Open up DevTools console</h4>
      </div>
    );
  }
}

export default App;
