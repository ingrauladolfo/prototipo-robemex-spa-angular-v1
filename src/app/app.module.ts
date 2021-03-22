import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { OurBrandsModule } from './our-brands/our-brands.module';
import { OurCompanyModule } from './our-company/our-company.module';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { OurCatalogueModule } from './our-catalogue/our-catalogue.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { CarouselModule, MDBBootstrapModule, WavesModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    WavesModule,
    CarouselModule,
    SharedModule,
    HomeModule,
    OurBrandsModule,
    OurCompanyModule,
    OurCatalogueModule,
    ContactUsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
