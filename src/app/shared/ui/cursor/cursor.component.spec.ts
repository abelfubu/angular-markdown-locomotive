import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { CursorComponent } from './cursor.component';

fdescribe('CursorComponent', () => {
  let component: CursorComponent;
  let fixture: ComponentFixture<CursorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change mouse prop on mouse move', () => {
    component.onMouseMove({ clientX: 2, clientY: 0 });
    expect(component.mouse).toEqual({ x: 2, y: 0 });
  });

  it('should trigger request animation frame and render', fakeAsync(() => {
    const spy = jest.spyOn(window, 'requestAnimationFrame');
    const render = jest.spyOn(component, 'render');
    component.onMouseMoveEv();
    expect(spy).toHaveBeenCalledTimes(1);
    tick(100);
    expect(render).toHaveBeenCalled();
  }));
});
