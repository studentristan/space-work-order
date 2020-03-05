/**
 * Comment header block
 */

'use strict';

import EventHandler from './EventHandler.js';

export default class Main {

  constructor() {
    new EventHandler();
    console.log(`Welcome to the Sol Mining Federation.`);
  }
}

window.addEventListener('load', () => {
  new Main();
});
