"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scully_1 = require("@scullyio/scully");
function postIdPlugin(route, config = {}) {
    return Promise.resolve([{ route: '/blog/1' }]);
}
const validator = async () => [];
(0, scully_1.registerPlugin)('router', 'postsIds', postIdPlugin, validator);
//# sourceMappingURL=posts.plugin.js.map