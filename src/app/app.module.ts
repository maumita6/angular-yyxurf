import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ModelComponent } from './model-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent, ModelComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
