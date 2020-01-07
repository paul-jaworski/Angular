import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styles: []
})
export class RecipeComponent implements OnInit {
@Input() selectedRecipe:Recipe;
  constructor() { }

  ngOnInit() {
  }

}
