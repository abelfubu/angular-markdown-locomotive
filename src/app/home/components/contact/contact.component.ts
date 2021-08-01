import { Component } from '@angular/core';

@Component({
  selector: 'md-contact',
  template: `
    <h4>Get In Touch</h4>
    <p>
      Although I'm not currently looking for any new opportunities, my inbox is always open. Whether
      you have a question or just want to say hi, I'll try my best to get back to you!
    </p>
    <md-button href="mailto:abelfubu@gmail.com">SAY HELLO</md-button>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 4rem 0;
      }
    `,
  ],
})
export class ContactComponent {}
