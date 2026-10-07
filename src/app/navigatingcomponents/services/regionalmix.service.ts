import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Regionalmix } from '../models/regionalmix';

@Injectable({
  providedIn: 'root'
})
export class RegionalmixService {
    private baseurl = "assets/regionalmiximages.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Regionalmix[]>{
        return this.http.get<Regionalmix[]>(this.baseurl);
      }
}
