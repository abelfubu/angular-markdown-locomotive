import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'md-experience',
  templateUrl: './experience.component.html',
  styles: [
    `
      :host {
        display: block;
        padding: 4rem 0;
      }

      h3 {
        font-weight: 300;
        font-size: 1.8rem;
      }

      h5 {
        font-size: 1rem;
      }

      li {
        padding: 0.5rem 0;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {}
