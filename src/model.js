module.exports = {
  state: {
    title: 'untitled',
    clock: new Date(),
    items: [
      { desc:'task 1', done:false },
      { desc:'task 2', done:true }
    ]
  },
  reducers: {
    updateTitle(title, state) {
      return Object.assign({}, state, { title });
    },
    updateClock(clock, state) {
      return Object.assign({}, state, { clock });
    },
    addItem(itemDesc, state) {
      const items = state.items.concat([{desc:itemDesc, done:false}]);
      return Object.assign({}, state, { items });
    },
    deleteItem(itemIndex, state) {
      const items = state.items.filter((item, idx) => {
        return itemIndex !== idx;
      });
      return Object.assign({}, state, { items });
    },
    deleteDoneItems(_, state) {
      const items = state.items.filter(item => !item.done);
      return Object.assign({}, state, { items });
    },
    toggleItemDone(itemIndex, state) {
      const items = state.items.map((item, idx) => {
        return (idx === itemIndex) ? Object.assign({}, item, { done:!item.done }) : item;
      });
      return Object.assign({}, state, { items });
    },
    updateItemDesc(o, state) {
      const items = state.items.map((item, idx) => {
        return (idx === o.itemIndex) ? Object.assign({}, item, { desc:o.desc }) : item;
      });
      return Object.assign({}, state, { items });
    },
    effects: {
      fetch: (data, state, send, done) => {
        // TODO not done yet
      }
    },
    subscriptions: [ // TODO not working
      (send, done) => {
        console.log('1...');
        setInterval(_ => {
          console.log('2...');
          send('updateClock', new Date());
          done();
        }, 1000);
      }
    ]
  }
};
