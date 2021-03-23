import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OurBrandsService {
  brands: any = [
    {
      img: '../../../assets/images/our-brands/carmelita.png',
      alt: 'Logo de Rompope Carmelita',
      url: 'https://rompopecarmelita.com'
    },
    {
      img: '../../../assets/images/our-brands/mexizcal.png',
      alt: 'Logo de Mexizcal',
      url: 'https://mexizcal.com'
    },
    {
      img: '../../../assets/images/our-brands/rompope-de-la-abuela.png',
      alt: 'Logo de Rompope de la Abuela',
      url: 'http://rompopedelaabuela.com/'
    },
    {
      img: '../../../assets/images/our-brands/rompope-de-la-abuela.png',
      alt: 'Logo de Rompope de la Abuela',
      url: 'http://rompopedelaabuela.com/'
    }
  ]
  constructor() { }
  obtainBrand(){
    return this.brands;
  }
}
