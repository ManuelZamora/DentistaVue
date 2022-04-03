<template>

  <div class="container mx-auto px-4 sm:px-8">

    <div class="py-8">
      <div>
        <h2 class="text-2xl font-semibold leading-tight">Usuarios</h2>

      </div>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Nombre
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Direccion
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Telefono
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Edad
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Accion
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="us in Users"
                :key="us.id"
              >
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                    <img  src="@/assets/user.png" />
                    </div>
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ us.nombre }} 
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">{{ us.direccion }}</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">{{ us.telefono }}</p>
                </td>
                <td class="px-5  py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">{{ us.edad }}</p>
                </td>
                <td class="px-5  py-5 border-b border-gray-200 bg-white text-sm">
                  <router-link :to="`/edit/${us.id}/${us.nombre}/${us.direccion}/${us.telefono}/${us.edad}`"
                    ><span
                      class="relative inline-block px-8 py-1 font-semibold text-green-900 leading-tight"
                    >
                      <span
                        aria-hidden
                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span class="relative ">Editar</span>
                    </span></router-link
                  >
                  <button
                    v-on:click="deleteUser(us.id)"
                    class="relative ml-7  inline-block px-8 py-1 font-semibold text-red-900 leading-tight"
                  >
                    <span
                      aria-hidden
                      class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                    ></span>
                    <span class="relative">Borrar</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebaseUser from "../store/user.js";
import { deleteUser } from "../main.js";
import { reactive, onUnmounted, toRefs } from "vue";
import axios from "axios";
export default {
  name: "Account Info",
   data(){
    return  { 
      Users: null,
    
    };
    
    
  },
 mounted() {
  axios.get( 'http://127.0.0.1:8000/api/paciente/traert'  
    ).then((response) => (this.Users = response.data)
      
    );

},
 methods: {
       deleteUser(id)
  {
    axios.delete( 'http://127.0.0.1:8000/api/paciente/eliminar/' + id
        ).then((response) => window.location.href='/'
    )
 this.$swal({
  position: 'top-center',
  icon: 'success',
  title: ' Usuario Eliminado',
  showConfirmButton: false,
  timer: 800
})
  },
 

  }, 

setup(props) {
  /*  const { name, image } = firebaseUser();
    const db = firebase.firestore();
    const userCollection = db.collection("Pacientes");
    const state = reactive({
      users: [],
    });
    const close = userCollection.onSnapshot((snapshot) => {
      state.users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    });
    onUnmounted(close);

    return { image, name,  ...toRefs(state), deleteUser };
  */
  },
};
</script>

<style>
</style>