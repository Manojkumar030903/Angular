// Child lifecycle demo component: shows lifecycle hooks and emits remove events.
import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lifecycle-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-lifecycle.component.html',
  styleUrls: ['./child-lifecycle.component.css']
})
export class ChildLifecycleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item: any | null = null;
  @Output() remove = new EventEmitter<number>();

  logs: string[] = [];

  ngOnInit(): void {
    this.logs.push('Child: ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    const ch = changes['item'];
    this.logs.push('Child: ngOnChanges - ' + JSON.stringify(ch?.currentValue));
  }

  ngOnDestroy(): void {
    this.logs.push('Child: ngOnDestroy');
  }

  onRemoveClick() {
    if (this.item) this.remove.emit(this.item.id);
  }
}
