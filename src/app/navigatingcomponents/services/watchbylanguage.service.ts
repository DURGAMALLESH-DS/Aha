import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Watchbylanguage } from '../models/watchbylanguage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchbylanguageService {
    private baseurl = "assets/watchbylanguageimages.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Watchbylanguage[]>{
        return this.http.get<Watchbylanguage[]>(this.baseurl);
      }
}
