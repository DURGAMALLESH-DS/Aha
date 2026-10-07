import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Retroandclassicgems } from '../models/retroandclassicgems';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetroandclassicgemsService {
    private baseurl = "assets/retroandclassicgemsimages.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Retroandclassicgems[]>{
        return this.http.get<Retroandclassicgems[]>(this.baseurl);
      }
}
