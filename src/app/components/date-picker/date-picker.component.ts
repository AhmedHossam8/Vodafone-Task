import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { FormsModule } from '@angular/forms';    // Import FormsModule

@Component({
  selector: 'app-date-picker',
  standalone: true,
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  imports: [CommonModule, FormsModule],  // Add FormsModule here
})
export class DatePickerComponent {
  @Output() dateFilter = new EventEmitter<string>();
  selectedDate: string = '';

  filterByDate(): void {
    if (this.selectedDate) {
      console.log('Selected Date:', this.selectedDate);
      this.dateFilter.emit(this.selectedDate);
    }
  }
}
