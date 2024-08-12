import './style.css';
import { ConstructHeader } from "./HeaderModule/ConstructHeader";
import { ConstructContent } from './ContentModule/ConstructContent';
import { ConstructFooter } from './FooterModule/ConstructFooter';
import { AssignAddNoteEventListeners, ConstructSidebar } from './SidebarModule/ConstructSidebar';
import { CreateCardDialouge } from './CreateCardDialouge';

ConstructHeader();
ConstructSidebar();
const frame = document.querySelector(".SidebarFrame")
CreateCardDialouge(frame);
AssignAddNoteEventListeners();
ConstructContent();
ConstructFooter();

