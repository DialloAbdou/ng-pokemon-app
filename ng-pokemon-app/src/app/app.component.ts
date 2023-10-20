import { Component, OnInit } from "@angular/core";
import {POKEMONS} from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>Liste des Pokemons!</h1>
    </div>
  `,
})
export class AppComponent implements OnInit {
  pokemonList : Pokemon[]=POKEMONS ;
  ngOnInit() {
     
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(` vous avez selectionnez ${pokemon.name}`);
  }
}
