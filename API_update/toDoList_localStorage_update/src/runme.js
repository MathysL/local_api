// JavaScript source code logica na getme.js
const button = document.getElementById("btn");
const taskList = document.getElementById("todo-list");
const inputField = document.getElementById("inputfield");
//const todo_list = document.getElementById("todo-list");
//const item = document.getElementById("text");

//Show items in DOM
async function displayItems() {
    const data = await getData();
    taskList.innerHTML = ""; // maakt de lijst tasklist leeg 
    console.log(data);

    data.forEach(element => {
        const listItem = document.createElement("li");
        const span = document.createElement("span");
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";

        listItem.appendChild(checkBox);
        listItem.appendChild(span);

        const description = element.description;
        const done = element.done;
        const id = element._id;

        let newDoneValue;
        if (done === true) {
            newDoneValue = false;
            checkBox.checked = true;
        } else {
            checkBox.checked = false;
            newDoneValue = true;
        };

        checkBox.addEventListener('click', function () { changeToDoItem(id, description, newDoneValue) });

        const trashCan = document.createElement("i");
        trashCan.classList.add("fas");
        trashCan.classList.add("fa-trash");
        listItem.appendChild(trashCan);

        trashCan.addEventListener('click', function () { deleteToDoItem(id) });

        span.innerText = description;
        taskList.appendChild(listItem);
    });
};
displayItems();

//Functie creer to do item
function createToDoItem() {
    const text = inputField.value;
    postData(text);
    inputField.value = " ";
    displayItems();
};

button.addEventListener('click', createToDoItem);

//Delete to do item
function deleteToDoItem(id) {
    console.log(id);
    deleteData(id);
    displayItems();
};

// PUT functie
function changeToDoItem(id, description, done) {
    putData(id, description, done);

    displayItems();
};
