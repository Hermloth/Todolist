import { StoreToDo } from "./ObjectAccess";
export function CreateCardDialouge(inputElement){
var DialogContainer = document.createElement("dialog");
DialogContainer.id = "dialogBox"
inputElement.appendChild(DialogContainer);

var form = document.createElement("form");
form.action = ""
DialogContainer.appendChild(form);

var fieldset1 = document.createElement("fieldset");
fieldset1.classList.add("fieldset");
fieldset1.id = "fieldset1"
form.appendChild(fieldset1);

var label1 = document.createElement("label");
label1.setAttribute("for", "title");
label1.textContent = "Title:"
fieldset1.appendChild(label1)
var label1field = document.createElement("input");
label1field.setAttribute("type", "text");
label1field.required;
label1field.id = "title";
fieldset1.appendChild(label1field);

var fieldset2 = document.createElement("fieldset");
fieldset2.classList.add("fieldset");
fieldset2.id = "fieldset2"
form.appendChild(fieldset2);

var label2 = document.createElement("label");
label2.setAttribute("for", "description");
label2.textContent = "Description:"
fieldset2.appendChild(label2)
var label2field = document.createElement("input");
label2field.setAttribute("type", "text");
label2field.required;
label2field.id = "description";
fieldset2.appendChild(label2field);

var fieldset3 = document.createElement("fieldset");
fieldset3.classList.add("fieldset");
form.appendChild(fieldset3);

var label3 = document.createElement("label");
label3.setAttribute("for", "status");
label3.textContent = "Sattus:"
fieldset3.appendChild(label3)
var label3field = document.createElement("select");
label3field.id = "status";
fieldset3.appendChild(label3field);

var option1 = document.createElement("option");
option1.value = "No Status";
option1.textContent = "No Status";
label3field.appendChild(option1);

var option2 = document.createElement("option");
option2.value = "In Progress";
option2.textContent = "In Progress";
label3field.appendChild(option2);

var option3 = document.createElement("option");
option3.value = "Done";
option3.textContent = "Done";
label3field.appendChild(option3);

var submitButton = document.createElement("button");
submitButton.textContent = "Submit";
submitButton.id = "submitButton";
submitButton.type = "submit";
form.appendChild(submitButton);
submitButton.addEventListener("click", ()=> {
    StoreToDo( Date.now(), label1field.value, label2field.value, label3field.value);
})

}