import { Component } from '@angular/core';
import { InthespotlightService } from 'src/app/navigatingcomponents/services/inthespotlight.service';

@Component({
  selector: 'app-inthespotlight',
  templateUrl: './inthespotlight.component.html',
  styleUrls: ['./inthespotlight.component.css']
})
export class InthespotlightComponent {
  images:any;
  constructor(private service:InthespotlightService){}
  ngOnInit(){
    this.service.onSubmit().subscribe(data=>this.images=data)
  }
}
