import { Component, HostListener  } from '@angular/core';
import { Router } from '@angular/router';

import { IngredientsService } from 'src/app/services/ingredients.service';
import { Ingredient } from 'src/app/interfaces/Ingredient';

@Component({
  selector: 'app-list-ingredient',
  templateUrl: './list-ingredient.component.html',
  styleUrls: ['./list-ingredient.component.css']
})
export class ListIngredientComponent {
  ingredientsArr!: Ingredient[];
  isMobile: boolean = false;
  
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.checkIfMobile();
  }

  constructor(private IngredientsService:IngredientsService,
    private router:Router) {
    this.getAllIngredients();
    this.checkIfMobile();
    console.log(this.isMobile);
  }

  getAllIngredients(){
    this.IngredientsService.getAll().subscribe((ingredients : Ingredient[]) => (
      this.ingredientsArr = ingredients
    ))
  }

  viewItem(item: any) {
    this.router.navigate(['/ingredient/view/', item.id]);
  }

  delete(item: any):void{
    this.IngredientsService.delete(item.id).subscribe()
  }

  edit(item: any):void{
    this.router.navigate(['/ingredient/view/', item.id]);
  }

  private checkIfMobile() {
    this.isMobile = window.innerWidth < 768;
  }
}
