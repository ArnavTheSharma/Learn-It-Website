import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration (loaded from environment variables)
// See .env.example for required variables. Create a local `.env.local`
// (or set env vars in your hosting provider) and do NOT commit it.
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Debug-time checks to help surface missing/invalid env values during dev
const _apiKey = firebaseConfig.apiKey;
if (!_apiKey) {
  // eslint-disable-next-line no-console
  console.error('Missing REACT_APP_FIREBASE_API_KEY — set it in .env.local and restart the dev server');
} else {
  // eslint-disable-next-line no-console
  console.log(`Firebase API key loaded: ${_apiKey.slice(0, 6)}...${_apiKey.slice(-4)}`);
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
