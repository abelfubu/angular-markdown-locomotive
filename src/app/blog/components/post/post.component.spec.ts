import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DataServiceMock } from '../../../services/data.service.mock';
import { of } from 'rxjs';
import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [PostComponent],
    providers: [
        { provide: ActivatedRoute, useValue: { params: of(1) } },
        { provide: Title, useValue: { setTitle: jest.fn() } },
        { provide: Meta, useValue: { updateTag: jest.fn(), addTags: jest.fn() } },
        DataServiceMock.getProvider(),
    ],
    schemas: [NO_ERRORS_SCHEMA],
    teardown: { destroyAfterEach: false }
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    jest.spyOn(window.history, 'state', 'get').mockReturnValue({ title: 1, description: 2 });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should map param id to assets path', () => {
    component.path$.subscribe((path) => expect(path).toEqual('/assets/md/1.md'));
  });
});
