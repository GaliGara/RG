import { LitElement, html } from 'https://cdn.skypack.dev/lit';
import "/components/seller-form"
import "/components/employer-form"
import "/components/branch-form"

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
        <!-- <seller-form></seller-form> -->
        <!-- <employer-form></employer-form> -->
        <branch-form></branch-form>
        `;
    }
}

customElements.define("seller-app", SellerApp);