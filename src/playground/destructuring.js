/*const person = {
    name : 'Gerasimos',
    age : 22,
    location : {
        city : 'Voula',
        temp: 88
    }
};


const {name : firstName = 'Anonymous', age} = person;
console.log (  firstName  + ' is ' + age) ;

const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log ('Its ' + temperature + ' in ' + city);
}*/

/*const book = {
    title:'ego is the enemy',
    author:'Ryan Holidat',
    publisher:{
      name:'Penguin'
    }

    };

    const {name: publisherName = 'Self-Publisher'} = book.publisher;

    console.log (publisherName);*/

    const address = ['1299 S Juniper Street' , 'Philadelphia', 'Pennsylvania', '19147'];
    const [, city, state = 'New York'] = address;
    console.log('You are in ' + city + ' ' + state);
  
    
    const item = ['coffe (hot)', '2$' ,'3$','4$'];

    const [coffee , small , medium , large] = item;
    console.log('A medium ' + coffee + ' costs ' + medium);

