import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HeaderComponent } from './header.component'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render title received as input', () => {
    const title = 'HELLO'
    component.title = title
    fixture.detectChanges()
    expect(fixture.nativeElement.querySelector('h3').textContent).toBe(title)
  })

  it('should have image src received as input', () => {
    const src = 'abcd'
    component.logo = src
    fixture.detectChanges()
    console.log(fixture.nativeElement.innerHTML)
    expect(fixture.nativeElement.querySelector('img').src).toContain(src)
  })
})
