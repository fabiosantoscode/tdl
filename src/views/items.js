import html from 'choo/html';

import itemView from './item';



export default (state, prev, send) => html`
  <main>
    <h1>title: ${state.title}</h1>
    <h2>${state.clock}</h2>
    <input
      value=${state.title}
      oninput=${ ev => { send('updateTitle', ev.target.value) } }/>

    <h2>tasks:</h2>
    <ul>
      ${ state.items.map( (item, idx) => itemView(item, idx, send) ) }
    </ul>

    <input
      id="newItem"
      placeholder="new item"
      value=""/>
    <button
      onclick=${ _ => { send('addItem', newItem.value); newItem.value = ''; newItem.focus() } }>add task</button>
    <br>

    <button
      onclick=${ _ => send('deleteDoneItems') }>delete done tasks</button>
  </main>
`;
