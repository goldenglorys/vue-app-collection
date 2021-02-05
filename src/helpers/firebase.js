// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCyMN_5FJyDpjjQ27On5N1KHBnpwvUu4W8",
    authDomain: "vue-apps-collection.firebaseapp.com",
    databaseURL: "https://vue-apps-collection-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vue-apps-collection",
    storageBucket: "vue-apps-collection.appspot.com",
    messagingSenderId: "1049976501122",
    appId: "1:1049976501122:web:584ecb63d8750ca511d59b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Connect to the rt-db reference
const database = firebase.database();
export const chatRefs = database.ref("chats");

export default firebase;