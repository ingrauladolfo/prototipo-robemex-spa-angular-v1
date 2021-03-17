import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/components/contact-us/contact-us.component';
import { HomeComponent } from './home/components/home/home.component';
import { OurBrandsComponent } from './our-brands/components/our-brands/our-brands.component';
import { OurCatalogueComponent } from './our-catalogue/components/our-catalogue/our-catalogue.component';
import { OurCompanyComponent } from './our-company/components/our-company/our-company.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'nosotros', component: OurCompanyComponent},
  {path:'productos', component: OurBrandsComponent},
  {path:'catalogo', component:OurCatalogueComponent},
  {path:'contacto', component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
