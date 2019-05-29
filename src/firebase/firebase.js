import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyA42rgl5l5_0_DDlJGW2_7JowqrKmd5Z4o",
  authDomain: "car-makes.firebaseapp.com",
  databaseURL: "https://car-makes.firebaseio.com",
  projectId: "car-makes",
  storageBucket: "car-makes.appspot.com",
  messagingSenderId: "246862677664"
};

const devConfig = {
  apiKey: "AIzaSyA42rgl5l5_0_DDlJGW2_7JowqrKmd5Z4o",
  authDomain: "car-makes.firebaseapp.com",
  databaseURL: "https://car-makes.firebaseio.com",
  projectId: "car-makes",
  storageBucket: "car-makes.appspot.com",
  messagingSenderId: "246862677664"
};

//
//firebase.initializeApp(config);
//

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth
};
