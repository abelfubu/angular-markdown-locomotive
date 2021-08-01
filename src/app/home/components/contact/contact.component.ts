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
    <p class="foot">Designed & Built by Abel de la Fuente</p>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 4rem 0 0;
        text-align: center;
      }

      p {
        padding: 1rem 0;
      }

      .foot {
        font-size: 0.8rem;
        font-weight: 300;
        margin-top: 4rem;
        opacity: 0.7;
      }
    `,
  ],
})
export class ContactComponent {}
