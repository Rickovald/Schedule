let weekDayElements = [
	sunday = document.createElement ('div'),
	monday = document.createElement ('div'),
	tuesday = document.createElement ('div'),
	wednesday = document.createElement ('div'),
	thursday = document.createElement ('div'),
	friday = document.createElement ('div'),
	saturday = document.createElement ('div')
];
function timeIs () {
	today = new Date(),
	dayWeek = today.getDay();
};
timeIs ();
setInterval(timeIs,1);

monday.id = wednesday.id = friday.id = 
tuesday.id = thursday.id = saturday.id =
sunday.id = 'toDoToday';

monday.innerHTML = wednesday.innerHTML = friday.innerHTML += morning + odd + evening;
tuesday.innerHTML = thursday.innerHTML = saturday.innerHTML += morning + even + evening;
sunday.innerHTML += morning + sun + evening;

function refreshing (){
	main.innerHTML = "";
	if (dayWeek == 1){
		main.innerHTML += "It's monday <br>"
		main.appendChild(weekDayElements[1]);
	} else if (dayWeek == 2){
		main.innerHTML += "It's tuesday <br>"
		main.appendChild(weekDayElements[2]);
	} else if (dayWeek == 3){
		main.innerHTML += "It's wednesday my dudes <br>"
		main.appendChild(weekDayElements[3]);
	} else if (dayWeek == 4){
		main.innerHTML += "It's thursday <br>"
		main.appendChild(weekDayElements[4]);
	} else if (dayWeek == 5){
		main.innerHTML += "It's friday <br>"
		main.appendChild(weekDayElements[5]);
	} else if (dayWeek == 6){
		main.innerHTML += "It's saturday <br>"
		main.appendChild(weekDayElements[6]);
	} else if (dayWeek == 0) {
		main.innerHTML += "It's sunday ಠ_ಠ <br>"
		sunSection.appendChild(weekDayElements[0]);
	}
}
function atMidNight () {
	hour = today.getHours(),
	minutes = today.getMinutes(),
	seconds = today.getSeconds();
	if (hour == 0 && minutes == 0 && seconds == 0) {
		refreshing ();
	};
}
refreshing ();
atMidNight ();
setInterval(atMidNight, 1000);