import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heartbeatstories } from '../models/heartbeatstories';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeartbeatstoriesService {
    private baseurl = "assets/heartbeatstoriesimages.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Heartbeatstories[]>{
        return this.http.get<Heartbeatstories[]>(this.baseurl);
      }
}
