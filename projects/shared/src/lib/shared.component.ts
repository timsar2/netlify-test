import { Component, signal } from '@angular/core';

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
  counter = signal<number>(0)
  constructor(){
    setInterval(() => {
      this.counter.set(this.counter() + 1)
    }, 1000)
  }
}
