<template>
  <div class="home">
    <Header />
    <!-- component -->
    <div class="bg-white m-10 shadow rounded-lg p-6">
      <h2 class="text-xl mb-4 font-semibold">Agregar paciente</h2>
      <form @submit.prevent="created">
        <div class="grid lg:grid-cols-2 gap-6">
          <div
            class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1"
          >
            <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
              <p>
                <label for="name" class="bg-white text-gray-600 px-1"
                  >Nombre *</label
                >
              </p>
            </div>
            <p>
              <input
                v-model="Nombre"
               id="name"
                autocomplete="false"
                tabindex="0"
                required
                type="text"
                class="py-1 px-1 text-gray-900 outline-none block h-full w-full"
              />
            </p>
          </div>
          <div
            class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1"
          >
            <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
              <p>
                <label for="lastname" class="bg-white text-gray-600 px-1"
                  >Direccion *</label
                >
              </p>
            </div>
            <p>
              <input
                v-model="Direccion"
                id="lastname"
                required
                autocomplete="false"
                tabindex="0"
                type="text"
                class="py-1 px-1 outline-none block h-full w-full"
              />
            </p>
          </div>
          <div
            class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1"
          >
            <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
              <p>
                <label for="username" class="bg-white text-gray-600 px-1"
                  >Edad *</label
                >
              </p>
            </div>
            <p>
              <input
                v-model="Edad"
                id="username"
                autocomplete="false"
                tabindex="0"
                required
                type="text"
                class="py-1 px-1 outline-none block h-full w-full"
              />
            </p>
          </div>
          <div
            class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1"
          >
            <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
              <p>
                <label for="Phone" class="bg-white text-gray-600 px-1"
                  >Telefono *</label
                >
              </p>
            </div>
            <p>
              <input
                v-model="Telefono"
                id="phone"
                required
                autocomplete="false"
                tabindex="0"
                type="phone"
                class="py-1 px-1 outline-none block h-full w-full"
              />
            </p>
          </div>
        </div>
        <div class="border-t mt-6 pt-3">
          <div class="w-24">
            <button
              type="submit"
              class="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner hover:bg-blue-700 transition-all duration-300"
            >
              Guardar
            </button>
            <div v-if="isLoading" class="flex mt-1 text-center float-right">
              <Loading />
            </div>
          </div>
        </div>
      </form>
    </div>
<div>
    <AccInfo />
 </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import { onBeforeMount, reactive, toRefs } from "vue";
import { createUser } from "../main.js";
import AccInfo from "../components/AccInfo.vue";
import Loading from "../components/Loading.vue";
import axios from "axios";
export default {
  data(){
    return  { 
      Nombre:"",
      Direccion: "",
      Edad: "",
      Telefono: "",
      Users: null,
    
    };
    
    
  },
   
   
   
   methods: {
       created()
  {
    axios.post( 'http://127.0.0.1:8000/api/paciente/insertar',{
      nombre:this.Nombre,direccion:this.Direccion,telefono:this.Telefono,edad:this.Edad
    },
  
    ).then((response) => {
    });
this.$swal({
  position: 'top-center',
  icon: 'success',
  title: 'Nuevo Usuario',
  showConfirmButton: false,
  timer: 800
})

window.location.reload();

},
 

  }, 
  components: {
    Header,
    AccInfo,
    Loading,
  },
 

 
  setup() {
    const state = reactive({
      isLoading: false,
    });

    const addInfo = async () => {
      // await createUser({ ...state }, (state.isLoading = true));
      await createUser({
      
    });


      // clear fields once method is done
      state.isLoading = false;
     
    };
  },
 
};
</script>


