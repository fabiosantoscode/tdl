var html = require('choo/html')

module.exports = (item, itemIndex, send) => html `
  <li
    class="${ item.done ? 'done' : '' }">
    <input
      type="checkbox"
      onchange=${ _ => send('toggleItemDone', itemIndex) }
      checked=${ item.done } />
    ${ item.desc }
    <a href="/tasks/${ itemIndex }">edit</a>
  </li>
`;
