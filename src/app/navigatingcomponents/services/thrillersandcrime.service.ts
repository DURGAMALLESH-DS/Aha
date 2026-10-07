import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Thrillersandcrime } from '../models/thrillersandcrime';

@Injectable({
  providedIn: 'root'
})
export class ThrillersandcrimeService {
    private baseurl = "assets/thrillersandcrimeimages.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Thrillersandcrime[]>{
        return this.http.get<Thrillersandcrime[]>(this.baseurl);
      }
}
