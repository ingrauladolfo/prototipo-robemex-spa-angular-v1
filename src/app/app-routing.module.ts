import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { OurCompanyComponent } from './our-company/components/our-company/our-company.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'nosotros', component: OurCompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
