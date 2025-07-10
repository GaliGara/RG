import {LitElement, html} from 'https://cdn.skypack.dev/lit';
import './grid-table.js'

export class EmployerForm extends LitElement{

    static get properties(){
        return{
            employer: {type: Array},
            nombre: {type: String},
            apellidoPaterno: {type: String},
            apellidoMaterno: {type: String},
        }
    }

    constructor(){
        super();
        this.employer = [];
        this.nombre = '';
        this.apellidoMaterno = '';
        this.apellidoPaterno = '';
    }

    createRenderRoot(){
        return this;
    }

    handleFullName(e){
        const campo = e.target.name
        const valor = e.target.value.trim();
        this[campo] = valor;
        this.requestUpdate();
    }

    get nombreCompleto(){
        return [this.nombre, this.apellidoPaterno, this.apellidoMaterno].filter(Boolean).join(' ')
    }

    render() {
        return html`
        <div
        id="card-sell"
        class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
        >
            <div
             class="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg relative"
             >
                <h2 class="text-2xl font-semibold mb-4">Registro de Empleados</h2>
                <form>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div class="col-span-2">
                            <label class="block text-sm font-medium mb-2">Nombre Completo:</label>
                            <input
                            type="text" 
                            name="nombreCompleto"
                            class="border w-full border-gray-300 rounded-md"
                            .value=${this.nombreCompleto}
                            readonly
                            >

                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-1">Nombres:</label>
                            <input
                            type="text" 
                            class="border w-full border-gray-300 rounded-md"
                            name="nombre"
                            .value=${this.nombre}
                            @input=${this.handleFullName}
                            >

                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-1">Apellido Paterno:</label>
                            <input
                            type="text" 
                            class="border w-full border-gray-300 rounded-md"
                            name="apellidoPaterno"
                            .value=${this.apellidoPaterno}
                            @input=${this.handleFullName}
                            >
                        </div>
                        <div class="col-span-1">
                            <label class="block text-sm font-medium mb-1">Apellido Materno:</label>
                            
                            <input
                            type="text" 
                            class="border w-full border-gray-300 rounded-md"
                            name="apellidoMaterno"
                            .value=${this.apellidoMaterno}
                            @input=${this.handleFullName}
                            >
                        </div>        
                        <div class="col-span-1">      
                            <label class="block text-sm font-medium mb-1">Banco:</label> 
                                <input
                                id="ventas"
                                type="text"
                                class="w-full border col-span-3 border-gray-300 rounded-md"
                                >

                        </div>
                        <div class="col-span-2">
                            <label class="block text-sm font-medium mb-1">Numero de cuenta:</label>
                            
                            <input
                            id="ventas"
                            type="number"
                            step="1"
                            class="w-full border col-span-3 border-gray-300 rounded-md"
                            >

                        </div>        
                        <div class="col-span-2">
                            <label class="block text-sm font-medium mb-1 ">Puesto:</label>
                            
                                <select
                                name="puesto"
                                class="w-full border col-span-7 border-gray-300 rounded-md"
                                >
                                    <option>Vendedor</option>
                                    <option>Gerente</option>
                                    <option>Director</option>
                                </select>
                        </div>

                    </div>

                    <!-- Buttons -->
                     <div class="mt-3 flex justify-end gap-2 pt-2">
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

customElements.define("employer-form", EmployerForm);