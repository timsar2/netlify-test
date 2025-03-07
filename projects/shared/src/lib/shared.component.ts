import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';

@Component({
  selector: 'lib-shared',
  imports: [],
  template: `
    <p>
      shared works! counter is: {{counter()}}
    </p>
  `,
  styles: ``
})
export class SharedComponent {
  counter = signal<string>("0")
  private intervalId: any

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => {
        this.counter.set('Random ' + Math.random())
      }, 1000)
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }
}
