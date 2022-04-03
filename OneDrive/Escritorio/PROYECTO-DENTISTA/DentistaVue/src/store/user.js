import { reactive, toRefs } from "vue";
import firebase from 'firebase';
import Vue from 'vue';
import Vuex from 'vuex';


const state = reactive({
    name: "",
    image : ""
  });

export default function firebaseUser() {
    const fetchUser = async () => {
        const user = firebase.auth().currentUser;
        if (user) {
            state.name = user.email;
            state.image = user.photoURL || `https://eu.ui-avatars.com/api/?name=${state.name[0]}&size=1000`
        }
    }

    return {
        ...toRefs(state), // convert to refs when returning
        fetchUser
    }
}
new Vuex.Store({
    state: {
      db: {},
      pacientes: []
    },
    getters: {
  
      database: state => state.db,
  
      articles: state => state.pacientes
    },
    mutations: {
  
      'SET_DATABASE': (state, db) => {
        state.db = db
      },
  
      'ADD_ARTICLE': (state, pacientes) => {
        state.paciente.push(pacientes)
      },
  
      'MODIFY_ARTICLE': (state, pacientes) => {
        /* eslint-disable-next-line */
        let pacienteFinded = state.paciente.find((item) => {
          return paciente.id === item.id
        })
        pacienteFinded.Nombre = paciente.Nombre
        pacienteFinded.Direccion = paciente.Direccion
        pacienteFinded.Telefono = paciente.Telefono
        pacienteFinded.Edad = article.Edad
      },
  
      'DELETE_ARTICLE': (state, pacienteId) => {
        state.paciente = state.paciente.filter((item) => {
          return item.id !== pacienteId
        })
      },
  
      'RESET_ARTICLES': (state) => {
        state.paciente = []
      }
    }
  })