import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY, 
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: "https://expensify-test-3da26.firebaseio.com",
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);


  const database = firebase.database();

  export { firebase, database as default};










  //remove

//database.ref('expenses').on('child_removed', (snapshot) => {
 //   console.log(snapshot.key, snapshot.val());
////});


//change

//database.ref('expenses').on('child_changed',(snapshot) => {
////   console.log(snapshot.key,snapshot.val());
//});

//add
//database.ref('expenses').on('child_added',(snapshot) => {
   // console.log(snapshot.key,snapshot.val());
//});



 /* database.ref('expenses').on('value', (snapshot) => {
    const expenses= [];

    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
 
  }); */



 /* database.ref('expenses')
  .once('value')
  .then((snapshot) => {
    const expenses= [];

    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
  });*/

  //database.ref('expenses').push({
   //description: 'Rent',
   //note: '',
   //amount: 109500,
  // createdAt: 115415151555
  //});



  //database.ref('notes/-LaPpdyQGI-obafNaW8r').update({
   //   body: 'Buy Food'
 // });

 // database.ref('notes').push({
  //    title: 'Course topics',
    //  body: 'react native angular puthon'
 // });



/*database.ref('location/city')
.once('value')
.then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
})
.catch((e) => {
    console.log('Error feching data',e);
});*/


  /* database.ref().set({
       name: 'Jerry LvDs',
       age: 22,
       stresslevel: 6,
       job: {
           title: 'Engineer',
           company: 'Marine Traffic'
       },
       location: {
           city: 'Voula',
           country: 'Greece'
       }
   }).then (() => {
       console.log('Data is saved'); 
   }).catch((e) => {
       console.log('This failed', e);
   });
   
   database.ref().update({
      stresslevel : 9,
      'job/company': 'Amazon',
      'location/city' : 'New York'

   });*/




  /*database.ref('isSingle')
  .remove()
  .then(() => {
      console.log('data was removed');
  }).catch((e) => {
      console.log('did not remove data',e);
  });*/