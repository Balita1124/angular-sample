import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { WildAnimalModule } from './wild-animal/wild-animal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ClarityModule,
    ClrIconModule,
    WildAnimalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
