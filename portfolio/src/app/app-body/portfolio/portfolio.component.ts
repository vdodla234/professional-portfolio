import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolio = [
    {
      name : "",
      
      imagePath: "",
      image : "" + ".",
      companyName : "@mywork",
      companyLink : "",
    },
    {
    name : "",
      
    imagePath: "",
    image : "" + ".",
    companyName : "@mywork",
    companyLink : "",
  },
  {
    name : "",
      
    imagePath: "",
    image : "" + ".",
    companyName : "@mywork",
    companyLink : "",
  },
  {
    name : "",
      
    imagePath: "",
    image : "" + ".",
    companyName : "@mywork",
    companyLink : "",
  },
  {
    name : "",
      
    imagePath: "",
    image : "" + ".",
    companyName : "@mywork",
    companyLink : "",
  },
  ];

  constructor() { }

  ngOnInit() {
  }

}
