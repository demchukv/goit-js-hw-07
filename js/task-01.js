const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});

/**
const secondCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${secondCategories.length}`);
secondCategories.forEach((item) => {
    for (const el of Array.from(item.children)) {
        if(el.tagName === "H2") console.log(`Category: ${el.textContent}`);
        if(el.tagName === "UL") console.log(`Elements: ${el.children.length}`);
    }
});
*/