export function CreateImgElement (inputClass, inputElement, inputImage){
    var newImage = document.createElement("img");
    newImage.classList.add(inputClass);
    newImage.src = inputImage;
    inputElement.appendChild(newImage);
    }