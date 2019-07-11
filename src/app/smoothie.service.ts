import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


export interface Smoothie {
  id?: string;
  title: string;
  ingredient: [
    {
      nom: string;
      quantitie: string;
    }
  ];
  features: {
    cost: string;
    prepareTime: string;
  }
  advice: string;

  description: String;
  steps: [
    {
      stepText: string;
    }
  ];
  photo?: [
    {
      titte?: String;
      path?: String;
      description?: String;
    }
  ];
}


@Injectable({
  providedIn: 'root'
})
export class SmoothieService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient,
    private router: Router) {
  }

  // Get all Smoothie
  getSmoothies(): Observable<Smoothie[]> {
    const smoothieListUrl = `${this.apiUrl}/catalogue/list`;

    return this.http.get<Smoothie[]>(smoothieListUrl);
  }
  getOneSmoothie(id: String): Observable<Smoothie> {
    const getUrl = `${this.apiUrl}/catalogue/${id}`;
    console.log(getUrl);
    return this.http.get<Smoothie>(getUrl);
  }
}
