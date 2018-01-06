import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const appRoutes: Routes = [
  // { path: '', redirectTo : path.home, pathMatch: 'full'},
  // { path: path.home , component: HomeComponent},
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})


export class LayoutRoutingModule { }
