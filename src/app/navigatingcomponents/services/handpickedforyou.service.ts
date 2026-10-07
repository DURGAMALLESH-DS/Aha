import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Handpickedforyou } from '../models/handpickedforyou';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HandpickedforyouService {
    private baseurl = "assets/handpickedforyouimages.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Handpickedforyou[]>{
        return this.http.get<Handpickedforyou[]>(this.baseurl);
      }
}
