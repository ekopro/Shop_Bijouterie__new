document.querySelectorAll('.wrapperForProduct').forEach(function(item) {
	item.addEventListener('click', function(event) {
		const itemClicked = event.target.closest('.wrapperForProduct'),
			  dataId = +itemClicked.getAttribute('data-id');

		document.querySelector('.popup').style.display = "block";
		goods.forEach(function(item) {
			if (item.id === dataId) {
				document.querySelector('.popup_image')
					.style.backgroundImage = `url(${item.image})`;
				document.querySelector('.popup_name')
					.innerHTML = item.name;
				document.querySelector('.popup_description')
					.innerHTML = item.description;
				document.querySelector('.popup_price')
					.innerHTML ='Цена: ' + item.price + ' грн';
				
				changeButtonColor();
			}
		});

		function changeButtonColor() {
			let counter = 1;
			const button = document.querySelector('.popup_input-submit'),
				  time = setInterval(function(){
				  	if (counter > 0) {
				  		button.style.background = '#800cbd';
				  	} else {
				  		button.style.background = '#d4d4d4';
				  	};

				  	counter *= -1;

				  }, 2000);
		};
	})
});

document.querySelector('.popup_wrapper ').addEventListener('click', function(event) {
	document.querySelector('.popup').style.display = "none";
});

