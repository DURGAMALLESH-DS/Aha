import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Houseofhorrors } from '../models/houseofhorrors';

@Injectable({
  providedIn: 'root'
})
export class HouseofhorrorsService {
    private baseurl = "assets/houseofhorrorsimages.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Houseofhorrors[]>{
        return this.http.get<Houseofhorrors[]>(this.baseurl);
      }
}
