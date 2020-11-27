import firebase from 'firebase/app'
import 'firebase/firestore'
 
// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyDvHr97nG9IwQjh7e_2daiWkZFOqQ1FpGY",
authDomain: "enginaar-todo.firebaseapp.com",
databaseURL: "https://enginaar-todo.firebaseio.com",
projectId: "enginaar-todo",
storageBucket: "enginaar-todo.appspot.com",
messagingSenderId: "619116291070",
appId: "1:619116291070:web:bb708069adac35e23a16af",
measurementId: "G-DPM4NGZWJB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig); 

const db = firebase.firestore();
db.settings({timestampsInSnapshots: true});
export default db;