import { Component } from '@angular/core';
import { ComedytimeService } from '../services/comedytime.service';

@Component({
  selector: 'app-comedytime',
  templateUrl: './comedytime.component.html',
  styleUrls: ['./comedytime.component.css']
})
export class ComedytimeComponent {
   images:any;
    constructor(private service:ComedytimeService){}
    ngOnInit(){
      this.service.onSubmit().subscribe(data=>this.images=data);
    }
}
