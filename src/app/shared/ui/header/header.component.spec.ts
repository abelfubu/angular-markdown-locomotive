import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContainerModule } from '@ui/container/container.component';
import { CursorComponent } from '@ui/cursor/cursor.component';
import { LogoModule } from '@ui/logo/logo.component';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [LogoModule, ContainerModule],
      providers: [
        {
          provide: CursorComponent,
          useValue: { addHoverElements: (elements: unknown[]) => elements },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should query hover elements', () => {
    fixture.detectChanges();
    expect(component.lis.length).toBe(0);
  });

  it('should toggle hidden', () => {
    component.toggleHidden();
    expect(component.hidden).toBeFalsy();
  });
});
