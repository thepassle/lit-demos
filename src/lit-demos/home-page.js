import { LitElement, html } from '@polymer/lit-element';

class HomePage extends LitElement {
  constructor() {
    super();
  }

  _render(){
    return html`
      <h1>Home</h1>
      <p>These are some Lit-Element demos</p>
    `
  }
}

customElements.define('home-page', HomePage);
