import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyCcpxeOeVfiooiJYWv4pnioxRbbiVngeYQ",
  authDomain: "roompop-f51d1.firebaseapp.com",
  databaseURL: "https://roompop-f51d1.firebaseio.com",
  projectId: "roompop-f51d1",
  storageBucket: "roompop-f51d1.appspot.com",
  messagingSenderId: "1009983531027",
  appId: "1:1009983531027:web:7dfa7a7f53680da4c477e6",
  measurementId: "G-FRSWMXWEDN"
};

firebase.initializeApp(firebaseConfig);

export default firebase