import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'


var firebaseConfig = {
    apiKey: "AIzaSyC0NYq1cuJzqXCLshJkQLJhWS3b_wtv2GM",
    authDomain: "web-and-mobile-chat.firebaseapp.com",
    projectId: "web-and-mobile-chat",
    storageBucket: "web-and-mobile-chat.appspot.com",
    messagingSenderId: "755760327730",
    appId: "1:755760327730:web:a35875d49df2ee83fc602b",
    measurementId: "G-31QH9NTJV8"
  };
  
  export default firebase.initializeApp(firebaseConfig);
 