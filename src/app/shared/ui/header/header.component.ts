import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  NgModule,
  QueryList,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContainerModule } from '@ui/container/container.component';
import { CursorComponent } from '@ui/cursor/cursor.component';
import { LogoModule } from '@ui/logo/logo.component';

@Component({
  selector: 'md-header',
  template: `
    <md-container *ngIf="isMatched$ | async as isSmall">
      <md-logo routerLink="">abelfubu</md-logo>

      <nav
        [class.mobile]="isSmall.matches"
        [class.hidden]="isSmall.matches && hidden"
        (click)="toggleHidden()"
      >
        <ul>
          <ng-content></ng-content>
        </ul>
      </nav>

      <i class="fas fa-bars" *ngIf="isSmall.matches" (click)="toggleHidden()"></i>
    </md-container>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterContentInit {
  @ContentChildren('hover') lis!: QueryList<ElementRef>;

  isMatched$ = this.observer.observe(Breakpoints.XSmall);
  hidden = true;

  constructor(
    private readonly host: CursorComponent,
    private readonly observer: BreakpointObserver,
  ) {}

  ngAfterContentInit(): void {
    this.host.addHoverElements(this.lis);
  }

  toggleHidden(): void {
    this.hidden = !this.hidden;
  }
}

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, LogoModule, ContainerModule, LayoutModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
