import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CreateComponent } from './components/products/create/create.component';
import { IngredientFormComponent } from './components/ingredient-form/ingredient-form.component';
import { CreateIngredientComponent } from './components/ingredients/create-ingredient/create-ingredient.component';
import { ListIngredientComponent } from './components/ingredients/list-ingredient/list-ingredient.component';
import { ViewIngredientComponent } from './components/ingredients/view-ingredient/view-ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    ProductFormComponent,
    CreateComponent,
    IngredientFormComponent,
    CreateIngredientComponent,
    ListIngredientComponent,
    ViewIngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
