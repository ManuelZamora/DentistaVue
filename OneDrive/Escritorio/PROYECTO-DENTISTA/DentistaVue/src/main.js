import { createApp, reactive, onUnmounted, toRefs } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import firebase from "firebase"
import VueSweetalert2 from 'vue-sweetalert2'
import Vue from 'vue';




const firebaseConfig = {
    apiKey: "AIzaSyDI5f7IytwXlVZ2-AtdZ2div8LG2vTX1-Y",
    authDomain: "proyecto-4cb5e.firebaseapp.com",
    databaseURL: "https://proyecto-4cb5e-default-rtdb.firebaseio.com",
    projectId: "proyecto-4cb5e",
    storageBucket: "proyecto-4cb5e.appspot.com",
    messagingSenderId: "621649310060",
    appId: "1:621649310060:web:51f00d83f4e167af388349"
  };
firebase.initializeApp(firebaseConfig)

// firestore
const db = firebase.firestore()
const userCollection = db.collection('Pacientes')

// Add new user data
export const createUser = user => {
    return userCollection.add(user)
}

// get data
export const getUser = async id => {
    const user = await userCollection.doc(id).get()
    return user.exists ? user.data() : null 
}

// update data
export const updateUser = (id, user) => {
    return userCollection.doc(id).update(user)
}

// delete data
export const deleteUser = id => {
    return userCollection.doc(id).delete()
}


const app = createApp(App).use(router)
app.use(VueSweetalert2)
app.mount('#app')
Vue.use(VueSweetalert2);
