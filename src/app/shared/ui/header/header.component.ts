import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  NgModule,
  QueryList,
  Renderer2,
} from '@angular/core'
import { ContainerModule } from '@ui/container/container.component'
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
  @ContentChildren('li') lis!: QueryList<ElementRef>

  constructor(private readonly renderer: Renderer2) {}

  ngAfterContentInit(): void {
    this.lis.forEach((li) => {
      this.renderer.setAttribute(li.nativeElement, 'data-hover', '')
    })
  }
}

@NgModule({
  declarations: [HeaderComponent],
  imports: [LogoModule, ContainerModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
