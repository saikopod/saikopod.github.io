
ymaps.ready(function() {

	var req = ["from=api-maps",
		"ll=30.197958%2C59.995166",
		"mode=search",
		"oid=1358172914",
		"ol=biz",
		"utm_source=api-maps",
		"z=17"].join("&");

	var mapData = {
		coords: [60-0.0049, 30.2-0.00273],
		body: `<a href="https://yandex.ru/maps/2/saint-petersburg/?${req}">
				<img src="images/logo-white.svg" class="logo2"></a>`,
		footer: 'ул.Мебельная д.47'
	};

	var myMap = new ymaps.Map("map", {
		center: mapData.coords,
		zoom: 15,
		controls: []
	});

	myMap.balloon.open(mapData.coords, {
		contentBody: mapData.body,
		contentFooter: mapData.footer
	});

});