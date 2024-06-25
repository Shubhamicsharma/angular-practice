import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildServiceDataSharingComponent } from './child-service-data-sharing/child-service-data-sharing.component';

@Component({
  selector: 'app-service-data-sharing',
  standalone: true,
  imports: [ChildServiceDataSharingComponent, FormsModule],
  templateUrl: './service-data-sharing.component.html',
  styleUrl: './service-data-sharing.component.css'
})
export class ServiceDataSharingComponent {
  data = ""
}
