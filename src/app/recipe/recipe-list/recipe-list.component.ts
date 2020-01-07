import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
// tslint:disable-next-line:max-line-length

  selectedRecipe: Recipe;
  recipe = new Recipe('Dummy', 'Dummy', 'https://static.turbosquid.com/Preview/2019/02/18__04_59_25/Crash_Test_Dummy_Rigged_mb_00.jpg5B1ADE98-2892-494F-9EB2-F0B49A1BE375DefaultHQ.jpg');
@Output() recipeSelected = new EventEmitter<Recipe>();
constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
  this.recipeSelected.emit(this.recipe);
  }
}
