import { Component, signal } from '@angular/core';
import { Calculator } from './calculator/calculator';
import { AlertMessage } from './alert-message/alert-message';
import { LoginApplication } from './login-application/login-application';
import { Notepad } from './notepad/notepad';
import { PuneStudents } from './pune-students/pune-students';
import { StudentTable } from './student-table/student-table';

@Component({
  selector: 'app-root',
  imports: [ Calculator, AlertMessage, LoginApplication, Notepad, PuneStudents, StudentTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  message="Welcome to NWC"
}
