import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBMZSQCrJX8PRWDh424vgTxM2AV0iNtw5U",
    authDomain: "shop-bfd3a.firebaseapp.com",
    projectId: "shop-bfd3a",
    storageBucket: "shop-bfd3a.appspot.com",
    messagingSenderId: "899957123900",
    appId: "1:899957123900:web:3a226501f620140b054c39",
    measurementId: "G-TV7HTVCBGK"
  };
  export const app=initializeApp(firebaseConfig)
  export const auth=getAuth(app)
