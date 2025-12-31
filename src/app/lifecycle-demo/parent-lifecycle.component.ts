import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService, PostItem } from './data.service';
import { CommonModule } from '@angular/common';
import { ChildLifecycleComponent } from './child-lifecycle.component';

@Component({
  selector: 'lifecycle-parent',
  standalone: true,
  imports: [CommonModule, ChildLifecycleComponent],
  templateUrl: './parent-lifecycle.component.html',
  styleUrls: ['./parent-lifecycle.component.css'],
  providers: [DataService]
})
export class ParentLifecycleComponent implements OnInit, OnDestroy {
  items: PostItem[] = [];
  logs: string[] = [];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.logs.push('Parent: ngOnInit');
    this.data.getItems().subscribe(list => {
      this.items = list;
      this.logs.push('Parent: items loaded ' + this.items.length);
    });
  }

  ngOnDestroy(): void {
    this.logs.push('Parent: ngOnDestroy');
  }

  remove(id: number) {
    // remove locally
    this.items = this.items.filter(i => i.id !== id);
    // update service state as well
    this.data.remove(id);
    this.logs.push('Parent: removed ' + id);
  }
}
