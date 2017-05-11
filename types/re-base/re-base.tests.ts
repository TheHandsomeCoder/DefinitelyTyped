/// <reference path="re-base.d.ts" />

import Rebase from 're-base';

var base = Rebase.createClass({
      apiKey: "apiKey",
      authDomain: "projectId.firebaseapp.com",
      databaseURL: "https://databaseName.firebaseio.com",
});

base = Rebase.createClass({
      apiKey: "apiKey",
      authDomain: "projectId.firebaseapp.com",
      databaseURL: "https://databaseName.firebaseio.com",
      storageBucket: "bucket.appspot.com",
      messagingSenderId: "xxxxxxxxxxxxxx"
});

base = Rebase.createClass({
      apiKey: "apiKey",
      authDomain: "projectId.firebaseapp.com",
      databaseURL: "https://databaseName.firebaseio.com",
      storageBucket: "bucket.appspot.com",
      messagingSenderId: "xxxxxxxxxxxxxx"
}, 'myApp');

base.delete();
base.delete(() => { /* app has been deleted */ });

let ref = base.syncState(`shoppingList`, {
      context: this,
      state: 'items',
      asArray: true,
      then: () => { }
});
base.removeBinding(ref)

ref = base.bindToState('tasks', {
      context: this,
      state: 'tasks',
      asArray: true
});
base.removeBinding(ref)

ref = base.listenTo('votes', {
      context: this,
      asArray: true,
      then: (votesData) => {
            var total = 0;
            votesData.forEach((vote, index) => {
                  total += vote
            });
      },
      onFailure: () => { }
})
base.removeBinding(ref)

base.fetch('sales', {
      context: this,
      asArray: true,
      then: (data) => {
            console.log(data);
      }
})

base.fetch('sales', { context: this, asArray: true })
      .then(data => { console.log(data) })
      .catch(error => { /** handle error*/ })

base.post(`users/123`, { data: { name: 'Tyler McGinnis', age: 25 } })
      .then(() => { })
      .catch(err => { });


var immediatelyAvailableReference = base.push('bears', {
      data: { name: 'George', type: 'Grizzly' },
      then(err) {
            console.log(err);
      }
});
//available immediately, you don't have to wait for the callback to be called
var generatedKey = immediatelyAvailableReference.key;

immediatelyAvailableReference = base.push('bears', {
      data: { name: 'George', type: 'Grizzly' }
}).then(newLocation => {
      var generatedKey = newLocation.key;
}).catch(err => {
      //handle error
});
//available immediately, you don't have to wait for the Promise to resolve
var generatedKey = immediatelyAvailableReference.key;


base.update('bears', {
      data: { name: 'George' },
      then(err) {
            if (!err) {
                  //bears endpint is now {name: 'George', type: 'Grizzly'}
            }
      }
});

// bears endpoint currently holds the object { name: 'Bill', type: 'Grizzly' }
base.update('bears', {
      data: { name: 'George' }
}).then(() => {

}).catch(err => {
      //handle error
});


base.remove('bears', function (err) {
      if (!err) {}
});

base.remove('bears')
.then(() => {})
.catch(error => {});

base.syncState('users', {
  context: this,
  state: 'users',
  asArray: true,
  queries: {
    orderByChild: 'iq',
    limitToLast: 3,
    endAt: ''
  }
})

var authHandler = function(error, user) {
  if(user){
      console.log(user);
  }
}

// Simple email/password authentication
base.authWithPassword({
  email    : 'bobtony@firebase.com',
  password : 'correcthorsebatterystaple'
}, authHandler);