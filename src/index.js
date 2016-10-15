import choo from 'choo';

import model from './model';
import itemsView from './views/items';
import itemEditView from './views/itemEdit';



const app = choo();



app.use({
  onError(err, state, createSend) {
    console.error(err);
  },
  onStateChange(data, state, prev, caller, createSend) {
    console.log( JSON.stringify(state) );
  }
});

app.model(model);

app.router((route) => [
  route('/', itemsView),
  route('/tasks/:index', itemEditView)
]);

const tree = app.start();
document.body.appendChild(tree);

//window.app = app; console.log(app.toString('/')); // TODO server-side rendering
