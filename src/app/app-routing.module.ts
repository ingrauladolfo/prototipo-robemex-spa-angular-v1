import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { OurBrandsComponent } from './our-brands/components/our-brands/our-brands.component';
import { OurCatalogueComponent } from './our-catalogue/components/our-catalogue/our-catalogue.component';
import { OurCompanyComponent } from './our-company/components/our-company/our-company.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'nosotros', component: OurCompanyComponent},
  {path:'productos', component: OurBrandsComponent},
  {path:'catalogo', component:OurCatalogueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
