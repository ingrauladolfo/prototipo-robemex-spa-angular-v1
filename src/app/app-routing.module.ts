import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { OurBrandsComponent } from './our-brands/components/our-brands/our-brands.component';
import { OurCompanyComponent } from './our-company/components/our-company/our-company.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'nosotros', component: OurCompanyComponent},
  {path:'productos', component: OurBrandsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
