import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],  // Add FormsModule here
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() citySearch = new EventEmitter<string>();
  searchTerm: string = '';

  searchCity(): void {
    if (this.searchTerm.trim()) {
      console.log('Search Term:', this.searchTerm); // Debug log
      this.citySearch.emit(this.searchTerm);
    }
  }
}
