//1

document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.textContent = 'Show Details';
    document.body.appendChild(button);

    const detailsDiv = document.createElement('div');
    document.body.appendChild(detailsDiv);

    button.addEventListener('click', () => {
        const name = 'Jesna Joseph';
        const age = '22';
        const city = 'Calicut';

        detailsDiv.innerHTML = `
        <p>Name: ${name}</p>
        <p>Age: ${age}</p>
        <p>City: ${city}</p>
      `;
    });
});

//2

document.addEventListener('DOMContentLoaded', () => {
    const fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];
    const checkboxesDiv = document.createElement('div');
    document.body.appendChild(checkboxesDiv);

    const checkedFruitsDiv = document.createElement('div');
    document.body.appendChild(checkedFruitsDiv);


    fruits.forEach(fruit => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = fruit;
        checkbox.name = fruit;

        const label = document.createElement('label');
        label.htmlFor = fruit;
        label.textContent = fruit;

        checkboxesDiv.appendChild(checkbox);
        checkboxesDiv.appendChild(label);
        checkboxesDiv.appendChild(document.createElement('br')); // Add a line break

        checkbox.addEventListener('change', () => {
            const checkedFruits = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
                .map(cb => cb.name);
            checkedFruitsDiv.textContent = `Checked Fruits: ${checkedFruits.join(', ')}`;
        });
    });
});

//3

const myButton = document.getElementById("myButton");
let toggleState = false;

myButton.addEventListener("click", () => {
    toggleState = !toggleState;
    if (toggleState) {
        myButton.textContent = "On";
    } else {
        myButton.textContent = "Off";
    }

    console.log(toggleState);
});

//4

var i=0;
var images =[];
var time=3000;

images[0]='images\aston-martin.jpg';
images[1]='images\maserati-mc20.jpg';
images[2]='images\nio-et5.jpg';

function changeImg(){
    document.hasChildNodes.src=images[i];
    if(i<images.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("changeImg()",time)
}
window.onload=changeImg;