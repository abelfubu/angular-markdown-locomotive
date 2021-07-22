import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  NgModule,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { TabComponent } from '@ui/tab/tab.component';

@Component({
  selector: 'md-tab-group',
  template: `
    <nav *ngIf="tabs">
      <ul>
        <li *ngFor="let tab of tabs" [class.selected]="tab.selected" (click)="selectTab(tab)">
          {{ tab.title }}
        </li>
      </ul>
    </nav>
    <ng-content></ng-content>
  `,
  styleUrls: ['./tab-group.component.scss'],
})
export class TabGroupComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  @ViewChildren('hover') hoverEls!: QueryList<ElementRef>;

  ngAfterContentInit(): void {
    const selectedTab = this.tabs.find((tab) => tab.selected);

    if (!selectedTab && this.tabs.first) {
      this.tabs.first.selected = true;
    }
  }

  selectTab(tab: TabComponent): void {
    this.tabs.forEach((element) => (element.selected = false));
    tab.selected = true;
  }
}

@NgModule({
  declarations: [TabGroupComponent, TabComponent],
  imports: [CommonModule],
  exports: [TabGroupComponent, TabComponent],
})
export class TabsModule {}
