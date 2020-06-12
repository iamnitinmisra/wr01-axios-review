const axios = require('axios')

//This example shows how to hit an external API on the backend.

//Use nodemon => GET REQUEST http://localhost:4600/api/pokemon

module.exports = {
    getAllPokemon: async (req, res) => {
        const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon')

        console.log(pokemon.data)

        if(pokemon.data){
            res.status(200).send(pokemon.data)
        }
        
    }
}