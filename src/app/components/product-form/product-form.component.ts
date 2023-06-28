import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Ingredient } from 'src/app/interfaces/Ingredient';
import { IngredientsService } from 'src/app/services/ingredients.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  productForm: FormGroup;

  typeArr: string[] = ["pizzas", "pastas"];
  ingredientArr!: Ingredient[];

  constructor(private formbuilder: FormBuilder,
    private IngredientsService: IngredientsService) {
    this.getAllIngredients();
    this.productForm = this.formbuilder.group({
      number: [0, Validators.required],
      name: ["", Validators.required],
      type: ["", Validators.required],
      ingredient: [[], Validators.required],
      price: [0, Validators.required],
    });
  }

  addNew() {
    console.log("Added Product", this.productForm.value);
  }

  getAllIngredients() :void {
    this.IngredientsService.getAll().subscribe((ingredients) => {
      this.ingredientArr = ingredients;
    })
    console.log(this.ingredientArr);
  }
}
