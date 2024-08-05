import { CreateDivElement } from "../CommonModules/CreateDivElement";
import { CreateImgElement } from "../CommonModules/CreateImgElement";
import AddIcon from "./plus.svg"
const mainFrame = document.querySelector(".mainFrame");

export function ConstructSidebar(){
    var headerFrame = CreateDivElement("SidebarFrame", mainFrame);
    var addNoteIcon = CreateImgElement("menuImage", headerFrame, AddIcon);
}

