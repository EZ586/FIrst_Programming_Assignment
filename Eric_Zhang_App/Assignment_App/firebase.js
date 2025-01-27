import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDcjshsh84aaf_9MQEIktlfhhLyRSUIE5M",
    authDomain: "application-database-8a168.firebaseapp.com",
    projectId: "application-database-8a168",
    storageBucket: "application-database-8a168.firebasestorage.app",
    messagingSenderId: "853949365453",
    appId: "1:853949365453:web:a01e4d3b8a452340627d84",
    measurementId: "G-8YJ7SE3WND"
  };

  const app = initializeApp(firebaseConfig);

  const db = getDatabase();

  export { db }