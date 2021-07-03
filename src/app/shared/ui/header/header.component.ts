import { Component, ContentChildren, Input, NgModule, QueryList } from '@angular/core'

@Component({
  selector: 'md-header',
  template: `
    <div class="logo">
      <img [src]="logo" [alt]="title" />
      <h3>{{ title }}</h3>
    </div>
    <ul>
      <ng-content></ng-content>
    </ul>
  `,
  styles: [
    `
      @use "colors";
      @use "mixins";

      :host {
        @include mixins.flex;
        height: 3.5rem;
        padding: 0 8vw;
        background-color: colors.$dark;
        box-shadow: 0 1px 6px 1px #23232350;
        z-index: 3030;
      }

      img {
        max-height: 2rem;
      }

      h3 {
        padding: 0 0.5rem;
        color: colors.$primary;
      }

      .logo {
        display: flex;
        align-items: center;
        cursor: pointer;
      }

      ul {
        display: flex;
        list-style: none;
      }

      ul::ng-deep li {
        margin-left: 1rem;
        cursor: pointer;
        color: colors.$primary;

        &:hover {
          text-decoration: underline;
        }
      }
    `,
  ],
})
export class HeaderComponent {
  @ContentChildren('li') lis!: QueryList<HTMLLIElement>
  @Input() logo!: string
  @Input() title!: string
}

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
