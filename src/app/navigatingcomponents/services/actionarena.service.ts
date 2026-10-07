import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actionarena } from '../models/actionarena';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActionarenaService {
    private baseurl = "assets/actionarenaimages.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Actionarena[]>{
        return this.http.get<Actionarena[]>(this.baseurl);
      }
}
