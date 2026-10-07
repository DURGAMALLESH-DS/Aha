import { Component } from '@angular/core';
import { MostwatchedintamilService } from '../services/mostwatchedintamil.service';

@Component({
  selector: 'app-mostwatchedintamil',
  templateUrl: './mostwatchedintamil.component.html',
  styleUrls: ['./mostwatchedintamil.component.css']
})
export class MostwatchedintamilComponent {
   images:any;
    constructor(private service:MostwatchedintamilService){}
    ngOnInit(){
      this.service.onSubmit().subscribe(data=>this.images=data);
    }
}
