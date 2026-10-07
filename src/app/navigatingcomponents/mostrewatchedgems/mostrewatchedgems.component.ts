import { Component } from '@angular/core';
import { MostrewatchedgemsService } from '../services/mostrewatchedgems.service';

@Component({
  selector: 'app-mostrewatchedgems',
  templateUrl: './mostrewatchedgems.component.html',
  styleUrls: ['./mostrewatchedgems.component.css']
})
export class MostrewatchedgemsComponent {
   images:any;
    constructor(private service:MostrewatchedgemsService){}
    ngOnInit(){
      this.service.onSubmit().subscribe(data=>this.images=data);
    }
}
