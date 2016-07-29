import { Evernote } from 'evernote';
import { assign } from 'loadash';

export class EvernoteClient extends Evernote.Client {
    constructor(options: Evernote.ClientConfig) {
        super(assign({}, { token: localStorage.getItem(EvernoteClient.TOKEN_KEY), options }));
    }
}

export namespace EvernoteClient {
    export const TOKEN_KEY = "token";
}

export default EvernoteClient;