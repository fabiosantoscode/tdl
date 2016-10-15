import html from 'choo/html';

export default (state, prev, send) => {
  console.log(state);
  const itemIndex = parseInt( state.params.index, 10);
  const item = state.items[itemIndex];
  console.log(itemIndex, item);
  return html `<div>
    <h1>edit item</h1>

    <label>done?</label>
    <input
      type="checkbox"
      onchange=${ _ => send('toggleItemDone', itemIndex) }
      checked=${ item.done } />
    <br>
    
    <label>desc:</label>
    <input id="desc" value=${ item.desc } />
    <button onclick=${ _ => send('updateItemDesc', {itemIndex:itemIndex, desc:desc.value}) }>change label</button>
    <br>

    <button onclick=${ _ => { send('deleteItem', itemIndex); getBack.click() } }>delete label</button>
    <br>

    <a id="getBack" href="/">get back</a>
  </div>
`;
};
