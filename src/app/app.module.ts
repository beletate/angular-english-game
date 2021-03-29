import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MedioComponent } from './medio/medio.component';
import { DificilComponent } from './dificil/dificil.component';
import { FacilComponent } from './facil/facil.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FacilComponent,
    MedioComponent,
    DificilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
