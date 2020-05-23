$(document).ready(function(){
	document.getElementById('csvFileUpload').addEventListener('change', upload, false);
	
})

// upload method

function upload(evt){

	var file = evt.target.files[0];
	var reader = new FileReader();
	reader.readAsText(file);
	
    reader.onload = function(event) {
		var csvData = event.target.result;
		console.log("");
		console.log(csvData);
		// div_g	
	var dyrow = csvData.replace(/"/g,'');
	var dyarr1 = [];
	var dytmp = [];
	var a1,a2,a3;
	var dt1 = new Date();
	dyrow = dyrow.split("\n");
	
	console.log("pitstop dyrow 1");
	console.log(dyrow);
	
	for (var i = 1; i < dyrow.length - 1; i++) {
		dytmp = dyrow[i].split(",");
		dt1 = new Date(dytmp[1] + ' ' + dytmp[2]);
		a1 = parseFloat(dytmp[4]);
		a2 = parseFloat(dytmp[5]);
		a3 = parseFloat(dytmp[6]);
		dyarr1.push([dt1, a1, a2, a3]);
	}
	console.log("pitstop dyrow 2");
	console.log(dyarr1);
	dyarr1.sort((a, b) => a[0].getTime() < b[0].getTime() ? -1 : 1);
	console.log("pitstop dyrow 3 ");
	console.log(dyarr1);
		var g = new Dygraph(document.getElementById("div_g"),
			dyarr1,
			{
			labels: ['Date', 'Cold', 'Warm', 'Settings'],
			legend: 'always',
			title: 'Temperatures and Settings',
            ylabel: 'Temperature (C)',
            xlabel: 'Date',
			//valueRange: [-5,45],
			showRangeSelector: true});
		//div_g end
		
		//console.log(data);
	}
	
}