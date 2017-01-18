var watchID = null;

function onLoad(){
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady(){
	startWatch();

}

function startWatch(){
	var options = {frequncy: 5};
	watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

function stopWatch(){
	if (watchID){
		navigator.accelerometer.clearWatch(watchID);
		watchID = null;
	}
}

function onSuccess(acceleration){
	var accX = acceleration.x;
	var accY = acceleration.y;
	var accZ = acceleration.z;
	var timestamp = acceleration.timestamp;
	document.getElementById('accelerometer').innerHTML = 'Acceleration X: ' + accX + '<br>' + 
	'Acceleration Y: ' + accY + '<br>' + 
	'Acceleration Z: ' + accZ + '<br>' + 
	'Timestamp: ' +timestamp + '<br>';
}

function onError(){
	alert('onError!');
}