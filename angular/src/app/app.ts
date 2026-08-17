import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular');

  private router = inject(Router);
  private viewportScroller = inject(ViewportScroller);

  constructor() {
    this.viewportScroller.setOffset([0, 90]);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        
        setTimeout(() => {
          if (fragment) {
            this.viewportScroller.scrollToAnchor(fragment);
          } else {
            this.viewportScroller.scrollToPosition([0, 0]); // scroll to top
          }
        }, 150);
      });
  }
}