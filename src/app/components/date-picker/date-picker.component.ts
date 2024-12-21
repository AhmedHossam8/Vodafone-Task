import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class DatePickerComponent {
  @Output() dateFilter = new EventEmitter<string>();
  selectedDate: string = '';

  filterByDate(): void {
    if (this.selectedDate) {
      this.dateFilter.emit(this.selectedDate);
    }
  }
}
