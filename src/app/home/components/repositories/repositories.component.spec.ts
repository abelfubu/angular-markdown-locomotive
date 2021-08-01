import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubstringPipeMock } from '../../../shared/pipes/mocks/substring.pipe.mock';
import { DataServiceMock } from '../../../services/data.service.mock';
import { RepositoriesComponent } from './repositories.component';
import { Observable } from 'rxjs';

describe('RepositoriesComponent', () => {
  let component: RepositoriesComponent;
  let fixture: ComponentFixture<RepositoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepositoriesComponent, SubstringPipeMock],
      providers: [DataServiceMock.getProvider()],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have repos$ prop as an observable', () => {
    expect(component.repos$).toBeInstanceOf(Observable);
  });
});
