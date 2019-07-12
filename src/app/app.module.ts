import { BrowserModule } from '@angular/platform-browser';
//import { AppModule } from "./app.module";
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppHeaderComponent } from './app-header/app-header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SmoothieService } from './smoothie.service';
import { SmoothieComponent } from './smoothie/smoothie.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppHeaderComponent,
    SmoothieComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatListModule,
    
  ],
  providers: [SmoothieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
