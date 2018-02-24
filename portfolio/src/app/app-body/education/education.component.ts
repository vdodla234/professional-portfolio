import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationSection = "Masters in Computer science";
  education = "University of North Carolina At Charlotte";
  educationDate = "Aug 2016 - Dec 2017";
  educationDescription = "";
  educationLink = "http://www.uncc.edu";

  constructor() { }

  ngOnInit() {
  }

}
