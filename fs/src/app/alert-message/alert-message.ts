import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  imports: [],
  templateUrl: './alert-message.html',
  styleUrl: './alert-message.css'
})
export class AlertMessage {
  
showAlert() {
    alert('Hello! This is an alert message.');
  }

}
