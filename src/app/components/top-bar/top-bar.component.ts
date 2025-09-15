import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Section {
  id: string;
  name: string;
}

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  @Input() sections: Section[] = [];
  @Input() activeSection: string = '';
  @Output() sectionClick = new EventEmitter<string>();

  protected isMenuOpen = false;

  onSectionClick(sectionId: string): void {
    this.sectionClick.emit(sectionId);
    this.isMenuOpen = false; // Close mobile menu when item is clicked
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public trackBySection(_index: number, section: Section): string {
    return section.id;
  }
}