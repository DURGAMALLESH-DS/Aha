import { Component } from '@angular/core';
import { UpcomingonahaService } from '../services/upcomingonaha.service';

@Component({
  selector: 'app-upcomingonaha',
  templateUrl: './upcomingonaha.component.html',
  styleUrls: ['./upcomingonaha.component.css']
})
export class UpcomingonahaComponent {
   images:any;
    constructor(private service:UpcomingonahaService){}
    ngOnInit(){
      this.service.onSubmit().subscribe(data=>this.images=data);
    }
}
