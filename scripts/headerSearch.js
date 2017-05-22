

document.querySelector('.inputSearch').addEventListener('keyup', function(event) {
	const inputSearch = document.querySelector('.inputSearch'),
		  searchValue = inputSearch.value.toUpperCase(),
		  productNames = document.querySelectorAll('.productName');

	for (let i = 0; i < productNames.length; i++) {
		if (productNames[i].innerHTML.toUpperCase().indexOf(searchValue) !== -1) {
			productNames[i].closest('.wrapperForProduct').style.display = "";
		} else {
			productNames[i].closest('.wrapperForProduct').style.display = "none";
		}
	}
})