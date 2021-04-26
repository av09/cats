import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(
    private http: HttpClient,
  ) { }

  getCatBreeds(limit?: number): Observable<Cat[]> {
    return this.http.get<Cat[]>(`https://api.thecatapi.com/v1/breeds?limit=${limit}`);
  }

  getCatInfo(breedId: string | null): Observable<Cat[]> {
    return this.http.get<Cat[]>(`https://api.thecatapi.com/v1/breeds/search?q=${breedId}`);
  }
}
