import { Component } from '@angular/core';
import { Watchin4kService } from '../services/watchin4k.service';

@Component({
  selector: 'app-watchin4k',
  templateUrl: './watchin4k.component.html',
  styleUrls: ['./watchin4k.component.css']
})
export class Watchin4kComponent {
   images:any;
    constructor(private service:Watchin4kService){}
    ngOnInit(){
      this.service.onSubmit().subscribe(data=>this.images=data);
    }
}
