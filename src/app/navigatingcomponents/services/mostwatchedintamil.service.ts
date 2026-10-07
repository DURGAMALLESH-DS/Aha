import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mostwatchedintamil } from '../models/mostwatchedintamil';

@Injectable({
  providedIn: 'root'
})
export class MostwatchedintamilService {
    private baseurl = "assets/mostwatchedintamilimages.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Mostwatchedintamil[]>{
        return this.http.get<Mostwatchedintamil[]>(this.baseurl);
      }
}
