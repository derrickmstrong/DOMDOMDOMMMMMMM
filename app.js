// Initialize ID number
let idNum = 1;
// Create Button
const addSquare = document.createElement('button');
addSquare.textContent = 'Add Square';
document.body.appendChild(addSquare);
// Create Container Div
const divContainer = document.createElement('div');
divContainer.classList.add('container');
document.body.appendChild(divContainer);
// Add Elements to Container on Click
addSquare.addEventListener('click', function () {
  const div = document.createElement('div');
  div.className = 'box';
  div.setAttribute('id', idNum);
  idNum++;
  divContainer.appendChild(div);
  // EventListeners
  div.addEventListener('click', randomColor);
  div.addEventListener('mouseover', showId);
  div.addEventListener('mouseout', hideId);
  div.addEventListener('dblclick', removeDiv);
  // Function Declarations
  function randomColor(e) {
    const colors = [
      'blue',
      'red',
      'brown',
      'green',
      'purple',
      'orange',
      'pink',
    ];
    const int = Math.floor(Math.random() * Math.floor(colors.length));
    e.target.style.backgroundColor = colors[int];
    e.target.style.color = 'white';
  }
  function showId(e) {
    e.target.textContent = div.id;
  }
  function hideId(e) {
    e.target.textContent = '';
  }
  function removeDiv(e) {
    if (div.id % 2 === 0) {
      if (div.nextElementSibling) {
        e.target.nextElementSibling.remove();
      } else {
        alert('No Next Sibling!');
      }
    } else {
      if (div.previousElementSibling) {
        e.target.previousElementSibling.remove();
      } else {
        alert('No Previous Sibling!');
      }
    }
  }
});
