import { Component } from '@angular/core';

@Component({
  selector: 'app-q2',
  standalone:true,
  imports: [],
  templateUrl: './q2.html',
  styleUrl: './q2.css'
})
export class Q2 {
  showAlert() {
    alert('Hello! This is an alert message.');
  }

}
