import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cinematreats } from '../models/cinematreats';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CinematreatsService {
    private baseurl = "assets/cinematreatsimages.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Cinematreats[]>{
        return this.http.get<Cinematreats[]>(this.baseurl);
      }
}
