import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface Item {
  id: number;
  userId: string;
  lat: string;
  lon: string;
  description: string;
  image: string;
  keywords: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AppComponent {
  items: Item[] = [];
  tempItem: Item = this.getEmptyItem();

  addItem(): void {
    const newItem: Item = {
      ...this.tempItem,
      id: Date.now() // Using timestamp for unique ID
    };
    this.items.push(newItem);
    this.tempItem = this.getEmptyItem(); // Reset form
  }

  deleteItem(itemId: number): void {
    this.items = this.items.filter(item => item.id !== itemId);
  }

  private getEmptyItem(): Item {
    return {
      id: 0,
      userId: '',
      lat: '',
      lon: '',
      description: '',
      image: '',
      keywords: ''
    };
  }
}
