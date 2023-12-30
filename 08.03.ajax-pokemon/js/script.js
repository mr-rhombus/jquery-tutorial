$(function() {
  let pokeAPIUrl = 'https://pokeapi.co/api/v2/generation/9';

  $.getJSON(pokeAPIUrl).done(function(data) {
    console.log(data);
    $.each(data.pokemon_species, function(ix, pokemon) {
      let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
      let par = $('<p>').html('Paldea pokemon species no. ' + (ix + 1) + ' is ' + name);
      console.log(par);
      par.appendTo('#pokedex');
    });
  }).fail(function() {
    console.log('Request to PokeAPI failed');
  }).always(function() {
    console.log('Pokemon is awesome!');
  })
});