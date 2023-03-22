import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { CursorComponent } from './cursor.component';

describe('CursorComponent', () => {
  let component: CursorComponent;
  let fixture: ComponentFixture<CursorComponent>;
  const element = { nativeElement: document.createElement('button') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [CursorComponent],
    teardown: { destroyAfterEach: false }
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

  it('should add listeners', () => {
    const rendererSpy = jest.spyOn(component['renderer'], 'listen');
    component['addHoverListeners']([element]);
    expect(rendererSpy).toHaveBeenCalledTimes(2);
    expect(component.listeners.length).toBe(2);
  });

  it('should add hover elements', () => {
    component.addHoverElements([element]);
    expect(component.hoverElements.length).toBe(1);
  });

  it('should remove hover elements', () => {
    component.addHoverElements([element]);
    component.removeHoverElements([element]);
    expect(component.hoverElements.length).toBe(0);
  });

  it('should change radius on mouse enter', () => {
    const restartSpy = jest.spyOn(component.tl, 'restart');
    const radius = component.renderedStyles.radius.current;
    component.enter();
    expect(component.renderedStyles.radius.current).toBe(radius * 1.2);
    expect(restartSpy).toHaveBeenCalledTimes(1);
  });

  it('should change radius on mouse leave', () => {
    const restartSpy = jest.spyOn(component.tl, 'kill');
    const radius = component.renderedStyles.radius.current;
    component.enter();
    component.leave();
    expect(component.renderedStyles.radius.current).toBe(radius);
    expect(restartSpy).toHaveBeenCalledTimes(1);
  });
});
