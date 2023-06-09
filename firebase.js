import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-lat.firebaseapp.com",
  projectId: "twitter-lat",
  storageBucket: "twitter-lat.appspot.com",
  messagingSenderId: "200252634847",
  appId: "1:200252634847:web:cf0b2d8ea240e3dc3a1b6a",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
