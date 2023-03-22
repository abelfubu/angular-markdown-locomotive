import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CursorComponent } from '@ui/cursor/cursor.component'
import { CursorComponentMock } from '@ui/cursor/cursor.component.mock'
import { TabsModule } from '@ui/tab-group/tab-group.component'

import { ExperienceComponent } from './experience.component'

describe('ExperienceComponent', () => {
  let component: ExperienceComponent
  let fixture: ComponentFixture<ExperienceComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ExperienceComponent],
    imports: [TabsModule],
    providers: [{ provide: CursorComponent, useClass: CursorComponentMock }],
    teardown: { destroyAfterEach: false }
}).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
