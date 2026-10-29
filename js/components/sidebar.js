export function createSidebar() {
    const sidebar = document.createElement("aside")
    sidebar.className = "sidebar"

    const logo = document.createElement("span")
    logo.className = "logo"

    const title = document.createElement("h1")
    title.textContent = "GESTIÓN COMERCIAL"
    title.className = "title"

    const navegationItem = [
        {
            name: "Dashboard",
            path: "#dashboard",
            icon: "assets/icons/dashboard-black.svg"
        },
        {
            name: "Products",
            path: "#products",
            icon: "assets/icons/productos-black.svg"
        },
        {
            name: "Inventory",
            path: "#inventory",
            icon: "assets/icons/inventario-black.svg"
        },
        {
            name: "New order",
            path: "#newOrder",
            icon: "assets/icons/nuevo-pedido-black.svg"
        },
        {
            name: "Orders",
            path: "#orders",
            icon: "assets/icons/pedidos-black.svg"
        },
        {
            name: "Statistics",
            path: "#statistics",
            icon: "assets/icons/estadisticas-black.svg"
        },
        {
            name: "Settings",
            path: "#settings",
            icon: "assets/icons/configuracion-black.svg"
        }
    ]

    const navegation = document.createElement("ul")
    navegation.className = "navegation"

    navegationItem.forEach(item => {
        const li = document.createElement("li")
        const link = document.createElement("a")
        const img = document.createElement("img")
        const span = document.createElement("span")

        img.src = item.icon
        img.alt = item.name
        link.href = item.path
        span.textContent = item.name

        link.appendChild(img)
        link.appendChild(span)
        li.appendChild(link)
        navegation.appendChild(li)

        const originalIcon = item.icon.replace("-black", "")
        li.addEventListener("mouseenter", () => {
            img.src = originalIcon
        })
        li.addEventListener("mouseleave", () => {
            img.src = item.icon
        })
    });

    sidebar.append(logo, title, navegation)

    return sidebar
}