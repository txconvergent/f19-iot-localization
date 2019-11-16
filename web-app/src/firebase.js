import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCGMQpeff1oaGkghYbSx_fS6CvogUD4YuI",
    authDomain: "iot-localization-412b8.firebaseapp.com",
    databaseURL: "https://iot-localization-412b8.firebaseio.com",
    projectId: "iot-localization-412b8",
    storageBucket: "iot-localization-412b8.appspot.com",
    messagingSenderId: "936875743999",
    appId: "1:936875743999:web:245fef384230ec59944aca",
    measurementId: "G-05VHEKP9N7"
  };

firebase.initializeApp(firebaseConfig);

export default firebase