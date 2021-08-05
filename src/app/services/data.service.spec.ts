import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  const httpSpy = {
    get: jest.fn(() => of()),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: HttpClient, useValue: httpSpy }],
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(httpSpy.get).toHaveBeenCalledTimes(2);
    expect(service.repoFiles$).toBeInstanceOf(Observable);
    expect(service.repos$).toBeInstanceOf(Observable);
  });
});
