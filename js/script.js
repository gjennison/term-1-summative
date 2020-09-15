function expandBurger(){
	var burger = document.querySelector('.burger-links');
	if(burger.classList.contains('burger-expand')){
		burger.classList.add('burger-shrink');
	}
	else if(burger.classList.contains('burger-shrink')){
		burger.classList.remove('burger-shrink');
	}
	burger.classList.toggle('burger-expand');
	console.log(burger)
}

var mainItems = []
var starterItems = []
var dessertItems = []

function appendItem(name, src, array){
	array.push({name: name, src: src});
}

appendItem('Thali', 'assets/main/thali.jpg', mainItems);
appendItem('Pizza', 'assets/main/pizza.jpeg', mainItems);
appendItem('Pasta', 'assets/main/pasta.jpg', mainItems);
appendItem('Burger', 'assets/main/burger.jpg', mainItems);

appendItem('Blueberry Muffin', 'assets/snacks/blueberry-muffin.jpg', starterItems);
appendItem('Patties', 'assets/snacks/patties.jpg', starterItems);
appendItem('Pumpkin Soup', 'assets/snacks/pumpkin-soup.jpg', starterItems);
appendItem('Samosa', 'assets/snacks/samosa.jpg', starterItems);

appendItem('Kaju', 'assets/desserts/kaju.jpg', dessertItems);
appendItem('Ladoo', 'assets/desserts/ladoo.jpg', dessertItems);
appendItem('Milk Peda', 'assets/desserts/milk-peda.jpg', dessertItems);
appendItem('Rasgulla', 'assets/desserts/rasgulla.jpg', dessertItems);

const starterMenuItems = document.querySelector('#starter .menu-items');
const mainMenuItems = document.querySelector('#main .menu-items');
const dessertMenuItems = document.querySelector('#dessert .menu-items');

function insertItems(array, object){
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		
		object.innerHTML += '<div class="item" onclick="addToCart(\'' + element.src + '\',\'' + element.name + '\')"><div class="overlay"><i class="fas fa-plus"></i></div><img src=' + element.src + ' alt=""><div class="item-title"><h4>' + element.name + '</h4><p>$6</p></div></div>'
	}
}

insertItems(mainItems, mainMenuItems);
insertItems(starterItems, starterMenuItems);
insertItems(dessertItems, dessertMenuItems);


// SHOPPING CART

function addToCart(src, name){
	console.log('source: ' + src + '\n' + 'name: ' + name)
}