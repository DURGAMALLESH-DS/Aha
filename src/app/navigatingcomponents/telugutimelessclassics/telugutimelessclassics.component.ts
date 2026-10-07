import { Component } from '@angular/core';
import { TelugutimelessclassicsService } from '../services/telugutimelessclassics.service';

@Component({
  selector: 'app-telugutimelessclassics',
  templateUrl: './telugutimelessclassics.component.html',
  styleUrls: ['./telugutimelessclassics.component.css']
})
export class TelugutimelessclassicsComponent {
   images:any;
    constructor(private service:TelugutimelessclassicsService){}
    ngOnInit(){
      this.service.onSubmit().subscribe(data=>this.images=data);
    }
}
