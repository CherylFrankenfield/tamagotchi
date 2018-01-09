var Pokedex = require('pokedex-promise-v2');
var options = {
  protocol: 'http',
  hostName: 'pokeapi.salestock.net',
  versionPath: '/api/v2/',
  cacheLimit: 100 * 1000, // 100s
  timeout: 5 * 1000 // 5s
}
const P = new Pokedex(options);

// P.getPokemonByName('bulbasaur') // with Promise
//    .then(function(response) {
//      console.log(response);
//    });
let poke = P.getPokemonByName('bulbasaur') // with Promise
 .then(function(response) {
   console.log(response);
   console.log(response.stats[0].stat.name);
   $("#pokename").append(response.name);
   $("#ability1").append(response.abilities[0].ability.name);
   $("#ability2").append(response.abilities[1].ability.name);
   $("#stat1").append(response.stats[0].stat.name);
   $("#stat2").append(response.stats[1].stat.name);
   $("#stat3").append(response.stats[2].stat.name);
   $("#stat4").append(response.stats[3].stat.name);
 })
 .catch(function(error) {
   console.log('There was an ERROR: ', error);
 });
