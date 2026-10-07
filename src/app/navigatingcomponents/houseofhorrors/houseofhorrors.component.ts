import { Component } from '@angular/core';
import { HouseofhorrorsService } from '../services/houseofhorrors.service';

@Component({
  selector: 'app-houseofhorrors',
  templateUrl: './houseofhorrors.component.html',
  styleUrls: ['./houseofhorrors.component.css']
})
export class HouseofhorrorsComponent {
   images:any;
    constructor(private service:HouseofhorrorsService){}
    ngOnInit(){
      this.service.onSubmit().subscribe(data=>this.images=data);
    }
}
