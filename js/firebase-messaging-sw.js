importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');
var config = {
    	apiKey: "AIzaSyDs0UbvgrHiIC7jZlFAKj_MUwX6npSfPLI",
    	authDomain: "prueba1-d3758.firebaseapp.com",
	    databaseURL: "https://prueba1-d3758.firebaseio.com",
	    projectId: "prueba1-d3758",
	    storageBucket: "prueba1-d3758.appspot.com",
	    messagingSenderId: "97813553985"
	};
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
 	const title = 'Hello World';
 	const options = {
  		body: payload.data.body
 	};
 return self.registration.showNotification(title, options);
});