import {LitElement, html} from 'https://cdn.skypack.dev/lit';

export class BranchForm extends LitElement {

    static get properties(){
        return{
            branchNames: {type: Array},
            
        }
    }

    constructor(){
        super();
        this.branchNames = []; 
    }

    createRenderRoot(){
        return this;
    }

    render(){
        return html`

        <div
        id="card-sell"
        class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
        >
            <div
             class="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg relative"
             >
                <h2 class="text-2xl font-semibold mb-4">Registro de Sucursal</h2>
                <form>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div class="grid-cols-2">
                            <label class="block text-sm font-medium mb-1">Nombre de Sucursal:</label>
                            <input
                            class="w-full border col-span-3 border-gray-300 rounded-md"
                            type="text"
                            name="sucursales"
                            >

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
        `;
    }
}

customElements.define('branch-form', BranchForm);