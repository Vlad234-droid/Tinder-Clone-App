import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBh_3m9ydSq78slM0Zjm2udJ-c8bH-Y7HQ',
	authDomain: 'tinder-clone-841fe.firebaseapp.com',
	projectId: 'tinder-clone-841fe',
	storageBucket: 'tinder-clone-841fe.appspot.com',
	messagingSenderId: '711055964948',
	appId: '1:711055964948:web:bc19d8d0e1ad0d260be001',
	measurementId: 'G-S3GWCWER2F',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
