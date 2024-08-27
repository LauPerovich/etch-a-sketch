const createDivs = function(size) {
    for (let i = 0; i < size; i++) {
        const container = document.querySelector("#container");
        const column = document.createElement("div");
        column.classList.add("col","square");
        for (let j = 0; j < size; j++) {
            const row = document.createElement('div');
            row.classList.add("row", "square");
            column.appendChild(row);
        }
        container.appendChild(column);
    }
}

createDivs(16);


