import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../models/genre';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
    private baseurl = "assets/genreimages.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Genre[]>{
        return this.http.get<Genre[]>(this.baseurl);
      }
}
