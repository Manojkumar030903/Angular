import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parent } from './parent/parent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Parent],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-demo');
}
