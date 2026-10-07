import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Latestrelease } from '../models/latestrelease';

@Injectable({
  providedIn: 'root'
})
export class LatestreleaseService {
  private baseurl = "assets/images.json";
  private baseurl1 = "http://localhost:8081/api/v1/latestrelease";
  constructor(private http:HttpClient){}
  onSubmit():Observable<Latestrelease[]>{
    return this.http.get<Latestrelease[]>(this.baseurl);
  }
}
