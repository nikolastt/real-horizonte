import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB3WvPXpDWksA4WWUytDvTW3aUc1asOXvs",
  authDomain: "real-horiz.firebaseapp.com",
  projectId: "real-horiz",
  storageBucket: "real-horiz.appspot.com",
  messagingSenderId: "1002183738031",
  appId: "1:1002183738031:web:ceddb7e452f716f6488a5a",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
