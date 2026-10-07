import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Watchinteluguandtamil } from '../models/watchinteluguandtamil';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchinteluguandtamilService {
    private baseurl = "assets/watchinteluguandtamilimages.json";
      constructor(private http:HttpClient){}
      onSubmit():Observable<Watchinteluguandtamil[]>{
        return this.http.get<Watchinteluguandtamil[]>(this.baseurl);
      }
}
