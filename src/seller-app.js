import { LitElement, html } from 'https://cdn.skypack.dev/lit';
import "/components/seller-form"

export class SellerApp extends LitElement {

    static get properties() {
        return {
            step: { type: Boolean },
        };
    }

    constructor(){
        super();
        this.step = false;
    }

    createRenderRoot(){
        return this;
    }
    
    render() {
        return html`
        <seller-form></seller-form>
        `;
    }
}

customElements.define("seller-app", SellerApp);