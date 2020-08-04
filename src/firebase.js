import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAHQfMq6zRHFcNpwUXgT5miKbOdh7H4d7s",
    authDomain: "react-todo-app-31746.firebaseapp.com",
    databaseURL: "https://react-todo-app-31746.firebaseio.com",
    projectId: "react-todo-app-31746",
    storageBucket: "react-todo-app-31746.appspot.com",
    messagingSenderId: "693159325826",
    appId: "1:693159325826:web:d93ffe17e88cb210aa849b",
    measurementId: "G-THZ0VSF9NR"
});

const db = firebaseApp.firestore();

export default db;  