import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Familyentertainers } from '../models/familyentertainers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FamilyentertainersService {
    private baseurl = "assets/familyentertainersimages.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Familyentertainers[]>{
        return this.http.get<Familyentertainers[]>(this.baseurl);
      }
}
