import { getApps, getApp, initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  getDocs,
  deleteDoc,
  query,
  where,
  initializeFirestore,
} from "firebase/firestore";
import { 
  getAuth, signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  initializeAuth,
} from 'firebase/auth';
// import _ from "lodash";
// import products from "../json/product.json";

const firebaseConfig = {
    apikey:import.meta.env.VITE_FIREBASE_API_KEY ,
    authDomain:import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ,
    projectId:import.meta.env.VITE_FIREBASE_PROJECTID ,
    storageBucet:import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ,
    messagingSenderId:import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ,
    appId:import.meta.env.VITE_FIREBASE_APPID ,
    mesasurementId:import.meta.env.VITE_FIREBASE_MEASUREMENTID ,

  };

const app_length = getApps().length > 0;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = getFirestore(app);

// REFERENCE AUTH
const auth = app_length ? getAuth(app) : initializeAuth(app);

// REFERENCE COLLECTION
const ProductsCollection = collection(db, "product"); 

export const feedProducts = async () => {
  // DELETE ALL EXISTING DOCS
  const querySnapshot = await getDocs(ProductsCollection);
  querySnapshot.forEach(async (product) => {
    await deleteDoc(doc(db, "product", product.id));
  });
  // ADD NEW DOCS
  products.forEach(async (product) => {
    const docRef = await doc(ProductsCollection);
    await setDoc(docRef, { ...product, id: docRef.id });
  });
};

export const getProducts = async () => {
    const querySnapshot = await getDocs(ProductsCollection);
    // Convert query to a json array.
    let result = [];
    querySnapshot.forEach(async (product) => {
       await result.push(product.data());
    });
    console.log({ result });
    return result
 };

 export const getUserInfo = async () => {
  const storedUser = localStorage.getItem("user");
  const user = auth?.currentUser || JSON.parse(storedUser) || null;

  if(user) {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    const userDoc = docSnap.data();
    return {
      uid: user.uid,
      email: user.email,
      ...userDoc,
    };    
  } else {
    return {}
  }
}

export const login = async ({ email, password }) => {
  await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = auth.currentUser;
  localStorage.setItem("user", JSON.stringify(user));
};

export const register = async ({ name, email, password }) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential?.user;
  localStorage.setItem("user", JSON.stringify(user));
  const docRef = doc(db, "users", user.uid);
  await setDoc(docRef, {
    name,
  });
};

export const updateUserInfo = async ({ name, adrs, tel, uid }) => {
  const docRef = doc(db, "users", uid);
  await updateDoc(docRef, {
    name,
    adrs,
    tel,
  });
  const user = auth.currentUser;
  localStorage.setItem("user", JSON.stringify(user));
}


export const logout = async () => {
  await auth.signOut();
  localStorage.removeItem("user");
}

