import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient } from '../interfaces/Ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private apiUrl = "http://localhost:3000/ingredients";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Ingredient[]>{
    return this.http.get<Ingredient[]>(this.apiUrl);
  }

  getIngById(id: number): Observable<Ingredient> {
    return this.http.get<Ingredient>(this.apiUrl+"/"+id);
  }

  Create(item: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(this.apiUrl, item);
  }

  Update(item: any): Observable<Ingredient> {
    const url = `${this.apiUrl}/${item.id}`;
    return this.http.put<Ingredient>(url, item);
  }

  delete(id: number): Observable<Ingredient> {
    return this.http.delete<Ingredient>(this.apiUrl+"/"+id);
  }
}
