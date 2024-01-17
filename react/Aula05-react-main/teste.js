import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();

P.getPokemonByName(['eevee', 'ditto']) // with Promise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log('There was an ERROR: ', error);
  });
