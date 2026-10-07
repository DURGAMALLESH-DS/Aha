import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tamiltimelessclassics } from '../models/tamiltimelessclassics';

@Injectable({
  providedIn: 'root'
})
export class TamiltimelessclassicsService {
  private baseurl = "assets/tamiltimelessclassicsimages.json";
    constructor(private http:HttpClient){}
    onSubmit():Observable<Tamiltimelessclassics[]>{
      return this.http.get<Tamiltimelessclassics[]>(this.baseurl);
    }
}
