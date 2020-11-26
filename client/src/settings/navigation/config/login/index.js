import { routes } from 'settings/navigation/routes';
import { Login, Signup } from 'pages';

export default [
    { path: routes.login, component: Login, exact: true },
    { path: routes.signup, component: Signup, exact: true },
];
