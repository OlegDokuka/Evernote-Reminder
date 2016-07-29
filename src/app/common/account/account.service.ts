import { Evernote } from 'evernote';
import { IQService, IPromise } from 'angular';


export class AccountService {
    static $inject = ["$q", "EvernoteClient"];

    constructor(private $q: IQService, private EvernoteClient: Evernote.Client) {
    }

    public get(): IPromise<Evernote.User> {
        const { $q, EvernoteClient } = this;

        return $q((r, re) => EvernoteClient.getUserStore().getUser((e, u) => e ? re(e) : r(u)));
    }
}

export default AccountService; 