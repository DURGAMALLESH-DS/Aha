import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Highvoltage } from '../models/highvoltage';

@Injectable({
  providedIn: 'root'
})
export class HighvoltageService {
    private baseurl = "assets/highvoltageimages.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Highvoltage[]>{
        return this.http.get<Highvoltage[]>(this.baseurl);
      }
}
