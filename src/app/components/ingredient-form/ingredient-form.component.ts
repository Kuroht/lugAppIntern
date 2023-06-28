import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Ingredient } from 'src/app/interfaces/Ingredient';
import { IngredientsService } from 'src/app/services/ingredients.service';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent implements OnChanges {
  @Input() editView!: boolean;
  @Input() ingredient!: Ingredient;

  ingredientForm: FormGroup;
  typeArr = ["meats", "cheeses", "sauces", "fish", "fruitsVegetables", "pasta"];

  constructor(private formBuilder: FormBuilder,
    private ingredientsService: IngredientsService) {
      this.ingredientForm = this.formBuilder.group({
        number: [0, Validators.required],
        name: ["", Validators.required],
        type: ["", Validators.required],
        price: [0, Validators.required],
      });
  }

  ngOnChanges(changes: SimpleChanges){
    if (changes["ingredient"] && changes["ingredient"].currentValue) {
      const currentIngredient = changes["ingredient"].currentValue;
      this.ingredientForm.patchValue(currentIngredient);
    }
  }

  addNew() : void {
    console.log("Added Ingredient", this.ingredientForm.value);
  }
}
