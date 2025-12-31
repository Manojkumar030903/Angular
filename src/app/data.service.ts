// Shared in-memory data service providing posts for parent/child components.
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

export interface PostItem { id: number; title: string; body?: string; }

@Injectable({ providedIn: 'root' })
export class DataService {
  private items: PostItem[] = [
    { id: 1, title: 'First post', body: 'Lorem ipsum' },
    { id: 2, title: 'Second post', body: 'Dolor sit amet' },
    { id: 3, title: 'Third post', body: 'Consectetur' },
  ];

  getItems(): Observable<PostItem[]> {
    // return observable so testing is easier
    return of(this.items.slice());
  }

  remove(id: number) {
    this.items = this.items.filter(i => i.id !== id);
  }
}
