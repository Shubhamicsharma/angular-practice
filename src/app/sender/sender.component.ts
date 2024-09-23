import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonServiceService } from '../Services/common-service.service';

@Component({
  selector: 'app-sender',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css'
})
export class SenderComponent {
  constructor (private commonService: CommonServiceService) { }

  sendValue= ''

  onSendData(){
    this.commonService.setDataValue(this.sendValue); 
  }

}
