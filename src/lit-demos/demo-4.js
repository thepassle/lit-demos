import { LitElement, html } from '@polymer/lit-element';
import { until } from 'lit-html/lib/until';

class Demo4 extends LitElement {
  _render(){
    return html`
      <h1>Demo 4</h1>
      <p><i>Promises</i></p>

      <br>

      ${fetch('https://swapi.co/api/people/1/')
          .then((response) => response.json())
          .then((response) => {
            return response.name;
          })
        }

      <br>
      ${until(
          fetch('https://swapi.co/api/people/2/')
            .then((response) => response.json())
            .then((response) => {
              return response.name;
            }),
            html`<b>loading...</b>`
          )
        }

    `
  }
}

customElements.define('demo-4', Demo4);
