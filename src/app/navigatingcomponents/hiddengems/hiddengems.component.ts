import { Component } from '@angular/core';
import { HiddengemsService } from '../services/hiddengems.service';

@Component({
  selector: 'app-hiddengems',
  templateUrl: './hiddengems.component.html',
  styleUrls: ['./hiddengems.component.css']
})
export class HiddengemsComponent {
   images:any;
    constructor(private service:HiddengemsService){}
    ngOnInit(){
      this.service.onSubmit().subscribe(data=>this.images=data);
    }
}
