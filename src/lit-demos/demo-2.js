import { LitElement, html } from '@polymer/lit-element';

class Demo2 extends LitElement {
  static get properties() {
    return {
      visible: Boolean
    };
  }

  constructor() {
    super();
    this.visible = false;
  }

  toggle() {
    this.visible = !this.visible;
  }

  _render({visible}){
    return html`
      <h1>Demo 2</h1>
      <p><i>Conditionals</i></p>

      <br>
      <button on-click="${() => this.toggle()}">Toggle</button>
      
      <!-- Alternatively: -->
      <button on-click="${this.toggle.bind(this)}">Toggle</button>

      ${visible 
          ? html`<p>Is visible!</p>`
          : ''
        }

    `
  }
}

customElements.define('demo-2', Demo2);
