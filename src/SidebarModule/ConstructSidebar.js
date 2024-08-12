import { CreateDivElement } from "../CommonModules/CreateDivElement";
import { CreateImgElement } from "../CommonModules/CreateImgElement";
import AddIcon from "./plus.svg"
import { StoreToDo } from "../ObjectAccess";
import { ConstructContent } from "../ContentModule/ConstructContent";

const mainFrame = document.querySelector(".mainFrame");
var totalCommitedItems = localStorage.length+1;
export function ConstructSidebar(){
    let headerFrame = CreateDivElement("SidebarFrame", mainFrame);
    const addNoteIcon = CreateImgElement("menuImage", headerFrame, AddIcon);  
}

export function AssignAddNoteEventListeners(){
    const addNoteIcon = document.querySelector(".menuImage");  
    addNoteIcon.addEventListener("click", () => {
        const dialog = document.getElementById("dialogBox");
        console.log (dialog);
        dialog.showModal();
        StoreToDo(totalCommitedItems+1, "Test3", "Test3D", "Test3S");
        totalCommitedItems++
        ConstructContent();
    })

}

