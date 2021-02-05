// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyMN_5FJyDpjjQ27On5N1KHBnpwvUu4W8",
    authDomain: "vue-apps-collection.firebaseapp.com",
    projectId: "vue-apps-collection",
    storageBucket: "vue-apps-collection.appspot.com",
    messagingSenderId: "1049976501122",
    appId: "1:1049976501122:web:584ecb63d8750ca511d59b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;