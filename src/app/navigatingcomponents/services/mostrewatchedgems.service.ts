import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mostrewatchedgems } from '../models/mostrewatchedgems';

@Injectable({
  providedIn: 'root'
})
export class MostrewatchedgemsService {
    private baseurl = "assets/mostrewatchedgemsimages.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Mostrewatchedgems[]>{
        return this.http.get<Mostrewatchedgems[]>(this.baseurl);
      }
}
