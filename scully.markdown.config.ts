import { ScullyConfig } from '@scullyio/scully';
import './scully/plugins/posts.plugin';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'markdown',
  outDir: './dist/static',
  routes: {
    '/blog/:id': {
      type: 'postsIds',
    },
  },
};
