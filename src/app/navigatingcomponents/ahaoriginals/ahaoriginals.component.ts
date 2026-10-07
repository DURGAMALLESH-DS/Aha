import { Component } from '@angular/core';
import { AhaoriginalsService } from 'src/app/navigatingcomponents/services/ahaoriginals.service';

@Component({
  selector: 'app-ahaoriginals',
  templateUrl: './ahaoriginals.component.html',
  styleUrls: ['./ahaoriginals.component.css']
})
export class AhaoriginalsComponent {
  images:any;
  constructor(private service:AhaoriginalsService){}
  ngOnInit(){
    this.service.onSubmit().subscribe(data=>this.images=data);
  }
}
