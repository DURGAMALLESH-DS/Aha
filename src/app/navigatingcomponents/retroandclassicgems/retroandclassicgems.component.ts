import { Component } from '@angular/core';
import { RetroandclassicgemsService } from '../services/retroandclassicgems.service';

@Component({
  selector: 'app-retroandclassicgems',
  templateUrl: './retroandclassicgems.component.html',
  styleUrls: ['./retroandclassicgems.component.css']
})
export class RetroandclassicgemsComponent {
   images:any;
    constructor(private service:RetroandclassicgemsService){}
    ngOnInit(){
      this.service.onSubmit().subscribe(data=>this.images=data);
    }
}
