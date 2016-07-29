import { IComponentController } from 'angular';
import { StateService } from 'angular-ui-router';
import { } from 'angular';

interface LoginBindings {
    onLogin?: (credentials) => void;
}

interface LoginModel {
    token?: string;
}

export class LoginController implements LoginBindings, IComponentController, LoginModel {
    public login(): void {
        const { token, onLogin } = this as LoginBindings & LoginModel;

        onLogin({ token });
    }
}

export default LoginController;