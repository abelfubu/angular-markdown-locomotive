import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursorComponent } from '@ui/cursor/cursor.component';
import { CursorComponentMock } from '@ui/cursor/cursor.component.mock';
import { TabComponent } from '@ui/tab/tab.component';
import { TabGroupComponent } from './tab-group.component';

describe('TabGroupComponent', () => {
  let component: TabGroupComponent;
  let fixture: ComponentFixture<TabGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [TabGroupComponent],
    providers: [{ provide: CursorComponent, useValue: CursorComponentMock }],
    teardown: { destroyAfterEach: false }
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select a tab', () => {
    const tab = { selected: false } as TabComponent;
    component.selectTab(tab);
    expect(tab.selected).toBeTruthy();
  });
});
