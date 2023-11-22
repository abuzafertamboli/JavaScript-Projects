const insert = document.querySelector('#insert');

window.addEventListener('keydown', (event) => {
    insert.innerHTML = 
    `<div>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${event.key === ' ' ? "Space" : event.key}</td>
      <td>${event.keyCode}</td>
      <td>${event.code}</td>
    </tr>
    </table>
    </div>`;
});