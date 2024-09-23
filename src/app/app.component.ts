import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecieverComponent } from './reciever/reciever.component';
import { SenderComponent } from './sender/sender.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecieverComponent, SenderComponent, ReactiveFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-class';
}
