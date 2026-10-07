import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heartfeltdrama } from '../models/heartfeltdrama';

@Injectable({
  providedIn: 'root'
})
export class HeartfeltdramaService {
    private baseurl = "assets/heartfeltdramaimages.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Heartfeltdrama[]>{
        return this.http.get<Heartfeltdrama[]>(this.baseurl);
      }
}
