import { initializeApp } from "firebase/app";

import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD8bDQOgcR3TBWpnIn9ldr7ijT8HHkvp9k",
  authDomain: "crud-firebase-web1.firebaseapp.com",
  projectId: "crud-firebase-web1",
  storageBucket: "crud-firebase-web1.appspot.com",
  messagingSenderId: "433281472162",
  appId: "1:433281472162:web:4192ec423459988180e9fb"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)