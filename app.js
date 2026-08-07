// ======================================
// 🇯🇵 JAPAN 2026 APP
// app.js v2.0
// ======================================


let currentCity = "Tokyo";




// ======================================
// HOME
// ======================================

function showHome(){


const content =
document.getElementById("content");


content.innerHTML = `


<div class="welcome">


<h2>
🇯🇵 Willkommen in Japan
</h2>


<p>
Kevin & Caro
</p>


<p>
Euer persönlicher Reiseführer
</p>



<button onclick="showCity('Tokyo')">
🗼 Tokyo
</button>


<br><br>


<button onclick="showCity('Hakone')">
🏔 Hakone
</button>


<br><br>


<button onclick="showCity('Kyoto')">
⛩ Kyoto
</button>


<br><br>


<button onclick="showCity('Osaka')">
🍜 Osaka
</button>


</div>


`;

}




// ======================================
// STADT AUSWÄHLEN
// ======================================

function showCity(cityName){


currentCity = cityName;


showCityDays();


}






// ======================================
// TAGE ANZEIGEN
// ======================================

function showCityDays(){


const content =
document.getElementById("content");



const city =
trip.cities[currentCity];



content.innerHTML = `



<div class="city-header">


<h2>

${currentCity}

</h2>



<p>

${city.dates}

</p>


</div>



${city.days.map((day,index)=>`



<button

class="day-button"

onclick="openDay(${index})">


📅 ${day.date}


<br>


${day.title}


<br>


<small>

${day.places.length} Stopps

</small>


</button>



`).join("")}



`;

}






// ======================================
// TAG ÖFFNEN
// ======================================

function openDay(index){



const content =
document.getElementById("content");



const city =
trip.cities[currentCity];



const day =
city.days[index];



content.innerHTML = `



<button 
class="back-button"
onclick="showCityDays()">

← Zurück

</button>



<div class="city-header">


<h2>

${day.title}

</h2>


<p>

${day.date}

</p>


</div>





${day.places.map((place,i)=>{



let done =
localStorage.getItem(
"done-"+currentCity+"-"+index+"-"+i
)==="true";



return `



<div class="card">



<div class="time">

${place.time}

</div>



<h3>

${place.icon}

${place.title}


${place.highlight ?

" ⭐".repeat(place.highlight)

:

""

}


</h3>





${place.japanese ?

`

<div class="japanese">

${place.japanese}

</div>

`

:

""

}





${place.category ?

`

<div class="category">

📂 ${place.category}

</div>

`

:

""

}





${place.highlight ?

`

<div class="highlight">

${"⭐".repeat(place.highlight)}

Highlight

</div>

`

:

""

}





<p>

${place.summary || ""}

</p>





${place.duration ?

`

<div>

⏱ ${place.duration}

</div>

`

:

""

}





${place.price ?

`

<div>

💴 ${place.price}

</div>

`

:

""

}





<a href="${place.map}"

target="_blank">

📍 Google Maps öffnen

</a>




<br><br>



<button

onclick="openGuide('${currentCity}',${index},${i})">

📖 Guide öffnen

</button>





<br><br>





<label>


<input

type="checkbox"


${done ? "checked":""}


onclick="saveDone('${currentCity}',${index},${i},this)">



${done ?

"✅ Erledigt"

:

"☐ Erledigt"

}



</label>




</div>



`;



}).join("")}



`;

}





// ======================================
// ERLEDIGT SPEICHERN
// ======================================


function saveDone(city,day,item,checkbox){



localStorage.setItem(

"done-"+city+"-"+day+"-"+item,

checkbox.checked

);


}






// ======================================
// BILDER ÖFFNEN
// ======================================


function openImages(search){


const url =

"https://www.google.com/search?tbm=isch&q="

+

encodeURIComponent(search);



window.open(

url,

"_blank"

);


}





// ======================================
// FAVORITEN
// ======================================

function showFavorites(){


const content =
document.getElementById("content");


let favorites=[];



Object.keys(trip.cities).forEach(cityName=>{


trip.cities[cityName].days.forEach(
(day,dayIndex)=>{


day.places.forEach(
(place,placeIndex)=>{


let saved =

localStorage.getItem(

"fav-"+cityName+"-"+dayIndex+"-"+placeIndex

)==="true";



if(saved){


favorites.push({

city:cityName,

day:day.title,

place:place

});


}


});


});


});





content.innerHTML=`



<div class="city-header">

<h2>

⭐ Favoriten

</h2>

</div>



${
favorites.length===0

?

`

<div class="card">

Noch keine Favoriten

</div>

`

:

favorites.map(f=>`

<div class="card">


<h3>

${f.place.icon}

${f.place.title}

</h3>


<p>

${f.city}

-

${f.day}

</p>


</div>


`).join("")

}



`;



}



// ======================================
// REISE INFORMATIONEN
// ======================================

function showTravel(){


const content =
document.getElementById("content");



content.innerHTML = `



<div class="city-header">


<h2>

🧳 Reiseinformationen

</h2>


<p>

Japan 2026

</p>


</div>





<div class="card">


<h3>

✈️ Fluginformationen

</h3>



<h4>

Hinflug Amsterdam

</h4>


<p>

${travelInfo.flight.outbound1.date}

<br>

${travelInfo.flight.outbound1.route}


<br>

${travelInfo.flight.outbound1.time}

<br>

${travelInfo.flight.outbound1.flight}

</p>


<h4>

Hinflug Tokyo

</h4>


<p>

${travelInfo.flight.outbound.date}

<br>

${travelInfo.flight.outbound.route}

<br>

${travelInfo.flight.outbound.airline}
<br>

${travelInfo.flight.outbound.time}
<br>
${travelInfo.flight.outbound.flight}

</p>



<h4>
Rückflug Amsterdam

</h4>


<p>

${travelInfo.flight.return1.date}

<br>

${travelInfo.flight.return1.route}

<br>

${travelInfo.flight.return1.airline}
<br>
${travelInfo.flight.return1.time}
<br>
${travelInfo.flight.return1.route}
<br>
${travelInfo.flight.return1.flight}

</p>

<h4>
Rückflug Düsseldorf

</h4>


<p>

${travelInfo.flight.return.date}

<br>

${travelInfo.flight.return.route}

<br>

${travelInfo.flight.return.airline}
<br>
${travelInfo.flight.return.time}
<br>
${travelInfo.flight.return.route}
<br>
${travelInfo.flight.return.flight}

</p>



</div>





<div class="card">


<h3>

🏨 Hotels

</h3>



${travelInfo.hotels.items.map(h=>`


<p>

<b>${h.city}</b>

<br>

${h.name}

</p>


`).join("")}



</div>




`;



}
// ======================================
// MEHR / JAPAN INFOS
// ======================================


function showMore(){


const content =
document.getElementById("content");



content.innerHTML = `



<div class="city-header">


<h2>

⚙️ Mehr

</h2>


<p>

Japan Wissen & Reisehilfe

</p>


</div>





<div class="card menu-card"

onclick="showJapanBasics()">


<h3>

🇯🇵 Japan Basics

</h3>


<p>

Kultur, Regeln und wichtige Hinweise

</p>


</div>






<div class="card menu-card"

onclick="showTransportInfo()">


<h3>

🚆 Transport

</h3>


<p>

Züge, Suica, Shinkansen & Bahnfahren

</p>


</div>






<div class="card menu-card"

onclick="showMoneyInfo()">


<h3>

💴 Geld & Bezahlen

</h3>


<p>

Bargeld, Karten und Automaten

</p>


</div>






<div class="card menu-card"

onclick="showFoodInfo()">


<h3>

🍜 Essen in Japan

</h3>


<p>

Restaurants, Bestellen und Tipps

</p>


</div>






<div class="card menu-card"

onclick="showPackingInfo()">


<h3>

🎒 Packliste

</h3>


<p>

Was mitnehmen für Japan?

</p>


</div>






<div class="card menu-card"

onclick="showEmergencyInfo()">


<h3>

🆘 Notfallinfos

</h3>


<p>

Wichtige Nummern und Hilfe

</p>


</div>





`;



}

// ======================================
// START
// ======================================

checkPassword();
