import choo from 'choo';

import model from './model';
import mainView from './views/main';
import itemEditView from './views/itemEdit';



const app = choo();



app.use({
  onStateChange(data, state, prev, caller, createSend) {
    console.log( JSON.stringify(state) );
  }
});

app.model(model);

app.router((route) => [
  route('/', mainView),
  route('/tasks/:index', itemEditView)
]);

const tree = app.start();
document.body.appendChild(tree);




/*
import Kinto from 'kinto';



const db = new Kinto({
  remote: 'https://kinto.dev.mozaws.net/v1',
  // bucket: 'josepedrodias',
  headers: {
    Authorization: 'Basic bWF0Og=='
  }
});

const tasks = db.collection('tasks');

tasks
  .create({label: 'item ' + ~~(Math.random() * 1000), done: false})
  .then(_ => tasks.sync())
  .catch(ex => console.error(ex));

// console.log(tasks.list());
// window.db = db;
window.tasks = tasks;

console.log('xxx');
*/
