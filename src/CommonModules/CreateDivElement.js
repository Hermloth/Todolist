export function CreateDivElement(inputClass, inputElement){
    var newElement = document.createElement("div");
    newElement.classList.add(inputClass);
    inputElement.appendChild(newElement);
    return newElement;
    }