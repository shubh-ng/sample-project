import { Component, OnInit,Inject } from '@angular/core';
import { CountryService } from '../services/country.service';
import { SelectedCountryService } from '../services/getSelectedCountry.service';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  isLoaded = false;
  selectedCountry:string;

  constructor(private countryService:CountryService, private getSelectedCountryService:SelectedCountryService,
    public dialog: MatDialog
  ) { }


  countryDetails:any;
  selectedCountryDetails:any;

  ngOnInit() {
    this.isLoaded = true;
    this.countryService.getCountriesDetails().subscribe(
      resp=>{
        this.countryDetails = resp.json();
        this.isLoaded = false;
      }
    )
  }

  getSelectedCountry() {
    this.isLoaded = true;
    this.getSelectedCountryService.getCountriesDetails(this.selectedCountry).subscribe(
      resp=>{
        this.selectedCountryDetails = resp.json()[0];
        this.isLoaded = false;
      }
    )
  }


}

