import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private apiUrl = 'http://localhost:8000/api/animals'; // Ajusta la URL según tu configuración

  constructor(private http: HttpClient) {}

  searchAnimals(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?query=${query}`);
  }
}
