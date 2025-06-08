"use Strict";

const historyItems = 6;



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
    history.appendChild(historyItem);
}



for(let i = 0; i < historyItems; i++) {
    addToHistory({
        title: `Item ${i + 1}`,
        description: `This is item number ${i + 1} in the history.`
    });
}
