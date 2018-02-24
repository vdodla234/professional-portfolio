import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  name             =     "Vineeth Adithya Dodla";
  positionName     =     "FRONT-END DEVELOPER | WEB DEVELOPER";
  address          =     "508 Apt c Barton Creek drive, Charlotte, NorthCarolina,USA,28262.";
  mobileNumber     =     "+1 (803)810-9423";
  email            =     "vineethadithyad@gmail.com";
  websiteName      =     "www.vineethda.com";
  websiteLink      =     "http://www.*****.com";
  social = [
    {
      name : "vdodla234",
      link : "https://github.com/vdodla234",
      icon : "fa fa-github",
      siteName : "Github"
    },
    {
      name : "vdodla234",
      link : "https://www.linkedin.com/in/vineeth-adithya-d-03654188/",
      icon : "fa fa-linkedin",
      siteName : "Linkedin"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
