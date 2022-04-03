<template>
  <div class=" header " id="head" >
    <div class="">
      <div
        class="antialiased bg-blue-900 dark-mode:bg-gray-900 border border-gray-100 shadow-lg"
      >
        <div
          class="w-full text-white dark-mode:text-gray-200 dark-mode:bg-gray-800"
        >
          <div
            class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
          >
           <img class="inline-block object-cover w-10 h-10 rounded-full" alt="dien" src="@/assets/diente.png">
                 
               
             
              
            <div class="flex flex-row items-center justify-between p-4">
             <div class="flex flex-col w-40 "> 
              <a
                href="/"
                class="text-xl font-semibold tracking-widest text-white uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
                >Dentista</a>
            </div>
            </div>
            

            <div class="flex flex-col w-40 "> 
              <a
                href="/citas"
                class="text-base font-semibold tracking-widest text-white uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
                >citas</a>
            </div>

            
            <div class="flex flex-col w-40 "> 
              <a
                href="/pacient"
                class="text-base font-semibold tracking-widest text-white uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
                >pacientes</a>
            </div>

             

          
            

            <nav
              class="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row"
            >
              <div class="relative inline-block">
                
                
        
              </div>

              <button
                class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                @click="Logout"
              >
                Salir de la aplicacion
              </button>
            </nav>
          </div>
           </div>
        </div>
      </div>
    </div>
  


</template>


  <style>

    
      body{

        background-color:rgba(221, 27, 27, 0.616);

      }
    


    </style>


<script>
import { onBeforeMount, reactive, toRefs } from "vue";
import firebase from "firebase";
import { useRoute, useRouter } from "vue-router";
import firebaseUser from "../store/user.js";
import Swal from 'sweetalert2';

export default {
  name: "Header",
  setup(props) {
    const { name, fetchUser, image } = firebaseUser();
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      currentRoute: true,
    });

    onBeforeMount(() => {
      fetchUser();
    });
    // Dynamic route
    // if (route.path !== "/about") {
    //   state.currentRoute = false;
    // }

    function Logout() {
      firebase.auth()
      .signOut()
      .then((data) => {
        Swal.fire({
          title: 'Bye',
          text: 'Cierre de sesión correctamente',
          icon: 'success',
        })
      });
    }
    
    function Pacientes(){
      
    }

    return { ...toRefs(state), name, image, Logout };
  },
};
</script>


