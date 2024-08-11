import { CreateDivElement } from "../CommonModules/CreateDivElement";
import { CreateImgElement } from "../CommonModules/CreateImgElement";
import { DeleteToDo } from "../ObjectAccess";
import deleteButtonIMG from "./deleteButton.svg"

const SampleText = `Lorum Ipsum`;

export function CreateCard (inputObject, parentFrame) {
    var cardFrame = CreateDivElement("ToDoCard", parentFrame);

    var CardTitleRow = CreateDivElement("CardTitleRow", cardFrame);
    var CardTitleHeading = CreateDivElement("CardHeading", CardTitleRow);
    CardTitleHeading.textContent = "Title: "
    var CardTitleText = CreateDivElement("CardTitleText", CardTitleRow); 
    CardTitleText.textContent = inputObject.getTitle();


    var CardDescriptionRow = CreateDivElement("CardDescriptionRow", cardFrame);
    var CardDescriptionHeading = CreateDivElement("CardDescHeading", CardDescriptionRow);
    CardDescriptionHeading.textContent = "Description: "
    var CardDescriptionText = CreateDivElement("CardDescText", CardDescriptionRow); 
    CardDescriptionText.textContent = inputObject.getDescription(); 
    

    var CardStatusRow = CreateDivElement("CardStatusRow", cardFrame);
    var CardStatusHeading = CreateDivElement("CardStatusHeading", CardStatusRow);
    CardStatusHeading.textContent = inputObject.getStatus();
    let cards = document.querySelectorAll(".ToDoCard");

    var deleteButton = document.createElement("img");
    deleteButton.src = deleteButtonIMG;
    deleteButton.className = "deleteButton";
    CardStatusRow.appendChild(deleteButton);

    deleteButton.addEventListener("click", function() {
        // need to work out which button was click and remove the corresponding Local Storage and Array element
        cardFrame.remove(); 
    });
    return cardFrame;
}