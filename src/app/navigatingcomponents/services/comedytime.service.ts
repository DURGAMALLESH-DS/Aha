import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comedytime } from '../models/comedytime';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComedytimeService {
    private baseurl = "assets/comedytimeimages.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Comedytime[]>{
        return this.http.get<Comedytime[]>(this.baseurl);
      }
}
