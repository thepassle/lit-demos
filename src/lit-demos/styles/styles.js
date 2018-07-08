import { html } from '@polymer/lit-element';

import { RED } from './colors';
import { VERT_SPACER } from './spacers';

export const SharedStyles = html`
    <style>
        a{
            color: ${ RED };
            margin: ${ VERT_SPACER * 2 }px;
        }
    </style>
`