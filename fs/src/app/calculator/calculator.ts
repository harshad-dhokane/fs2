import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class Calculator {
  
  num1: number | null = null;
  num2: number | null = null;
  result: number | null = null;
  showResult = false;

  addNumbers() {
    if (this.num1 !== null && this.num2 !== null) {
      this.result = this.num1 + this.num2;
      this.showResult = true;
    }
  }

}
