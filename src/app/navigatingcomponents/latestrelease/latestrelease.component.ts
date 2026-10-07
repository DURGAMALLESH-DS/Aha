import { Component } from '@angular/core';
import { LatestreleaseService } from 'src/app/navigatingcomponents/services/latestrelease.service';

@Component({
  selector: 'app-latestrelease',
  templateUrl: './latestrelease.component.html',
  styleUrls: ['./latestrelease.component.css']
})
export class LatestreleaseComponent {
  images:any;
  constructor(private service:LatestreleaseService){}
  ngOnInit(){
    this.service.onSubmit().subscribe(data=>this.images=data);
  }

}