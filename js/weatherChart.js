function getFahrenheits(result) {
	return result.hourly_forecast.map(function(hour) {
		return hour.temp.english;
	});
}

function getHours(result) {
	return result.hourly_forecast.map(function(x) {
		return x.FCTTIME.hour;
	});
}

function generateDataSet(labels, data) {
	// Your code goes here
	return Object.assign(
		{},
		{ labels: labels },
		{
			datasets: [
				{
					label: 'Hourly Weather for New York',
					fillColor: 'rgba(220,220,220,0.2)',
					strokeColor: 'rgba(220,220,220,1)',
					pointColor: 'rgba(220,220,220,1)',
					pointStrokeColor: '#fff',
					pointHighlightFill: '#fff',
					pointHighlightStroke: 'rgba(220,220,220,1)',
					data: data
				}
			]
		}
	);
}

function makeAjaxRequest(endpoint, generateDataSet) {
	fetch(endpoint, {})
		.then(res => res.json())
		.then(json => generateDataSet(json));
}
