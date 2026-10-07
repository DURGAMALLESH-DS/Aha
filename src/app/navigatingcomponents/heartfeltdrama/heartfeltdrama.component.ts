import { Component } from '@angular/core';
import { HeartfeltdramaService } from '../services/heartfeltdrama.service';

@Component({
  selector: 'app-heartfeltdrama',
  templateUrl: './heartfeltdrama.component.html',
  styleUrls: ['./heartfeltdrama.component.css']
})
export class HeartfeltdramaComponent {
   images:any;
    constructor(private service:HeartfeltdramaService){}
    ngOnInit(){
      this.service.onSubmit().subscribe(data=>this.images=data);
    }
}
