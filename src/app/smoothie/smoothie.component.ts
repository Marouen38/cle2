import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Smoothie, SmoothieService } from '../smoothie.service';

@Component({
  selector: 'app-smoothie',
  templateUrl: './smoothie.component.html',
  styleUrls: ['./smoothie.component.css']
})
export class SmoothieComponent implements OnInit {

  private _smoothies :Smoothie[];
  private _smoothieId :string;

  constructor(
    private smoothieService : SmoothieService,
    private router: Router
  ) {

   }

  ngOnInit() {
    this.getAllSmoothies();
    
  }

  set smoothie(mSmoothies: any) {
    this._smoothies = mSmoothies;
  }


  get smoothies(): any {
    return this._smoothies;
  }


  get smoothiesId(): any {
    return this._smoothieId;
  }

  set smoothiesId(mSmoothiesId: any) {
    this._smoothieId = mSmoothiesId;
  }

  getAllSmoothies(): void {
    this.smoothieService.getSmoothies()
    .subscribe((listSmoothie) => {
        this.smoothie = listSmoothie;
        console.log(this.smoothie);
      });
  }
//   goDetail(smoothieId:string):void{
// this.smoothieService.getOneSmoothie(this.smoothiesId).subscribe((smootthieDetail)=>{
//   this.smoothie=smootthieDetail;
//   console.log(this.smoothie);
//   });

  //}

}
