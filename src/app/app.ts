// Root application component bootstrap; wires main layout and child components.
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parent } from './parent/parent';
import { ParentLifecycleComponent } from './lifecycle-demo/parent-lifecycle.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Parent, ParentLifecycleComponent],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-demo');
}
