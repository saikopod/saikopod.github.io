let data = {
	coords: [60-0.0049, 30.2-0.00273],
	body: '<img src="logo.svg" class="logo2">',
	footer: 'ул.Мебельная д.47'
};

ymaps.ready(() => {
	let myMap = new ymaps.Map("map", {
		center: data.coords,
		zoom: 15,
		controls: []
	});
	myMap.balloon.open(data.coords, {
		contentBody: data.body,
		contentFooter: data.footer
	});
});