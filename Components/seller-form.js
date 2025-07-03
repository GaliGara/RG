import { LitElement, html } from 'https://cdn.skypack.dev/lit';  
import './grid-table.js'


export class SellerForm extends LitElement {

    static get properties() {
        return {
            configSell: { type: Object },
        };
    }
    
    constructor(){
        super();
        this.configSell = {};
    }


    render() {

        const configSell = {
            columns: ['Sucursal', 'Tipo de pago'],
            data: [
                ['Mitikah', 'Transferencia'],
                ['Delta', 'Efectivo']
            ],
            search: true,
            pagination: { limit: 3}
        };

        return html`
          <h2>Usuarios</h2>
          <grid-table .config=${configSell}></grid-table>
        `;
    }
}
customElements.define('seller-form', SellerForm)