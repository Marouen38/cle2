import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { SmoothieComponent } from './smoothie/smoothie.component';
import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' 
  },
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: 'smoothie',
    component : SmoothieComponent,
  },
  {
    path: 'detail/:id',
    component : DetailComponent,
  },
  {
    path: 'ajouter',
    component : FormComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes,
     { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }