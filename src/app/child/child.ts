import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  posts = input.required<any[]>();
  onRemove = input.required<(id: number) => void>();
}
