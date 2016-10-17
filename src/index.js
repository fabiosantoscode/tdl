var choo = require('choo');

var model = require('./model');
var itemsView = require('./views/items');
var itemEditView = require('./views/itemEdit');



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

if (typeof window !== 'undefined') {
  app.start('#root');
} else {
  module.exports = app;
}

//window.app = app; console.log(app.toString('/')); // TODO server-side rendering
