import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nenenanine } from '../models/nenenanine';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NenenanineService {
  private baseurl = "assets/nenenanineimages.json";
    constructor(private http:HttpClient){}
    onSubmit():Observable<Nenenanine[]>{
      return this.http.get<Nenenanine[]>(this.baseurl);
    }
}
