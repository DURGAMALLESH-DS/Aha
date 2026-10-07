import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mollywoodmood } from '../models/mollywoodmood';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MollywoodmoodService {
  private baseurl = "assets/mollywoodmoodimages.json";
  private baseurl1 ="http://localhost:8081/api/v1/mollywoodmooddata";
  constructor(private http:HttpClient) { }
  onSubmit():Observable<Mollywoodmood[]>{
    return this.http.get<Mollywoodmood[]>(this.baseurl);
  }
}
