/// <reference path="../typings/index.d.ts" />
import {Evernote} from 'evernote';

const client = new Evernote.Client({
  consumerKey: 'shadowgun168',
  consumerSecret: '25c2597d2c7c62b0',
  sandbox: true // Optional (default: true)
});


new Promise((r, re) => (client as any).getRequestToken('YOUR CALLBACK URL', (error, oauthToken, oauthTokenSecret, results) => error ? re(error) : r({ oauthToken, oauthTokenSecret, results })))
  .then(v => console.log(v));