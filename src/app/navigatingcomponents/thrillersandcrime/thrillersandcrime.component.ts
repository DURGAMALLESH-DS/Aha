import { Component } from '@angular/core';
import { ThrillersandcrimeService } from '../services/thrillersandcrime.service';

@Component({
  selector: 'app-thrillersandcrime',
  templateUrl: './thrillersandcrime.component.html',
  styleUrls: ['./thrillersandcrime.component.css']
})
export class ThrillersandcrimeComponent {
   images:any;
    constructor(private service:ThrillersandcrimeService){}
    ngOnInit(){
      this.service.onSubmit().subscribe(data=>this.images=data);
    }
}
