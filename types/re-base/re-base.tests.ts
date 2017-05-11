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
      });},
    onFailure: () => {}
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