import { Component } from '@angular/core';

@Component({
  selector: 'md-hero',
  template: `
    <section class="hero">
      <h1>Abel de la Fuente.</h1>
      <h2>Web developer</h2>
      <p>
        I'm a software engineer specializing in building (and occasionally designing) exceptional
        digital experiences. Currently, I'm focused on building accessible, human-centered products
        at Sopra Steria.
      </p>
      <md-button href="mailto:abelfubu@gmail.com">GET IN TOUCH</md-button>
    </section>
  `,
  styles: [
    `
      @use "mixins";

      .hero {
        @include mixins.flex(center, flex-start);
        flex-direction: column;

        padding: 4rem 0;

        p {
          max-width: 500px;
          padding: 2rem 0;
        }
      }
    `,
  ],
})
export class HeroComponent {}
