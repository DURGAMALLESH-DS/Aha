import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mostwatchedintelugu } from '../models/mostwatchedintelugu';

@Injectable({
  providedIn: 'root'
})
export class MostwatchedinteluguService {
    private baseurl = "assets/mostwatchedinteluguimages.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Mostwatchedintelugu[]>{
        return this.http.get<Mostwatchedintelugu[]>(this.baseurl);
      }
}
