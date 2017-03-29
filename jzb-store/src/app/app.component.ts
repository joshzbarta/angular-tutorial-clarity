import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/dashboard">Dashboard</a>
    <a routerLink="/products">Products</a>
    <router-outlet></router-outlet>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'Josh\'s Super Awesome Store 6';
}
