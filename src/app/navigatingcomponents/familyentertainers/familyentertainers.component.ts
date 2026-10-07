import { Component } from '@angular/core';
import { FamilyentertainersService } from '../services/familyentertainers.service';

@Component({
  selector: 'app-familyentertainers',
  templateUrl: './familyentertainers.component.html',
  styleUrls: ['./familyentertainers.component.css']
})
export class FamilyentertainersComponent {
   images:any;
    constructor(private service:FamilyentertainersService){}
    ngOnInit(){
      this.service.onSubmit().subscribe(data=>this.images=data);
    }
}
