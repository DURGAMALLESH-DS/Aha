import { Injectable } from '@angular/core';
import { Fantasticfafa } from '../models/fantasticfafa';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FantasticfafaService {
  private baseurl="assets/fantasticfafa.json"
  private baseurl1="http://localhost:8081/api/v1/fantasticfafadata"
    constructor(private http:HttpClient){}
    onSubmit():Observable<Fantasticfafa[]>{
      return this.http.get<Fantasticfafa[]>(this.baseurl)
    }
}
