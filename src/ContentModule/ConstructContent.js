import { CreateDivElement } from "../CommonModules/CreateDivElement";
import { CreateImgElement } from "../CommonModules/CreateImgElement";

const mainFrame = document.querySelector(".mainFrame");

export function ConstructContent(){
    var headerFrame = CreateDivElement("ContentFrame", mainFrame);
    headerFrame.textContent = "Content Test";
}