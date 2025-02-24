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

