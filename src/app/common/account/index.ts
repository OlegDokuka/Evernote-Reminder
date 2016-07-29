import AccountService from './account.service';

export const account = angular
    .module("Account", [])
    .service("AccountService", AccountService)
    .name;

export default account;