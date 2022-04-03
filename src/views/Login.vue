<template>
  <div class="login">
    <!-- Container -->
    <div class="container mx-auto">
      <div class="flex justify-center px-6 my-5">
        <!-- Row -->
        <div class="w-full xl:w-3/4 lg:w-11/12 flex shadow-lg">
          <!-- Col -->
          <div
            class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
          

          >

           <img  src="@/assets/portada1.jpg" />
          
          </div>
          <!-- Col -->
          <div
            class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none"
          >
            <h3 class="pt-4 p-5 text-2xl text-center">Bienvenido de vuelta!</h3>
            <form
              @submit.prevent="Login"
              class="px-8 pt-6 pb-8 mb-4 bg-white rounded"
            >
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="username"
                >
                  Email
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  required
                  v-model.trim="email"
                  placeholder="Username"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="password"
                >
                  Password
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  required
                  v-model.trim="password"
                  placeholder="******************"
                />
              </div>

              <div class="mb-6 text-center">
                <div class="grid grid-cols-3 gap-1">
                  <button
                    class="w-full col-span-2 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Iniciar Sesion
                  </button>
                  <div v-if="isLoading">
                    <Loading class="m-3 font-extrabold text-center" />
                  </div>
                </div>
              </div>
              <hr class="mb-6 border-t" />
              <div class="text-center">
                <router-link to="/register"
                  ><a
                    class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  >
                    Crear Cuenta!
                  </a></router-link
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import DarkMode from "../components/DarkMode.vue";
import Loading from "../components/Loading.vue";
import Google from "../components/LoginProviders/Google.vue";
import GitHub from "../components/LoginProviders/GitHub.vue";
import { reactive, toRefs } from "vue";
import firebase from "firebase";
import Swal from 'sweetalert2'

export default {
  name: "Login",
  components: {
    DarkMode,
    Google,
    GitHub,
    Loading,
  },
  setup() {
    const state = reactive({
      email: null,
      password: null,
      isLoading: false,
    });

    function Login() {
      state.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(state.email, state.password)
        .then((data) => {
          Swal.fire({
            title: 'Bienvenido',
            text: 'Acceso Correcto',
            icon: "success",
            showConfirmButton: false,
            timer:1500
          });
        })
        .catch((err) => alert(err.message));
    }

    return { ...toRefs(state), Login };
  },
};
</script>

<style>
</style>