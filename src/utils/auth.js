import { auth } from "./../firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const createUser = async (credentials) => {
  const { email, password } = credentials;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    const { code, message } = error;
    return false;
  }
};

export const loginUser = (credentials) => {
  const { email, password } = credentials;
  try {
    const userLogin = signInWithEmailAndPassword(auth, email, password);
    console.log(userLogin.user);
    return true;
  } catch (error) {
    const { code, message } = error;
    return false;
  }
};
