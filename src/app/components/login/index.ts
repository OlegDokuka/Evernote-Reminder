import LoginComponent from './login.component';

export const login = angular
    .module('Login', [])
    .component('erLogin', LoginComponent)
    .name;

export default login;