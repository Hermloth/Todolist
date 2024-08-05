import { CreateDivElement } from "../CommonModules/CreateDivElement";
import { CreateImgElement } from "../CommonModules/CreateImgElement";

const mainFrame = document.querySelector(".mainFrame");

export function ConstructFooter(){
    var headerFrame = CreateDivElement("FooterFrame", mainFrame);
    headerFrame.textContent = "This is a Test Website created for the odin project and is not a real service page. Author: Matt A";
}