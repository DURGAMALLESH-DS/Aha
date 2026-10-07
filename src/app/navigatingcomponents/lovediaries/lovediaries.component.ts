import { Component } from '@angular/core';
import { LovediariesService } from '../services/lovediaries.service';

@Component({
  selector: 'app-lovediaries',
  templateUrl: './lovediaries.component.html',
  styleUrls: ['./lovediaries.component.css']
})
export class LovediariesComponent {
   images:any;
    constructor(private service:LovediariesService){}
    ngOnInit(){
      this.service.onSubmit().subscribe(data=>this.images=data);
    }
}
