import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFtzJcRcH6o-3cSR1NzOX7RKnP_Y4SJdQ",
  authDomain: "discord-clone-cb24c.firebaseapp.com",
  databaseURL: "https://discord-clone-cb24c.firebaseio.com",
  projectId: "discord-clone-cb24c",
  storageBucket: "discord-clone-cb24c.appspot.com",
  messagingSenderId: "201578088851",
  appId: "1:201578088851:web:d0a4f780f2a2ccc473c066",
  measurementId: "G-DP9G0CTZTP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
