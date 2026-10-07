import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emotionalanddrama } from '../models/emotionalanddrama';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmotionalanddramaService {
    private baseurl = "assets/emotionalanddramaimages.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Emotionalanddrama[]>{
        return this.http.get<Emotionalanddrama[]>(this.baseurl);
      }
}
