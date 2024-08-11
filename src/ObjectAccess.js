import { ToDo } from "./ToDo";

export function RetreiveToDo(index){
    var retreivalObject = JSON.parse(localStorage.getItem(index));
return retreivalObject;
}

export function UpdateToDo(){
// WRITE UPDATE FUNCTION
}

export function StoreToDo(index, title, description, status){
localStorage.setItem(index,JSON.stringify(new ToDo(title, description, status)));
console.log("Item stored");
}

export function DeleteToDo(index){
    console.log("Delete Button CLicked");
// CREATE DELETE FUNCTION
}