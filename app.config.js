import 'dotenv/config';

export default{
  "expo": {
    "name": "firebasePracticeApp",
    "slug": "firebasePracticeApp",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    extra:{
      apiKey: "AIzaSyDFAgp5pQpD2RUUHYuadQfr33z01VN-L6I",
      authDomain: "chatapp-4b37e.firebaseapp.com",
      projectId: "chatapp-4b37e",
      storageBucket: "chatapp-4b37e.appspot.com",
      messagingSenderId: "981379444513",
      appId: "1:981379444513:web:76f304064ba88df2de1860",
      measurementId: "G-1ST8947R91"
    }
  }
}
