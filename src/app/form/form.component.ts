import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { SmoothieService, Smoothie } from '../smoothie.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // On crée une propriété pour le smoothie en cours
  smoothie: Smoothie = {
    title: '',
    ingredient: [
      {
        nom: '',
        quantitie: '',
      }
      ],
    features: {
      cost: '',
      prepareTime: '',
    },
    advice: '',
    description: '',
    steps: [
      {
        stepText: '',
      }
      ],
    photo: [
      {
        titte: '',
        path: '',
        description: '',
      }
      ]
    };
  Réduire
  
  
  
  
  
  

  smoothieForm : FormGroup;
  constructor(
    private fb : FormBuilder,
    private smoothieService:SmoothieService
  ){}
 

  ngOnInit() {
    this.buildForm();
  
  }

  
  get myForm() : any {
    return this.smoothieForm.controls;
  }
  private buildForm() {
    this.smoothieForm=this.fb.group({
      hideRequired:false,
      floatLabel:'auto',
      title:['',Validators.required],
    });
    // private buildForm() {
    //   this.smoothieForm = this.fb.group({
    //     hideRequired: false,
    //     floatLabel: 'auto',
    //     title: ['', Validators.required],
    //   });
    }
    onSubmit() {
      // stop here if form is invalid
      if (this.smoothieForm.invalid) {
        return;
      } else {
        this.smoothie.title = this.myForm.title.value;
        this.addSmoothie(this.smoothie);
        // console.log(this.smoothie);
      }
    }
  ​
    addSmoothie(smoothie: Smoothie) {
      this.smoothieService.addSmoothie(smoothie)
        .subscribe( (lastInsertSmoothie) => {
          console.log('smoothie inséré', lastInsertSmoothie);
        });
    }
    
  }
   
