import { Component } from '@angular/core'

@Component({
  selector: 'md-hero',
  template: `
    <section class="hero">
      <h1>Abel de la Fuente.</h1>
      <h2>Web developer</h2>
      <p>
        Curioso, creativo, proactivo, versátil, me encanta innovar y descubrir cosas nuevas, la
        música, el café y la tecnología.
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
