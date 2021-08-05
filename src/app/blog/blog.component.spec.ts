import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubstringPipeMock } from '../shared/pipes/mocks/substring.pipe.mock';
import { Observable } from 'rxjs';
import { DataServiceMock } from '../services/data.service.mock';

import { BlogComponent } from './blog.component';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogComponent, SubstringPipeMock],
      providers: [DataServiceMock.getProvider()],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have files observable', () => {
    expect(component.posts$).toBeInstanceOf(Observable);
    component.posts$.subscribe((posts) => expect(posts.length).toBe(2));
  });
});
