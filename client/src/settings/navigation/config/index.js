import mainPageConfig from './main';
import notFoundPageConfig from './not-found';
import loginPageConfig from './login';

export default [
    ...mainPageConfig,
    ...loginPageConfig,

    ...notFoundPageConfig,
];
