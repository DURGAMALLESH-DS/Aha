import { Component } from '@angular/core';
import { TamiltimelessclassicsService } from '../services/tamiltimelessclassics.service';

@Component({
  selector: 'app-tamiltimelessclassics',
  templateUrl: './tamiltimelessclassics.component.html',
  styleUrls: ['./tamiltimelessclassics.component.css']
})
export class TamiltimelessclassicsComponent {
   images:any;
    constructor(private service:TamiltimelessclassicsService){}
    ngOnInit(){
      this.service.onSubmit().subscribe(data=>this.images=data);
    }
}
