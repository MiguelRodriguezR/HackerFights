import app from "firebase/app";
import firebaseConfig from "./config";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

class Firebase {
  constructor() {
    if (!app.apps.length) app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage();
  }

  async register(name, email, password) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );

    await newUser.user.updateProfile({
      displayName: name,
    });

    await newUser.user.sendEmailVerification();

    return newUser.user
  }

  async login(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    console.log("logout");
    await this.auth.signOut();
  }
}

const firebase = new Firebase();
export default firebase;
