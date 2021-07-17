import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CursorComponent } from '@ui/cursor/cursor.component'
import { CursorComponentMock } from '@ui/cursor/cursor.component.mock'

import { SocialComponent } from './social.component'

describe('SocialComponent', () => {
  let component: SocialComponent
  let fixture: ComponentFixture<SocialComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialComponent],
      providers: [{ provide: CursorComponent, useClass: CursorComponentMock }],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
