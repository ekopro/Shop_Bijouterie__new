const products = catalog.querySelectorAll('.wrapperForProduct');

function clearFilters() {
	const radioButtons = document.querySelectorAll('.radio');

	radioButtons.forEach(function(radioButton) {
			if (radioButton.checked) {
				radioButton.checked = false;
			}
		});

	for (var i = 0; i < products.length; i++) {
			products[i].classList.remove('hideCategoryByMaterial');
			products[i].classList.remove('hideCategoryByReady');
			products[i].classList.remove('hideCategoryByPrice');
	};

}

document.querySelector('.clear-filters').addEventListener('click', clearFilters);

const categories = [
		'Все категории',
		'Серьги из камней', 
		'Серьги-микромакраме', 
		'Ожерелья',
		'Браслеты',
		'Брошки',
		'Валяние'
		];
		
categories.forEach(function(item) {
	const filter = document.createElement('button');
	
	filter.innerHTML = item;
	filter.value = item;
	filter.classList.add('filter__name');

	document.querySelector('.filters').appendChild(filter);


	filter.addEventListener('click', function(event) {
		// filter.classList.toggle('filter__name--clicked');

		const filterName = event.target.value,
			  parentElem = document.querySelector('.catalog'),
			  filters = catalog.querySelectorAll('.filters');

		clearFilters();

		for (var i = 0; i < products.length; i++) {
			const currentProduct = products[i];

			products[i].classList.remove('hideCategory');
			products[i].remove();

			if (filterName === 'Все категории') {
			 	parentElem.appendChild(currentProduct);
			 } else 

			 if (currentProduct.getAttribute('data-category') === filterName) {
			 	parentElem.appendChild(currentProduct);
			 }
		};

		
	});

});