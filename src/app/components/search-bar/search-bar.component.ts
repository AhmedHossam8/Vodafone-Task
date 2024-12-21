import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() citySearch = new EventEmitter<string>();
  searchTerm: string = '';

  searchCity(): void {
    if (this.searchTerm.trim()) {
      this.citySearch.emit(this.searchTerm);
    }
  }
}
