import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Watchin4k } from '../models/watchin4k';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Watchin4kService {
    private baseurl = "assets/watchin4kimages.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Watchin4k[]>{
        return this.http.get<Watchin4k[]>(this.baseurl);
      }
}
