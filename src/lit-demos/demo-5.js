import { LitElement, html } from '@polymer/lit-element';
import { unsafeHTML } from 'lit-html/lib/unsafe-html';

class Demo5 extends LitElement {
  static get properties() {
    return {
      htmlstring: String
    }
  }

  constructor() {
    super();
    this.htmlstring = "<img width='150px' src='https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg'></img>";
  }

  _render({htmlstring}){
    return html`
      <h1>Demo 5</h1>
      <p><i>UnsafeHTML</i></p>

      <br>
      ${htmlstring}
      <br>
      ${unsafeHTML(htmlstring)}


    `
  }
}

customElements.define('demo-5', Demo5);
