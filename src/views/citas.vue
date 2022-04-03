<template>
  <div class="home">
    <Header />
    <!-- component -->
    <div class="bg-white m-5 shadow rounded-lg p-6">
      <center>
      <h2 class="text-xl mb-2 font-semibold">Elegir fecha</h2>
      </center>
      <br>
      <div class="grid lg:grid-cols-4 gap-3">
      
      <label for="start"></label>
<input type="date" id="start" name="trip-start"
       value="2022-04-04"
       min="2022-04-04" max="2022-12-31">
       
<span>Seleccionar paciente: {{ selected }}</span>
      <select v-model="selected">
        
        
  <option disabled value="">Seleccione un elemento</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>



    </div>
</div>
    <AccInfo />
  </div>
</template>

<script>
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
  setup() {
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


