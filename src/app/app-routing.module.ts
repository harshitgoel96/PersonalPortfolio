import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ServicesProvidedComponent} from './services-provided/services-provided.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  { path: 'services',component:ServicesProvidedComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
