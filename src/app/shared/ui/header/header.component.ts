import { Component, ContentChildren, NgModule, QueryList } from '@angular/core'
import { LogoModule } from '@ui/logo/logo.component'

@Component({
  selector: 'md-header',
  template: `
    <md-logo>belfubu</md-logo>

    <nav>
      <ul>
        <ng-content></ng-content>
      </ul>
    </nav>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ContentChildren('li') lis!: QueryList<HTMLLIElement>
}

@NgModule({
  declarations: [HeaderComponent],
  imports: [LogoModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
