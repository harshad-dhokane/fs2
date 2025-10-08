import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],   // ✅ must be imported here
  templateUrl: './calculator.html',
  styleUrls: ['./calculator.css']
})
export class CalculatorComponent {
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
