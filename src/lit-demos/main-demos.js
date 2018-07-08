import { LitElement, html } from '@polymer/lit-element/';

import './home-page';
import './demo-1';
import './demo-2';
import './demo-3';
import './demo-4';
import './demo-5';
import './demo-X';

import { SharedStyles } from './styles/styles';

import { Router } from '@vaadin/router';

class MainDemos extends LitElement {
  constructor() {
    super();
  }

  _firstRendered() {
    const router = new Router(this.shadowRoot.querySelector('#outlet'));
    router.setRoutes([
      {path: '/', component: 'home-page'},
      {path: '/1', component: 'demo-1'},
      {path: '/2', component: 'demo-2'},
      {path: '/3', component: 'demo-3'},
      {path: '/4', component: 'demo-4'},
      {path: '/5', component: 'demo-5'},

      {path: '/X', component: 'demo-x'}
    ]);
  }

  _render(){
    return html`
      ${SharedStyles}

      <h1>Lit Demos</h1>

      <a href="/">Home</a>
      <a href="/1">Demo 1</a>
      <a href="/2">Demo 2</a>
      <a href="/3">Demo 3</a>
      <a href="/4">Demo 4</a>
      <a href="/5">Demo 5</a>
      <a href="/x">Demo x</a>
      <hr>
      <div id="outlet"></div>
    `
  }
}

customElements.define('main-demos', MainDemos);
