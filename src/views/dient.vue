<template>
  <div class="dient">
    <Header />
    <!-- component -->
    <div class="bg-white m-10 shadow rounded-lg p-6">
      
      
     
    
        <div class="grid lg:grid-cols-1 gap-6">

       <div><center>
        <h1 class=" text-6xl font-medium dark:text-white "> TUS DIENTES EN LAS MEJORES MANOS</h1>
        </center>
        <br>

        </div>

         
            
          </div>
          
          <div
            class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1"
          >
          <center>

       
       
            <img alt="dien" src="@/assets/dentista.jpg" />

          </center>
          </div>
         
          </div>
        </div>
 
   

    
  
</template>

<script>
import {ref} from 'vue'
import Header from "../components/Header.vue";
import { onBeforeMount, reactive, toRefs } from "vue";
import firebaseUser from "../store/user.js";
import { createUser } from "../main.js";
import AccInfo from "../components/AccInfo.vue";
import Loading from "../components/Loading.vue";


export default {
  name: "dient",
  components: {
    Header,
    AccInfo,
    Loading,
  },
  setup()
  
   {
    const state = reactive({
      Nombre: null,
      Direccion: null,
      Telefono: null,
      Edad: null,
      isLoading: false,
    });

    

    const addInfo = async () => {
      // await createUser({ ...state }, (state.isLoading = true));
      await createUser({
      Nombre: "",
      Direccion: "",
      Telefono: "",
      Edad: ""
    });


      // clear fields once method is done
      state.isLoading = false;
      state.Nombre = "";
      state.Direccion = "";
      state.Telefono = "";
      state.Edad = "";
    };
    const { name, image } = firebaseUser();
    return { name, image, ...toRefs(state), addInfo };
  },
};
</script>


