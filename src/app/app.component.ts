import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="title">Design Tools</h1>
    <nav>
      <a routerLink="/photos" routerLinkActive="active">Photos</a>
      <a routerLink="/typography" routerLinkActive="active">Typography</a>
      <a routerLink="/colors" routerLinkActive="active">Colors</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

}
