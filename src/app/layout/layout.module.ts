import { AngularmaterialModule } from './../shared/angular-material.module';
import { LayoutRoutingModule } from './layout.routing';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AngularmaterialModule
  ],
  declarations: [LayoutComponent, HeaderComponent],
  exports: [
    HeaderComponent
  ]
})
export class LayoutModule { }
