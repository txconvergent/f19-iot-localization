import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCGMQpeff1oaGkghYbSx_fS6CvogUD4YuI",
  authDomain: "iot-localization-412b8.firebaseapp.com",
  databaseURL: "https://iot-localization-412b8.firebaseio.com",
  projectId: "iot-localization-412b8",
  storageBucket: "iot-localization-412b8.appspot.com",
  messagingSenderId: "936875743999",
  appId: "1:936875743999:web:227377bb7f1dcf5c944aca",
  measurementId: "G-P6JCDBSHL5"
};

firebase.initializeApp(firebaseConfig);

export default firebase