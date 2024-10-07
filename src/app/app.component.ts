import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DynamicFormAssignmentComponent } from './dynamic-form-assignment/dynamic-form-assignment.component';
import { ServiceDataSharingComponent } from './service-data-sharing/service-data-sharing.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { FetchAPIDataComponent } from "./fetch-apidata/fetch-apidata.component";
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, HomeComponent, ContactUsComponent, AboutUsComponent, DynamicFormAssignmentComponent, ServiceDataSharingComponent, StructuralDirectivesComponent, NgForComponent, FetchAPIDataComponent, DynamicFormComponent, OwlCarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '00_ClassWork';
}
