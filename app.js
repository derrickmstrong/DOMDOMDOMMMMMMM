let num = 1;

const addSquare = document.createElement('button');
addSquare.textContent = 'Add Square';
document.body.appendChild(addSquare);

addSquare.addEventListener('click', function () {
  const div = document.createElement('div');
  div.className = 'box';
  div.setAttribute('id', num);
  num++;
  document.body.appendChild(div);

  div.addEventListener('click', randomColor);

  div.addEventListener('mouseover', function () {
    div.textContent = div.id;
  });

  div.addEventListener('mouseout', function () {
    div.textContent = '';
  });

  div.addEventListener('dblclick', removeSquare);

  // Function Declarations
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
        if (div.previousElementSibling === addSquare) {
          alert('No Previous Sibling!');
        }
      }
    }
  }
});
