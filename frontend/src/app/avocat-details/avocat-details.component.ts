import { Component } from '@angular/core';
import { AvocatService } from '../service/avocat/avocat.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-avocats-details',
  templateUrl: './avocat-details.component.html',
  styleUrl: './avocat-details.component.css'
})
export class AvocatDetailsComponent {
avocatDetail:any=[];
avocatId:any;

constructor(private avocatService:AvocatService,private activeRoute:ActivatedRoute){}

ngOnInit(){
  this.avocatId= this.activeRoute.snapshot.paramMap.get('id');

  console.log('id',this.avocatId);
  
  this.avocatService.getavocats().subscribe((avocats: any[]) => {
    this.avocatDetail = avocats.filter(x => x.id == this.avocatId);
  });
}
}




