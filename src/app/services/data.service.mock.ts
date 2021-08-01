import { of } from 'rxjs';
import { DataService } from './data.service';

export class DataServiceMock {
  static getProvider(): unknown {
    return { provide: DataService, useFactory: () => DataServiceMock.instance() };
  }

  static instance(): unknown {
    return {
      repoFiles$: of([
        {
          title: 'Flex Playground',
          img: 'https://github.com/abelfubu/flex/blob/main/meta.gif?raw=true',
          download_url: '',
          description:
            'A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.',
          techs: ['Angular', 'Flex', 'GitHub', 'D3', 'Vue', 'Webpack'],
          githubLink: 'https://github.com/abelfubu/flex',
          link: 'https://abelfubu.github.io/flex/',
        },
        {
          title: 'Flex Playground',
          img: 'https://github.com/abelfubu/flex/blob/main/meta.gif?raw=true',
          download_url: '',
          description:
            'A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.',
          techs: ['Angular', 'Flex', 'GitHub', 'D3', 'Vue', 'Webpack'],
          githubLink: 'https://github.com/abelfubu/flex',
          link: 'https://abelfubu.github.io/flex/',
        },
      ]),
      repos$: of([]),
    };
  }
}
