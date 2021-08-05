import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursorComponent } from '@ui/cursor/cursor.component';
import { CursorComponentMock } from '@ui/cursor/cursor.component.mock';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent, TestHostComponent],
      providers: [{ provide: CursorComponent, useClass: CursorComponentMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default color of primary', () => {
    expect(component.type).toBe('primary');
    expect(component.className).toBe(component.type);
  });

  @Component({
    selector: `md-host-component`,
    template: `<md-button input="secondary"></md-button>`,
  })
  class TestHostComponent {}
});
