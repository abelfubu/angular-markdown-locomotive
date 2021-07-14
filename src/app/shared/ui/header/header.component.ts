import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  NgModule,
  QueryList,
} from '@angular/core'
import { ContainerModule } from '@ui/container/container.component'
import { CursorComponent } from '@ui/cursor/cursor.component'
import { LogoModule } from '@ui/logo/logo.component'

@Component({
  selector: 'md-header',
  template: `
    <md-container>
      <md-logo>belfubu</md-logo>

      <nav>
        <ul>
          <ng-content></ng-content>
        </ul>
      </nav>
    </md-container>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterContentInit {
  @ContentChildren('hover') lis!: QueryList<ElementRef>

  constructor(private readonly host: CursorComponent) {}

  ngAfterContentInit(): void {
    this.host.addHoverElements(this.lis)
  }
}

@NgModule({
  declarations: [HeaderComponent],
  imports: [LogoModule, ContainerModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
