import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pune-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pune-students.html',
  styleUrls: ['./pune-students.css']
})
export class PuneStudents{
  students = [
    { id: 1, name: 'Rahul Sharma', age: 20, grade: 'A', city: 'Pune' },
    { id: 2, name: 'Priya Mehta', age: 21, grade: 'B+', city: 'Mumbai' },
    { id: 3, name: 'Amit Verma', age: 19, grade: 'A-', city: 'Delhi' },
    { id: 4, name: 'Sneha Patil', age: 22, grade: 'B', city: 'Pune' },
    { id: 5, name: 'Karan Singh', age: 20, grade: 'A+', city: 'Nagpur' },
    { id: 6, name: 'Neha Gupta', age: 21, grade: 'B+', city: 'Pune' },
    { id: 7, name: 'Ravi Kumar', age: 23, grade: 'C', city: 'Chennai' },
    { id: 8, name: 'Anjali Nair', age: 19, grade: 'A', city: 'Pune' },
    { id: 9, name: 'Manoj Yadav', age: 22, grade: 'B-', city: 'Hyderabad' },
    { id: 10, name: 'Divya Reddy', age: 20, grade: 'A', city: 'Pune' }
  ];

  // filter students who live in Pune
  get puneStudents() {
    return this.students.filter(s => s.city.toLowerCase() === 'pune');
  }
}
