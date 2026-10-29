import {createSidebar} from "./components/sidebar.js"

const sidebarContainer = document.querySelector("#sidebar")

const sidebar = createSidebar()

sidebarContainer.appendChild(sidebar)

