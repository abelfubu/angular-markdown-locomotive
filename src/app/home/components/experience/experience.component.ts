import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'md-experience',
  templateUrl: './experience.component.html',
  styles: [
    `
      :host {
        display: block;
        padding: 4rem 0;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {}
