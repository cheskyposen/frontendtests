import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatListModule, MatSortModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import { ChildFormComponent } from './child-form/child-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ChildFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
