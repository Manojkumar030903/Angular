// Parent component: loads posts and passes data/callback to the `Child` component.
import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent implements OnInit {
  posts = signal<any[]>([]);
  loading = signal(true);
  error = signal('');

  // arrow function so it's safely passed as a callback
  removePost = (id: number) => {
    this.posts.update(prev => prev.filter(p => p.id !== id));
  };

  ngOnInit(): void {
    this.loadPosts();
  }

  private async loadPosts() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      this.posts.set(data);
    } catch (e: any) {
      this.error.set(e?.message ?? 'Failed to load posts');
    } finally {
      this.loading.set(false);
    }
  }
}
