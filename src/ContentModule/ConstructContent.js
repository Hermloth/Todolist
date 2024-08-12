import { CreateDivElement } from "../CommonModules/CreateDivElement";
import { CreateCard } from "../CreateCard/CreateCard";
import { ToDo } from "../ToDo";

const mainFrame = document.querySelector(".mainFrame");
const ContentFrame = CreateDivElement("ContentFrame", mainFrame);

var CardDataArray = [];

export function ConstructContent(){
    ContentFrame.replaceChildren();
    localStorage.removeItem("debug");
    var localStorageSize = localStorage.length;

    for (let data = 0; data < localStorageSize; data++){    
        let objectParse = JSON.parse(localStorage.getItem(localStorage.key(data)));
        CardDataArray.push(new ToDo(objectParse.title, objectParse.description, objectParse.status))
        CreateCard(CardDataArray[data], ContentFrame);
    }
}
