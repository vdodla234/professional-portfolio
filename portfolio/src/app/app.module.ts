import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';

import { AppBodyComponent } from './app-body/app-body.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { BiographyComponent } from './app-body/biography/biography.component';
import { CertificationComponent } from './app-body/certification/certification.component';
import { ContactComponent } from './app-body/contact/contact.component';
import { EducationComponent } from './app-body/education/education.component';
import { ExperienceComponent } from './app-body/experience/experience.component';

import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './app-body/portfolio/portfolio.component';
import { OnepagePortfolioComponent } from './app-body/onepage-portfolio/onepage-portfolio.component';
import { SkillsComponent } from './app-body/skills/skills.component';
import { NavbarComponent } from './app-body/navbar/navbar.component';

const appRoutes: Routes = [
  { path: '', component: AppHeaderComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'exp', component: ExperienceComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'edu', component: EducationComponent },
  { path: 'cert', component: CertificationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'onePagePortfolio', component: OnepagePortfolioComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    OnepagePortfolioComponent,
    ExperienceComponent,
    SkillsComponent,
    NavbarComponent,
    
    AppBodyComponent,
    AppFooterComponent,
    AppHeaderComponent,
    BiographyComponent,
    CertificationComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule,
    
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
