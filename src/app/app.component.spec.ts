import { NO_ERRORS_SCHEMA } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { createSpyObj } from 'jest-createspyobj'
import { AppComponent } from './app.component'
import { DataService } from './services/data.service'

describe('AppComponent', () => {
  let dataServiceSpy: Record<string, jest.Mock>

  beforeEach(async () => {
    dataServiceSpy = createSpyObj('DataService', ['get'])
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [{ provide: DataService, useValue: dataServiceSpy }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    fixture.detectChanges()
    expect(app).toBeTruthy()
  })

  it('should contain a router-outlet directive', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('router-outlet')).toBeTruthy()
  })
})
