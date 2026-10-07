import { Component } from '@angular/core';
import { LaughterloadedService } from '../services/laughterloaded.service';

@Component({
  selector: 'app-laughterloaded',
  templateUrl: './laughterloaded.component.html',
  styleUrls: ['./laughterloaded.component.css']
})
export class LaughterloadedComponent {
   images:any;
    constructor(private service:LaughterloadedService){}
    ngOnInit(){
      this.service.onSubmit().subscribe(data=>this.images=data);
    }
}
