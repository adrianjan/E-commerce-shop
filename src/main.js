import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";

// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";



Vue.config.productionTip = false

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzMvlqcTzc-LIiQvdfCaaMnYOMhvF-0g8",
  authDomain: "vuejs-shop-dc2fe.firebaseapp.com",
  projectId: "vuejs-shop-dc2fe",
  storageBucket: "vuejs-shop-dc2fe.appspot.com",
  messagingSenderId: "526358362004",
  appId: "1:526358362004:web:58af83785ccdc4ccf7c181"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});


new Vue({
  store: store,
  router,
  render: h => h(App)
}).$mount('#app')
