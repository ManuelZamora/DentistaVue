<template>

  <router-view/>
</template>

<script>
import {ref} from 'vue'
import {onBeforeMount} from 'vue';
import {useRouter, useRoute} from 'vue-router';
import firebase from 'firebase';
export default {
  setup(){
    const image = ref([
      {
        id: 1,
        url: require('./assets/dentista.jpg'), 
        name: 'imagen 1',

        id: 2,
        url: require('./assets/Tiny.jpg'), 
        name: 'imagen 1'
        
      }
    ])

   
    const router = useRouter();
    const route = useRoute()

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        // if not logged in redirect to login page
        if(!user){
          router.replace('/login')
        }
        // if logged in (user available)  redirect to Home
        else if (route.path == '/login' || route.path == '/register'){
          router.replace('/')
        }
      })
    })
     return {image}
  }
}
</script>

<style>

</style>

