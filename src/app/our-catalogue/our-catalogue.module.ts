import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurCatalogueComponent } from './components/our-catalogue/our-catalogue.component';
import { RouterModule } from '@angular/router';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';



@NgModule({
  declarations: [OurCatalogueComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxExtendedPdfViewerModule
  ], exports:[OurCatalogueComponent]
})
export class OurCatalogueModule { }
