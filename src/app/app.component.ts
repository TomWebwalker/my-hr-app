import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavComponent} from './layout/nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent],
  template: `
    <app-nav />
    <router-outlet />`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-hr-app';
}
