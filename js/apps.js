const shopItem = document.getElementsByTagName('img');

for (var i = 0; i < shopItem.length; i++) {
    shopItem[i].src = `images/${shopItem[i].id}.png`
}


const albums = [
    { name: "Album 1", price: 12.99, inCart: false }, 
    { name: "Album 2", price: 14.99, inCart: false }, 
    { name: "Album 3", price: 9.99, inCart: false }, 
    { name: "Album 4", price: 19.99, inCart: false }
  ];