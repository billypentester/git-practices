"use Strict";

const historyItems = 8;

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
    historyItem.className = "history-card";
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
    historyItem.style.backgroundColor = randomizeColor();
    history.appendChild(historyItem);
}



for(let i = 0; i < historyItems; i++) {
    addToHistory({
        title: `Item ${i + 1}`,
        description: `This is item number ${i + 1} in the history.`
    });
}
