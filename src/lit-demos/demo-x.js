import { LitElement, html } from '@polymer/lit-element';

import { increment } from '../actions/count';
import { decrement } from '../actions/count';

import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';

class DemoX extends connect(store)(LitElement) {
  static get properties() {
    return {
      count: Number
    };
  }

  constructor() {
    super();
  }

  _render(){
    return html`
      <h1>Demo x</h1>
      <p><i>redux</i></p>
      <br>
      <p>count: ${this.count}</p>
      <button on-click="${() => store.dispatch(increment())}">inc</button>
      <button on-click="${() => store.dispatch(decrement())}">dec</button>
    `
  }

  _stateChanged(state){
  	this.count = state.counter.count;
  }
}

customElements.define('demo-x', DemoX);
