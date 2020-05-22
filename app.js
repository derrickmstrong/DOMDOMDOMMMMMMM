let num = 1;

const addSquare = document.createElement('button');
addSquare.textContent = 'Add Square';
document.body.appendChild(addSquare);

const divContainer = document.createElement('div')
divContainer.classList.add('container');
document.body.appendChild(divContainer)

addSquare.addEventListener('click', function () {
  const div = document.createElement('div');
  div.className = 'box';
  div.setAttribute('id', num);
  num++;
divContainer.appendChild(div);

  div.addEventListener('click', randomColor);

  div.addEventListener('mouseover', onMouseOver);

  div.addEventListener('mouseout', onMouseOut);

  div.addEventListener('dblclick', removeSquare);

  // Function Declarations
  function onMouseOver() {
    div.textContent = div.id;
  }
  function onMouseOut() {
    div.textContent = '';
  }
  function randomColor() {
    const colors = [
      'blue',
      'red',
      'brown',
      'yellow',
      'green',
      'purple',
      'orange',
      'black',
    ];
    const int = Math.floor(Math.random() * Math.floor(colors.length));
    div.style.backgroundColor = colors[int];
    div.style.color = 'white';
  }

  function removeSquare() {
    if (div.id % 2 === 0) {
      console.log('Even');
      if (div.nextElementSibling) {
        div.nextElementSibling.remove();
      } else {
        alert('No Next Sibling!');
      }
    } else {
      console.log('Odd');
      if (div.previousElementSibling) {
        div.previousElementSibling.remove();
      } else {
          alert('No Previous Sibling!');
      }
    }
  }
});
