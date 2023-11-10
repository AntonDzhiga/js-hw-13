const list = document.querySelectorAll('h2');
console.log(`У списку ${list.length} категорії.`);


const ulElement = document.querySelector('ul#categories').querySelectorAll('li.item')
ulElement.forEach(item => {
    console.log(`Категорія: ${item.querySelector('h2').textContent}`);
    console.log(`Кількість елементів: ${item.querySelectorAll('li').length}`);
})