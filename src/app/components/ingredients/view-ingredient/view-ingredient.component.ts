import { Component } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';

import { IngredientsService } from 'src/app/services/ingredients.service';
import { Ingredient } from 'src/app/interfaces/Ingredient';

@Component({
  selector: 'app-view-ingredient',
  templateUrl: './view-ingredient.component.html',
  styleUrls: ['./view-ingredient.component.css']
})
export class ViewIngredientComponent {
  itemId!: string;
  itemView!: Ingredient;
  edit:boolean = false;

  constructor( private router:Router, 
    private ingredientsService: IngredientsService,
    private route: ActivatedRoute ){}

    ngOnInit(){
      this.itemId = this.route.snapshot.paramMap.get("id") || "";
      console.log(this.itemView);
      if(this.itemId === "") this.router.navigateByUrl("/ingredient/list");
      
      try {
        this.ingredientsService.getIngById(Number(this.itemId)).subscribe((ingredient:Ingredient) => {
          this.itemView = ingredient

          if (!this.itemView) {
            console.error(`Item with ID ${this.itemId} not found.`);
            this.router.navigateByUrl('/ingredient/list'); // Navigate back to the home page
          }
        })
      } catch (error) {
        console.error(error);
      }
    }

    changeToEdit(){
      this.edit = !this.edit;
    }
}
