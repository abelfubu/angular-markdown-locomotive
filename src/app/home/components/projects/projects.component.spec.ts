import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataServiceMock } from '../../services/data.service.mock';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  const projectMock = {
    title: 'Flex Playground',
    img: 'https://github.com/abelfubu/flex/blob/main/meta.gif?raw=true',
    description:
      'A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.',
    techs: ['Angular', 'Flex', 'GitHub', 'D3', 'Vue', 'Webpack'],
    githubLink: 'https://github.com/abelfubu/flex',
    link: 'https://abelfubu.github.io/flex/',
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsComponent],
      providers: [DataServiceMock.getProvider()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive observable with projects', () => {
    component.projects$.subscribe(([project]) => expect(project).toEqual(projectMock));
  });
});
