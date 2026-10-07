import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hiddengems } from '../models/hiddengems';

@Injectable({
  providedIn: 'root'
})
export class HiddengemsService {
    private baseurl = "assets/hiddengemsimages.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Hiddengems[]>{
        return this.http.get<Hiddengems[]>(this.baseurl);
      }
}
