import './style.css';
import { ConstructHeader } from "./HeaderModule/ConstructHeader";
import { ConstructContent } from './ContentModule/ConstructContent';
import { ConstructFooter } from './FooterModule/ConstructFooter';
import { AssignAddNoteEventListeners, ConstructSidebar } from './SidebarModule/ConstructSidebar';
import { ToDo } from './ToDo';
import { StoreToDo } from './ObjectAccess';
import { CreateCardDialouge } from './CreateCardDialouge';


//localStorage.clear();

function TempButtonFunction(){
    StoreToDo(totalCommitedItems, "Test3", "Test3D", "Test3S");
    totalCommitedItems++;
}

var totalCommitedItems = localStorage.length+1;
//TempButtonFunction();
//localStorage.removeItem("Test3");
console.log(totalCommitedItems);




//let testObject = new ToDo("Test3", "Test3D", "Test3S");
//console.log(testObject);
//localStorage.setItem("1", JSON.stringify(testObject))

//console.log("test Storage Item " + localStorage.getItem("1"))

//var testRetreivedOnject = JSON.parse(localStorage.getItem("1"))
//console.log(testRetreivedOnject);


//let listItemIncrement = localStorage.length-1;
//console.log(listItemIncrement + " TEST --- Items in storage.");

//localStorage.setItem("1", new ToDo("Test Object Title", "Test Object Description", "Test Status"))
ConstructHeader();
ConstructSidebar();
const frame = document.querySelector(".SidebarFrame")
CreateCardDialouge(frame);
AssignAddNoteEventListeners();
ConstructContent();
ConstructFooter();

