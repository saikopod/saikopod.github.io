ymaps.ready(function() {

	var mapData = {
		coords: [60-0.0049, 30.2-0.00273],
		body: '<img src="logo-white.svg" class="logo2">',
		footer: 'ул.Мебельная д.47'
	};

	var myMap = new ymaps.Map("map", {
		center: mapData.coords,
		zoom: 15,
		controls: []
	});

	myMap.balloon.open(data.coords, {
		contentBody: mapData.body,
		contentFooter: mapData.footer
	});

});