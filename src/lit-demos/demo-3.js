import { LitElement, html } from '@polymer/lit-element';

const helloTemplate = (name) => html`<div>Hello ${name}!</div>`;

class Demo3 extends LitElement {
  goodbyeTemplate(name){
    return html`<div>Goodbye ${name}<div>`
  }

  _render(){
    return html`
      <h1>Demo 3</h1>
      <p><i>Lit-HTML</i></p>

      <br>
      ${helloTemplate('World')}
      ${this.goodbyeTemplate('World')}
    `
  }
}

customElements.define('demo-3', Demo3);
