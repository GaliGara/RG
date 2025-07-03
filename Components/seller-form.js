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

    createRenderRoot(){
        return this;
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

        <div
        id="card-sell"
        class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
        >
            <div
             class="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg relative"
             >
                <h2 class="text-2xl font-semibold mb-4">Registro nuevo</h2>
                <form>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-1">Sucursal</label>
                            <select
                            name="sucursal"
                            class="w-full border-gray-300 rounded-md"
                            >
                                <option>Selecciona</option>
                                <option>Mitika</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-1">Fecha</label>
                            <input
                            type="date" 
                            nama="fecha"
                            class="w-full border-gray-300 rounded-md"
                            >
                        </div>
                    </div>

                    <div>
                        <label>Vendedor</label>
                    </div>
                </form>
            </div>
        </div>
          <!-- <grid-table .config=${configSell}></grid-table> -->
        `;
    }
}
customElements.define('seller-form', SellerForm)