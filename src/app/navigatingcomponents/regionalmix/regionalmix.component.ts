import { Component } from '@angular/core';
import { RegionalmixService } from '../services/regionalmix.service';

@Component({
  selector: 'app-regionalmix',
  templateUrl: './regionalmix.component.html',
  styleUrls: ['./regionalmix.component.css']
})
export class RegionalmixComponent {
   images:any;
    constructor(private service:RegionalmixService){}
    ngOnInit(){
      this.service.onSubmit().subscribe(data=>this.images=data);
    }
}
