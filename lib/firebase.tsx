import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIH-229U5ZmDlj1PY65eBDHqdwxmZxH2c",
  authDomain: "auth-for-test-aac01.firebaseapp.com",
  projectId: "auth-for-test-aac01",
  storageBucket: "auth-for-test-aac01.appspot.com",
  messagingSenderId: "629849031736",
  appId: "1:629849031736:web:4af4a09bf94b5d3a90d2cd",
  measurementId: "G-310LTBJWJ4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
