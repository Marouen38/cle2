import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SmoothieService, Smoothie } from '../smoothie.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  ​
    private _smoothie: Smoothie;
    private _smoothieId: string;
  ​
    constructor(
      private route: ActivatedRoute,
      private smoothieService: SmoothieService
    ) {
    }
  ​
    ngOnInit() {
      this.smoothieId = this.route.snapshot.paramMap.get('id');
      this.getSmoothiesDetail();
      console.log(this.smoothieId);
    }
  ​
    set smoothieId(mSmoothieId: any) {
      this._smoothieId = mSmoothieId;
    }
  ​
    get smoothieId(): any {
      return this._smoothieId;
    }
  ​
    set smoothie(mSmoothie: any) {
      this._smoothie = mSmoothie;
    }
  ​
    get smoothie(): any {
      return this._smoothie;
    }
  ​
    getSmoothiesDetail(): void {
      this.smoothieService.getOneSmoothie(this.smoothieId)
        .subscribe((smoothieDetail) => {
          this.smoothie = smoothieDetail;
          console.log(this.smoothie);
        });
    }
  ​
  }