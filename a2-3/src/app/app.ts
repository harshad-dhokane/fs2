import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Q2} from './q2/q2';
import { CalculatorComponent } from './calculator/calculator';  
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login';
import { Students } from './students/students';
import { Notepad } from './notepad/notepad';
import { PuneStudents } from './pune-students/pune-students';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [Q2, CalculatorComponent, FormsModule, LoginComponent, Students, Notepad, PuneStudents],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  message="welcome";
}
