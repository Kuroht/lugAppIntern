import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/products/create/create.component';
import { ListIngredientComponent } from './components/ingredients/list-ingredient/list-ingredient.component';
import { CreateIngredientComponent } from './components/ingredients/create-ingredient/create-ingredient.component';
import { ViewIngredientComponent } from './components/ingredients/view-ingredient/view-ingredient.component';

const routes: Routes = [
  { path:"", component: HomeComponent },
  { path:"product/create", component: CreateComponent },
  { path:"ingredient/list", component: ListIngredientComponent },
  { path:"ingredient/view/:id", component: ViewIngredientComponent },
  { path:"ingredient/new", component: CreateIngredientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
