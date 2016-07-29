import { IComponentOptions } from 'angular';
import * as template from './login.template.html';
import controller from './login.controller'

export const LoginComponent: IComponentOptions = {
    bindings: {
        onLogin: "&"
    },
    template,
    controller
};

export default LoginComponent;