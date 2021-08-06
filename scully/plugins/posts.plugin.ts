import { HandledRoute } from '@scullyio/scully';
import { registerPlugin } from '@scullyio/scully';

function postIdPlugin(route: string, config = {}): Promise<HandledRoute[]> {
  return Promise.resolve([{ route: '/blog/1' }]);
}

const validator = async () => [];
registerPlugin('router', 'postsIds', postIdPlugin, validator);
