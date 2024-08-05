import { CreateDivElement } from "../CommonModules/CreateDivElement";
import { CreateImgElement } from "../CommonModules/CreateImgElement";

const mainFrame = document.querySelector(".mainFrame");

export function ConstructHeader(){
    var headerFrame = CreateDivElement("HeaderFrame", mainFrame);
    headerFrame.textContent = "To Do List";
}