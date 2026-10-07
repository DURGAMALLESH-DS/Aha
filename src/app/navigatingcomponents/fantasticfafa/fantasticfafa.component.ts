import { Component } from '@angular/core';
import { FantasticfafaService } from '../services/fantasticfafa.service';

@Component({
  selector: 'app-fantasticfafa',
  templateUrl: './fantasticfafa.component.html',
  styleUrls: ['./fantasticfafa.component.css']
})
export class FantasticfafaComponent {
  images:any;
    constructor(private service:FantasticfafaService){}
    ngOnInit(){
      this.service.onSubmit().subscribe(data=>this.images=data);
    }
}
