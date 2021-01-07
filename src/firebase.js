import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCmA3gE8ts6LwXpKT4pcmMREzkIouTbuZc",
    authDomain: "fir-auth-dev-967c2.firebaseapp.com",
    projectId: "fir-auth-dev-967c2",
    storageBucket: "fir-auth-dev-967c2.appspot.com",
    messagingSenderId: "68079360807",
    appId: "1:68079360807:web:45fd3f9cffa976d5362702"
});

const auth = app.auth();
export { auth };
export default app;