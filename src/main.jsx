import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
// import { getStorage } from 'firebase/storage';
// TODO: Add SDKs (SOFTWARE DEV KIT) for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQn8qKrg4NbEU8kBtIsXV-oyIynacYt0g",
  authDomain: "los-cuatro-alamos.firebaseapp.com",
  projectId: "los-cuatro-alamos",
  storageBucket: "los-cuatro-alamos.appspot.com",
  messagingSenderId: "1091191443129",
  appId: "1:1091191443129:web:6e181d6bd9834b1fd79568"
};

// Initialize Firebase
const firebaseInit = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseInit)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)