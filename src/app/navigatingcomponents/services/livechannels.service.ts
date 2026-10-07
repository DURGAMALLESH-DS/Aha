import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livechannels } from '../models/livechannels';

@Injectable({
  providedIn: 'root'
})
export class LivechannelsService {
    private baseurl = "assets/livechannelsimages.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Livechannels[]>{
        return this.http.get<Livechannels[]>(this.baseurl);
      }
}
