import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyCj4OkUcJ-rHVWcOWpLtQ054zvlgG0CPwI',
    authDomain: 'react-51aeb.firebaseapp.com',
    projectId: 'react-51aeb',
    storageBucket: 'react-51aeb.appspot.com',
    messagingSenderId: '74273115057',
    appId: '1:74273115057:web:dc9c9121516133e6bc4b90',
    measurementId: 'G-LJSK5PTH1M'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }