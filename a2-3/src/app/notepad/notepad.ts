import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notepad',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notepad.html',
  styleUrls: ['./notepad.css']
})
export class Notepad implements OnInit, OnDestroy {
  notes: { text: string; time: string }[] = [];
  newNote: string = '';
  currentTime: string = '';
  private intervalId: any;

  ngOnInit(): void {
    // Update system time every second
    this.intervalId = setInterval(() => {
      const now = new Date();
      this.currentTime = now.toLocaleString();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  addNote() {
    if (this.newNote.trim()) {
      this.notes.push({
        text: this.newNote,
        time: new Date().toLocaleString()
      });
      this.newNote = '';
    }
  }
}
