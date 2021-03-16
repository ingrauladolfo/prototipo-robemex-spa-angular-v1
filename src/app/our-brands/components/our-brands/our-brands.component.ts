import { Component, OnInit } from '@angular/core';
import { OurBrandsService } from '../../services/our-brands.service';

@Component({
  selector: 'app-our-brands',
  templateUrl: './our-brands.component.html',
  styleUrls: ['./our-brands.component.css']
})
export class OurBrandsComponent implements OnInit {
  brands: any[] = [];
  constructor(
    private _brands: OurBrandsService
  ) { 
    this.brands = _brands.obtainBrand();
  }

  ngOnInit(): void {
  }

}
