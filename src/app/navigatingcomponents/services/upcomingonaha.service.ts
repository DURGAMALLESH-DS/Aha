import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Upcomingonaha } from '../models/upcomingonaha';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpcomingonahaService {
    private baseurl = "assets/upcomingonahaimages.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Upcomingonaha[]>{
        return this.http.get<Upcomingonaha[]>(this.baseurl);
      }
}
