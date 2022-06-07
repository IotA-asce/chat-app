import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwSQFBej5Efu16AsRQvORFAhSCMDxTC14",
  authDomain: "comms-on.firebaseapp.com",
  projectId: "comms-on",
  storageBucket: "comms-on.appspot.com",
  messagingSenderId: "606864274858",
  appId: "1:606864274858:web:01b695c4f9c96f1a9627d3",
  measurementId: "G-ZV6GR135XR"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export {
  auth
};