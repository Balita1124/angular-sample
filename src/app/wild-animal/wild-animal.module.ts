import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WildAnimalRoutingModule } from './wild-animal-routing.module';
import { WildAnimalComponent } from './wild-animal.component';
import { WildAnimalAboutComponent } from './wild-animal-about.component';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    WildAnimalComponent,
    WildAnimalAboutComponent
  ],
  imports: [
    CommonModule,
    WildAnimalRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    ClrIconModule
  ]
})
export class WildAnimalModule { }
