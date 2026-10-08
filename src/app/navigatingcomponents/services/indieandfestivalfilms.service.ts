import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Indieandfestivalfilms } from '../models/indieandfestivalfilms';

@Injectable({
  providedIn: 'root'
})
export class IndieandfestivalfilmsService {
    private baseurl = "assets/indieandfestivalfilms.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Indieandfestivalfilms[]>{
        return this.http.get<Indieandfestivalfilms[]>(this.baseurl);
      }
}
