import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Killertwists } from '../models/killertwists';

@Injectable({
  providedIn: 'root'
})
export class KillertwistsService {
    private baseurl = "assets/killertwistsimages.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Killertwists[]>{
        return this.http.get<Killertwists[]>(this.baseurl);
      }
}
