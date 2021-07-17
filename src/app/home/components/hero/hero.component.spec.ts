import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ButtonModule } from '@ui/button/button.component'
import { CursorComponent } from '@ui/cursor/cursor.component'
import { CursorComponentMock } from '@ui/cursor/cursor.component.mock'

import { HeroComponent } from './hero.component'

describe('HeroComponent', () => {
  let component: HeroComponent
  let fixture: ComponentFixture<HeroComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroComponent],
      imports: [ButtonModule],
      providers: [{ provide: CursorComponent, useClass: CursorComponentMock }],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
