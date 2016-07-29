import { Evernote } from 'evernote';
import EvernoteClient from './evernote-client.service';

export const evernote = angular
    .module('Evernote', [])
    .service('EvernoteClient', EvernoteClient)
    .name;
export { EvernoteClient };

export default evernote;