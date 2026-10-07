import { Component } from '@angular/core';
import { HeartbeatstoriesService } from '../services/heartbeatstories.service';

@Component({
  selector: 'app-heartbeatstories',
  templateUrl: './heartbeatstories.component.html',
  styleUrls: ['./heartbeatstories.component.css']
})
export class HeartbeatstoriesComponent {
   images:any;
    constructor(private service:HeartbeatstoriesService){}
    ngOnInit(){
      this.service.onSubmit().subscribe(data=>this.images=data);
    }
}
