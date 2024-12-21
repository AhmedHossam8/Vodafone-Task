import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-unit-toggle',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './unit-toggle.component.html',
  styleUrls: ['./unit-toggle.component.scss']
})
export class UnitToggleComponent {
  @Output() unitChange = new EventEmitter<string>();
  selectedUnit: string = 'Celsius';

  onUnitChange(): void {
    this.unitChange.emit(this.selectedUnit);
  }
}
