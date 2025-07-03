import { LitElement, html } from 'https://cdn.skypack.dev/lit';  
import { Grid } from 'https://unpkg.com/gridjs?module';


export class SellerForm extends LitElement {

    static get properties() {
        return {
            sellers: { type: Array },
        };
    }
    
    constructor(){
        super();
        this.sellers = [];
    }

    render() {
        return html`
        <h1>Sellers</h1>
        `;
    }
}
customElements.define('seller-form', SellerForm)