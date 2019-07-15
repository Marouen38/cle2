import { BrowserModule } from '@angular/platform-browser';
//import { AppModule } from "./app.module";
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, FormGroup} from '@angular/forms';
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
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';

//import {MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent, MatChipList} from '@angular/material';
//import {COMMA, ENTER} from '@angular/cdk/keycodes';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppHeaderComponent,
    SmoothieComponent,
    DetailComponent,
    FormComponent,
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
    ReactiveFormsModule,
    MatFormFieldModule,
    // MatAutocomplete, 
    // MatAutocompleteSelectedEvent, 
    // MatChipList, 
  ],
  providers: [SmoothieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
