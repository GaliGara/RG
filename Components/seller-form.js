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
                <h2 class="text-2xl font-semibold mb-4">Registro de Venta</h2>
                <form>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div>
                            <label class="block text-sm font-medium mb-1">Sucursal</label>
                            <select
                            name="sucursal"
                            class="w-full border border-gray-300 rounded-md"
                            >
                                <option>Seleccionar</option>
                                <option>Mitika</option>
                            </select>

                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-1">Fecha</label>
                            <input
                            type="date" 
                            name="fecha"
                            class="border w-full border-gray-300 rounded-md"
                            >
                        </div>
                        <div class="col-span-1">
                            <label class="block text-sm font-medium mb-1">Vendedor</label>
                            
                                <select
                                name="vendedor"
                                class=" border w-full col-span-7 border-gray-300 rounded-md"
                                >
                                    <option>Seleccionar</option>
                                    <option>Enrique</option>
                                </select>
                        </div>        
                        <div class="col-span-1">      
                            <!-- <label class="block text-sm font-medium mb-1">Venta</label>  -->
                                <input
                                id="ventas"
                                placeholder="Venta"
                                type="number"
                                step=".01"
                                class="mt-6 w-full border col-span-3 border-gray-300 rounded-md text-right"
                                >

                        </div>
                        <div class="col-span-1">
                            <label class="block text-sm font-medium mb-1">Tipo de pago</label>
                            
                                <select
                                name="vendedor"
                                class="w-full border col-span-7 border-gray-300 rounded-md"
                                >
                                    <option>Seleccionar</option>
                                    <option>Efectivo</option>
                                    <option>Tarjeta</option>
                                </select>
                        </div>        
                        <div class="col-span-1">     
                            <!-- <label class="block text-sm font-medium mb-1">Cantidad</label>    -->
    
                                <input
                                id="ventas"
                                placeholder="Cantidad"
                                type="number"
                                step=".01"
                                class="w-full mt-5 border col-span-3 border-gray-300 rounded-md text-right"
                                >

                        </div>
                        <div class="col-span-2">
                            <label class="block text-sm font-medium mb-1 ">Notas:</label>
                            
                            <textarea
                            name="notas"
                            rows="3"
                            placeholder="Escribe alguna observación..."
                            class="w-full border border-gray-300 rounded-md"
                            ></textarea>
                        </div>

                    </div>

                    <!-- Buttons -->
                     <div class="flex justify-end gap-2 pt-2">
                        <button 
                        class="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
                        type="button">
                            Cerrar
                        </button>
                        <button
                        class="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                        >
                            Agregar
                        </button>
                     </div>

                </form>
            </div>
        </div>
          <!-- <grid-table .config=${configSell}></grid-table> -->
        `;
    }
}
customElements.define('seller-form', SellerForm)