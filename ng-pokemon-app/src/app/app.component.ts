import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  templateUrl: "pokemon.html",
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit() {
    console.table(this.pokemonList);
  }
  selectedPokemon(id: string) {
    let pokemon = this.pokemonList.find(pk=>pk.id == +id);
    if(pokemon)
    {
      console.log(`vous avez selectionné le pokemeon ${pokemon?.name}` )
      this.pokemonSelected = pokemon;
    }else{
      console.log(`Ce pokemon n'existe pas `)
    }
  }

  selectPokemon(event: MouseEvent) {
    const index: number = +(event.target as HTMLInputElement).value;
    console.log(
      `Vous avez cliquez sur le pokemon ${this.pokemonList[index].name}`
    );
  }
}
