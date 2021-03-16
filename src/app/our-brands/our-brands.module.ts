import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurBrandsComponent } from './components/our-brands/our-brands.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [OurBrandsComponent],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [OurBrandsComponent],
})
export class OurBrandsModule { }
