import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { createSpyObj } from 'jest-createspyobj';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';

describe('AppComponent', () => {
  let dataServiceSpy: Record<string, jest.Mock>;
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    dataServiceSpy = createSpyObj('DataService', ['get']);
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [{ provide: DataService, useValue: dataServiceSpy }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a router-outlet directive', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });

  it('should toggle dark mode', () => {
    expect(component.isDarkMode).toBeTruthy();
    component.toggleDarkMode();
    expect(component.isDarkMode).toBeFalsy();
  });
});
