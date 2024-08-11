import { CreateDivElement } from "../CommonModules/CreateDivElement";
import { CreateImgElement } from "../CommonModules/CreateImgElement";
import { CreateCard } from "../CreateCard/CreateCard";
import { RetreiveToDo } from "../ObjectAccess";
import { ToDo } from "../ToDo";

const mainFrame = document.querySelector(".mainFrame");
const ContentFrame = CreateDivElement("ContentFrame", mainFrame);

var CardDataArray = [];

export function ConstructContent(){
    ContentFrame.replaceChildren();

    localStorage.removeItem("debug");
    console.log(localStorage);

    var localStorageSize = localStorage.length;


    for (let data = 0; data < localStorageSize; data++){    
        let objectParse = JSON.parse(localStorage.getItem(localStorage.key(data)));
        console.log(objectParse);
        CardDataArray.push(new ToDo(objectParse.title, objectParse.description, objectParse.status))
        CreateCard(CardDataArray[data], ContentFrame);
    }




}
