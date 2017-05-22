const goods = [
  { name: 'Серьги-подвески из натурального камня',
	image: 'http://n1s2.elle.ru/b6/9c/21/b69c21117dd54b178b8711fe1227f567/667x1000_0xd42ee42a_14333493121383122932.jpeg',
	price: 200,
	description: 'JULIANA - брошь из тюльпанового дерева ручной работы.Canary wood это тюльпановое дерево с удивительной текстурой приятного янтарного цвета, произрастает в Бразилии. В центре броши - французская ткань.',
	category: 'Брошки',
	id: 1,
	material: ['бисер', 'натуральные камни'],
	ready: 'yes'},

  { name: 'Ожерелье из бисера',
	image: 'assets/images/grey_necklace.jpg',
	price: 300,
	description: 'JULIANA - брошь из тюльпанового дерева ручной работы.Canary wood это тюльпановое дерево с удивительной текстурой приятного янтарного цвета, произрастает в Бразилии. В центре броши - французская ткань.',
	category: 'Ожерелья',
	id: 2,
	material: ['бисер'],
	ready: 'yes'},

  { name: 'Серьги-подвески из бисера в ассортименте цветов',
	image: 'assets/images/earrings_branch.jpg',
	price: 200,
	description: 'JULIANA - брошь из тюльпанового дерева ручной работы.Canary wood это тюльпановое дерево с удивительной текстурой приятного янтарного цвета, произрастает в Бразилии. В центре броши - французская ткань.',
	category: 'Серьги из камней',
	id: 3,
	material: ['бисер', 'металл'],
	ready: 'no'},

  { name: 'Серьги в стиле микромакраме',
	image: 'assets/images/earrings_makrame.jpg',
	price: 200,
	description: 'JULIANA - брошь из тюльпанового дерева ручной работы.Canary wood это тюльпановое дерево с удивительной текстурой приятного янтарного цвета, произрастает в Бразилии. В центре броши - французская ткань.',
	category: 'Серьги-микромакраме',
	id: 4,
	material: ['дерево'],
	ready: 'yes'},

  { name: 'Ожерелье в стиле микромакраме',
	image: 'assets/images/micromakrame_necklace.jpg',
	price: 200,
	description: 'JULIANA - брошь из тюльпанового дерева ручной работы.Canary wood это тюльпановое дерево с удивительной текстурой приятного янтарного цвета, произрастает в Бразилии. В центре броши - французская ткань.',
	category: 'Ожерелья',
	id: 5,
	material: ['металл', 'дерево'],
	ready: 'yes'},

  { name: 'Перчатки из натуральной шерсти',
	image: 'assets/images/perchatki.jpg',
	price: 200,
	description: 'JULIANA - брошь из тюльпанового дерева ручной работы.Canary wood это тюльпановое дерево с удивительной текстурой приятного янтарного цвета, произрастает в Бразилии. В центре броши - французская ткань.',
	category: 'Валяние',
	id: 6,
	material: ['шерсть'],
	ready: 'no'},

  { name: 'Шарф из натуральной шерсти',
	image: 'assets/images/scarph.jpg',
	price: 600,
	description: 'JULIANA - брошь из тюльпанового дерева ручной работы.Canary wood это тюльпановое дерево с удивительной текстурой приятного янтарного цвета, произрастает в Бразилии. В центре броши - французская ткань.',
	category: 'Валяние',
	id: 7,
	material: ['шерсть'],
	ready: 'yes'},

  { name: 'Платье из натуральной шерсти',
	image: 'assets/images/saraphan.jpg',
	price: 1000,
	description: 'JULIANA - брошь из тюльпанового дерева ручной работы.Canary wood это тюльпановое дерево с удивительной текстурой приятного янтарного цвета, произрастает в Бразилии. В центре броши - французская ткань.',
	category: 'Валяние',
	id: 8,
	material: ['шерсть'],
	ready: 'yes'},

  { name: 'Браслеты из натурального камня',
	image: 'assets/images/bracelets.jpg',
	price: 100,
	description: 'JULIANA - брошь из тюльпанового дерева ручной работы.Canary wood это тюльпановое дерево с удивительной текстурой приятного янтарного цвета, произрастает в Бразилии. В центре броши - французская ткань.',
	category: 'Браслеты',
	id: 9,
	material: ['натуральные камни'],
	ready: 'yes'},

  { name: 'Ожерелье из бисера в стиле жгут',
	image: 'assets/images/black_necklace.jpg',
	price: 200,
	description: 'JULIANA - брошь из тюльпанового дерева ручной работы.Canary wood это тюльпановое дерево с удивительной текстурой приятного янтарного цвета, произрастает в Бразилии. В центре броши - французская ткань.',
	category: 'Ожерелья',
	id: 10,
	material: ['дерево'],
	ready: 'no'},
]

//filling general catalog by items

goods.forEach(function(item, index, arr) {
	const name = document.createElement('div'),
		  parentElem = document.querySelector('.catalog'),
          wrapperForProduct = document.createElement('div'),
          image = document.createElement('div'),
          wrapperForText = document.createElement('div'),
          price = document.createElement('div');
  
  price.innerHTML = item.price + ' грн';
  name.innerHTML = item.name;
  image.style.backgroundImage = `url(${item.image})`;

  wrapperForProduct.classList.add('wrapperForProduct');
  wrapperForProduct.setAttribute('data-category', item.category);
  wrapperForProduct.setAttribute('data-id', item.id);
  image.classList.add('image');
  name.classList.add('productName');
  price.classList.add('productPrice');
  wrapperForText.classList.add('wrapperForText');
  
  parentElem.appendChild(wrapperForProduct);
  wrapperForProduct.appendChild(image);
  wrapperForProduct.appendChild(wrapperForText);
  wrapperForText.appendChild(name);
  wrapperForText.appendChild(price); 
	
})

//creating basic filters in sidebar

function CreateFilter(filterName, filterContent, label) {
	const filterHeader = document.createElement('div'),
		  filterListHolder = document.createElement('div'),
		  filterList = document.createElement('ul');


	filterHeader.classList.add('sidebar-filterHeader');
	filterHeader.innerHTML = filterName;
	filterList.classList.add('sidebar-filterList');
	filterListHolder.appendChild(filterList);

	filterContent.forEach(function(item) {
		const filterItem = document.createElement('li'),
			  filterLabel = document.createElement('label'),
			  filterInput = document.createElement('input'),
			  filterText = document.createElement('span');

		filterInput.type = 'radio';
		filterInput.name = filterName;
		filterText.innerHTML = item;
		filterLabel.appendChild(filterInput).classList.add(`sidebar-filterInput__${label}`);
		filterLabel.appendChild(filterInput).classList.add(`radio`);
		filterLabel.appendChild(filterText).classList.add('sidebar-filterText');
		filterItem.appendChild(filterLabel).classList.add(`sidebar-filterLabel`);
		filterList.appendChild(filterItem).classList.add('sidebar-filterItem');
	})

	document.querySelector('.sidebar-container').appendChild(filterHeader);
	document.querySelector('.sidebar-container').appendChild(filterListHolder);

};

CreateFilter('Материал', ['бисер', 'натуральные камни', 'шерсть', 'металл', 'дерево'], 'material');
CreateFilter('Цена', ['до 200 грн', 'от 200 до 500 грн', 'свыше 500 грн'], 'price');
CreateFilter('Тип изделия', ['Готовое изделие', 'На заказ'], 'ready');


document.querySelectorAll('.sidebar-filterInput__material').forEach(function(item) {
	item.addEventListener('click', filterByMaterial);
});

document.querySelectorAll('.sidebar-filterInput__ready').forEach(function(item) {
	item.addEventListener('click', filterByReady);
});

document.querySelectorAll('.sidebar-filterInput__price').forEach(function(item) {
	item.addEventListener('click', filterByPrice);
});

function filterByMaterial(event){
	const checkedMaterial = event.target.nextElementSibling.innerHTML;
	
	for (var i = 0; i < products.length; i++) {
		const productId = +products[i].getAttribute('data-id');
		
		products[i].classList.remove('hideCategoryByMaterial');

		goods.forEach(function(item) {
			if (item.id === productId) {
				if (item.material.indexOf(checkedMaterial) === -1) {
					products[i].classList.add('hideCategoryByMaterial');
				};
			}
		})
	}
};

function filterByReady(event){
	const readyStatus = event.target.nextElementSibling.innerHTML;
	
	for (var i = 0; i < products.length; i++) {
		const productId = +products[i].getAttribute('data-id');
		
		products[i].classList.remove('hideCategoryByReady');

		switch (readyStatus) {
			case 'Готовое изделие':
				goods.forEach(function(item) {
					if (item.id === productId) {
						if (item.ready === 'no') {
							products[i].classList.add('hideCategoryByReady');
						};
					}
				});
				break;
			case 'На заказ':
				goods.forEach(function(item) {
					if (item.id === productId) {
						if (item.ready !== 'no') {
							products[i].classList.add('hideCategoryByReady');
						};
					}
				});
				break;
		}
	}
};

function filterByPrice(event){
	const priceInterval = event.target.nextElementSibling.innerHTML;
	
	for (var i = 0; i < products.length; i++) {
		const productId = +products[i].getAttribute('data-id');
		
		

		switch (priceInterval) {
			case 'до 200 грн':
				products[i].classList.remove('hideCategoryByPrice');
				goods.forEach(function(item) {
					if (item.id === productId) {
						if (item.price > 200) {
							products[i].classList.add('hideCategoryByPrice');
						};
					}
				});
				break;
			case 'от 200 до 500 грн':
				products[i].classList.remove('hideCategoryByPrice');
				goods.forEach(function(item) {
					if (item.id === productId) {
						if (item.price <= 200 || item.price >= 500) {
							products[i].classList.add('hideCategoryByPrice');
						};
					}
				});
				break;
			case 'свыше 500 грн':
				products[i].classList.remove('hideCategoryByPrice');
				goods.forEach(function(item) {
					if (item.id === productId) {
						if (item.price < 500) {
							products[i].classList.add('hideCategoryByPrice');
						};
					}
				});
				break;
		}
	}
};


