import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import './config'

const auth = getAuth();

export const loginUser = (email, password) => {

  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      return ({ success: true });
      // ...
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // ..
      return ({ success: false, errMsg: error.message });
    });

}