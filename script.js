"use Strict";

const historyItems = 3;

function randomizeColor() {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const brightness = (r + g + b) / 3;
    
    const lightThreshold = 300;
    if (brightness < lightThreshold) {
        const factor = lightThreshold / brightness;
        return `rgb(${Math.min(255, Math.floor(r * factor))}, ${Math.min(255, Math.floor(g * factor))}, ${Math.min(255, Math.floor(b * factor))})`;
    }
    return `rgb(${r}, ${g}, ${b})`;
}

function createHistoryItem(title, description) {
    const historyItem = document.createElement("div");
    historyItem.classList.add("history-card");
    historyItem.style.borderColor = randomizeColor();
    const titleElement = document.createElement("h1");
    titleElement.textContent = title;
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = description;
    historyItem.appendChild(titleElement);
    historyItem.appendChild(descriptionElement);
    return historyItem;
}

function addToHistory(item) {
    const history = document.querySelector(".history");
    const historyItem = createHistoryItem(item.title, item.description);
    historyItem.setAttribute("data-id", item.id);
    historyItem.style.backgroundColor = item.color || randomizeColor();
    history.appendChild(historyItem);
}

// Generate random history items

for(let i = 0; i < historyItems; i++) {
    addToHistory({
        id: i + 1,
        title: `Item ${i + 1}`,
        description: `This is item number ${i + 1} in the history.`,
        color: randomizeColor()
    });
}

window.addEventListener("load", () => {
    window.addEventListener("click", (event) => {
        const target = event.target.closest(".history-card");
        if(target) {
            const itemId = target.getAttribute("data-id");
            // it will vanish the item from the history
            target.remove();
            console.log(`Item with ID ${itemId} clicked and removed from history.`);
        }
        const history = document.querySelector(".history");
        if (history.children.length === 0) {
            const emptyMessage = document.createElement("p");
            emptyMessage.textContent = "No history items available.";
            emptyMessage.classList.add("empty-message");
            history.appendChild(emptyMessage);
        } else {
            const emptyMessage = history.querySelector(".empty-message");
            if (emptyMessage) {
                emptyMessage.remove();
            }
        }
    });
});