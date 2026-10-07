import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mysteryandsupernatural } from '../models/mysteryandsupernatural';

@Injectable({
  providedIn: 'root'
})
export class MysteryandsupernaturalService {
    private baseurl = "assets/mysteryandsupernaturalimages.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Mysteryandsupernatural[]>{
        return this.http.get<Mysteryandsupernatural[]>(this.baseurl);
      }
}
