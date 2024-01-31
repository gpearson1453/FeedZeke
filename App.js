import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, child, get } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA19duqSm-4Qq9LE_4Q0gcxMGGPoYDc-Yc",
  authDomain: "feedzeke.firebaseapp.com",
  projectId: "feedzeke",
  storageBucket: "feedzeke.appspot.com",
  messagingSenderId: "212909936279",
  appId: "1:212909936279:web:2137f91cf59151d40aa3d2",
  measurementId: "G-W4W3DNJ1WP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

const PlaceholderImage = require("./assets/images/turtle.jpg");

/*const dbRef = ref(getDatabase());
get(child(dbRef, `users/${userId}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});*/

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="unchecked" label="Give Zeke some food" />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="unchecked" label="Give Zeke some water" />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="unchecked" label="Give Zeke a bath" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cee9d7',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 320,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});