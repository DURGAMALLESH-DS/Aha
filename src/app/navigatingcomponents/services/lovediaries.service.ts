import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lovediaries } from '../models/lovediaries';

@Injectable({
  providedIn: 'root'
})
export class LovediariesService {
    private baseurl = "assets/lovediariesimages.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Lovediaries[]>{
        return this.http.get<Lovediaries[]>(this.baseurl);
      }
}
