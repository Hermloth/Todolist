import { CreateDivElement } from "../CommonModules/CreateDivElement";

const mainFrame = document.querySelector(".mainFrame");

export function ConstructHeader(){
    var headerFrame = CreateDivElement("HeaderFrame", mainFrame);
    headerFrame.textContent = "To Do List";
}