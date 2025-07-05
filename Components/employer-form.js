import {LitElement, html} from 'https://cdn.skypack.dev/lit';
import './grid-table.js'

export class EmployerForm extends LitElement{

    static get properties(){
        return{
            employer: {type: Array},
        }
    }

    constructor(){
        super();
        this.employer = [];
    }

    createRenderRoot(){
        return this;
    }

    render() {
        return html`
        <h1>Employers</h1>
        `;
    }
}

customElements.define("employer-form", EmployerForm);