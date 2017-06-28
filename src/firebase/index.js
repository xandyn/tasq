import RNFirebase from 'react-native-firebase';


const config = {
  apiKey: 'AIzaSyCYnC8HZLc1d3RJi9LQZ-nyPPDeQLy3ue8',
  authDomain: 'tasq-fea46.firebaseapp.com',
  databaseURL: 'https://tasq-fea46.firebaseio.com',
  projectId: 'tasq-fea46',
  storageBucket: 'tasq-fea46.appspot.com',
  messagingSenderId: '686213809052'
};

const firebase = RNFirebase.initializeApp(config);


export default firebase;
