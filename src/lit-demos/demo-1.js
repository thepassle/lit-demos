import { LitElement, html } from '@polymer/lit-element';

class Demo1 extends LitElement {
  static get properties() {
    return {
      books: Array
    };
  }

  constructor() {
    super();
    this.books = [
          {'author':'Roald Dahl', 'title':'Charlie and the Chocolate Factory'},
          {'author':'G.R.R. Martin', 'title':'Game of Thrones'}
        ];
  }

  _render({books}){
    return html`
      <h1>Demo 1</h1>
      <p><i>Variables/arrays</i></p>

      <br>
      ${books.map((book) => {
        return html`
          <h3>${book.title}</h3>
          <p>${book.author}</p>
        `
      })}
    `
  }
}

customElements.define('demo-1', Demo1);
