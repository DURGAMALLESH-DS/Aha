import { Component } from '@angular/core';
import { WatchbylanguageService } from '../services/watchbylanguage.service';

@Component({
  selector: 'app-watchbylanguage',
  templateUrl: './watchbylanguage.component.html',
  styleUrls: ['./watchbylanguage.component.css']
})
export class WatchbylanguageComponent {
   images:any;
    constructor(private service:WatchbylanguageService){}
    ngOnInit(){
      this.service.onSubmit().subscribe(data=>this.images=data);
    }
}
