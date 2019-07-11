import { Component, OnInit } from '@angular/core';
import { SmoothieService, Smoothie } from '../smoothie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smoothie',
  templateUrl: './smoothie.component.html',
  styleUrls: ['./smoothie.component.css']
})
export class SmoothieComponent implements OnInit {

  private _smoothies :Smoothie[];

  constructor(
    private smoothieService : SmoothieService,
    private router: Router
  ) {

   }

  ngOnInit() {
    this.getAllSmoothies();
  }

  set smoothies(mSmoothies: any) {
    this._smoothies = mSmoothies;
  }

  get smoothies(): any {
    return this._smoothies;
  }

  getAllSmoothies(): void {
    this.smoothieService.getSmoothies()
    .subscribe((listSmoothie) => {
        this.smoothies = listSmoothie;
        console.log(this.smoothies);
      });
  }
  

}
