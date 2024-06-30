import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WildAnimalComponent } from './wild-animal/wild-animal.component';
import { WildAnimalAboutComponent } from './wild-animal/wild-animal-about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: WildAnimalComponent },
  { path: 'about', component: WildAnimalAboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
