import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatSidenavModule, MatButtonModule, MatBadgeModule, MatFormFieldModule, MatSelectModule, MatProgressBarModule, MatTableModule, MatDialogModule, MatTooltipModule, MatProgressSpinnerModule, MatDividerModule, MatExpansionModule, MatIconModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { route } from './routes/routeConfig';
import { CountryService } from './services/country.service';
import { SelectedCountryService } from './services/getSelectedCountry.service';
import { FooterComponent } from './footer/footer.component';
import { HashLocationStrategy,LocationStrategy } from "@angular/common";
import { NewsService } from './services/news.service';
import { TestingComponent } from './testing/testing.component';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
 
@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    NewsComponent,
    AboutComponent,
    DashboardComponent,
    FooterComponent,
    TestingComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlexLayoutModule,
    RouterModule.forRoot(route),
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressBarModule,
    MatTableModule,
    MatDialogModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatExpansionModule,

    // test
    MatInputModule, MatIconModule
    // test
  ],
  providers: [
    CountryService,SelectedCountryService,NewsService, LoginService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],


  bootstrap: [AppComponent]

})
export class AppModule { }
