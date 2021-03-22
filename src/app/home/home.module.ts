import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { WavesModule, CarouselModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    WavesModule,
    CarouselModule
  ],exports: [HomeComponent],
})
export class HomeModule { }
