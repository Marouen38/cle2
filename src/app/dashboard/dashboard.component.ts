import { Component, OnInit, Input } from '@angular/core';
import { SmoothieService, Smoothie } from '../smoothie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() smoothie;
  private _smoothies: Smoothie[];


  ngOnInit() {
    //this._title =('Bienvenue sur  smoothies en folie');

    //this.smoothie = 'super smoothie bleu à la banane';
    this.getAllSmoothies();
  }
  constructor(private smoothieService: SmoothieService) {

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

