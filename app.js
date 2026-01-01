// ****** SELECT ITEMS **********

const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option

let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
form.addEventListener("submit", addItem);

clearBtn.addEventListener("click", clearItems);

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  console.log(id);
  if (value && !editFlag) {
    //create element
    const element = document.createElement("article");
    //add class
    element.classList.add("grocery-item");
    //add id -> unique identifier
    const attr = document.createAttribute("data-id");
    attr.value = id;
    //set
    element.setAttributeNode(attr);
    //set inner html
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>`;

    //append element to list container
    list.appendChild(element);
    //update alert //
    displayAlert("Item added to the list successfully", "success");

    //unhide the list container
    container.classList.add("show-container");
    //add to local storage
    addToLocalStorage(id, value);
    //set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    console.log("editing");
  } else {
    displayAlert("Please Enter Value", "danger");
  }
}

//clear items

function clearItems() {
  const items = document.querySelectorAll(".grocery-item");

  if (items.length > 0) {
    items.forEach((item) => list.removeChild(item));
  }
  container.classList.remove("show-container");
  displayAlert("Empty List", "danger");
  setBackToDefault();
  //   localStorage.removeItem("list");
}

//display storage

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 3000);
}

// ****** LOCAL STORAGE **********
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editId = "";
  submitBtn.textContent = "Submit";
}

function addToLocalStorage(id, value) {
  console.log("add to local storage");
}

// ****** SETUP ITEMS **********
