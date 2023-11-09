import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyAMnAvrl_1dlvQ7olNlIP3NmIa84ie6HBg',
  authDomain: 'movix-single-page-application.firebaseapp.com',
  projectId: 'movix-single-page-application',
  storageBucket: 'movix-single-page-application.appspot.com',
  messagingSenderId: '36062149494',
  appId: '1:36062149494:web:75ca74989b6fcf45111857',
  measurementId: 'G-TBZDWRK5DB'
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const auth = getAuth(app)
