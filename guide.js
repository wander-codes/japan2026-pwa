// ======================================
// 🇯🇵 JAPAN 2026 APP
// guide.js
// Guide Ansicht
// ======================================


function openGuide(cityName, dayIndex, placeIndex){


const city =
trip.cities[cityName];


const place =
city.days[dayIndex].places[placeIndex];


const content =
document.getElementById("content");



const guide =
place.guide || {};



content.innerHTML = `



<button 
class="back-button"
onclick="openDay(${dayIndex})">

← Zurück zum Tag

</button>




<div class="guide-header">


<div class="guide-icon">

${place.icon}

</div>


<div>

<h2>

${place.title}

</h2>


${place.japanese ? `

<p class="japanese">

${place.japanese}

</p>

` : ""}


</div>


</div>





<div class="guide-card">


<h3>
📖 Überblick
</h3>


<p>

${guide.description || "Für diesen Stopp gibt es noch keinen ausführlichen Guide."}

</p>


</div>







${guide.photoSpots?.length ? `


<div class="guide-card">


<h3>
📸 Beste Fotospots
</h3>



${guide.photoSpots.map(spot=>`


<div class="photo-spot">


<h4>

📍 ${spot.title || spot}

</h4>



${spot.map ? `

<a 
href="${spot.map}"
target="_blank"
class="map-button">

🗺 Google Maps öffnen

</a>

`:""}



${spot.time ? `

<p>

🕘 Beste Zeit:

${spot.time}

</p>

`:""}




${spot.tip ? `

<p>

💡 Tipp:

${spot.tip}

</p>

`:""}



</div>



`).join("")}


</div>


`:""}







${guide.mustDo?.length ? `


<div class="guide-card">


<h3>
⭐ Nicht verpassen
</h3>


<ul>


${guide.mustDo
.map(x=>`

<li>
${x}
</li>

`)
.join("")}


</ul>


</div>


`:""}







${guide.food?.length ? `


<div class="guide-card">


<h3>
🍜 Essen & Snacks
</h3>


<ul>


${guide.food
.map(x=>`

<li>
${x}
</li>

`)
.join("")}


</ul>


</div>


`:""}







${guide.shopping?.length ? `


<div class="guide-card">


<h3>
🎁 Souvenirs & Shopping
</h3>


<ul>


${guide.shopping
.map(x=>`

<li>
${x}
</li>

`)
.join("")}


</ul>


</div>


`:""}







${guide.budget ? `


<div class="guide-card small">


<h3>
💴 Budget
</h3>


<p>

${guide.budget}

</p>


</div>


`:""}







${guide.duration ? `


<div class="guide-card small">


<h3>
⏱ Dauer
</h3>


<p>

${guide.duration}

</p>


</div>


`:""}







${guide.warnings?.length ? `


<div class="guide-card warning">


<h3>
⚠️ Hinweise
</h3>


<ul>


${guide.warnings
.map(x=>`

<li>
${x}
</li>

`)
.join("")}


</ul>


</div>


`:""}







${guide.tips?.length ? `


<div class="guide-card tip">


<h3>
⭐ Kevin-Tipps
</h3>


<ul>


${guide.tips
.map(x=>`

<li>
${x}
</li>

`)
.join("")}


</ul>


</div>


`:""}






`;

}





function closeGuide(){


const box =
document.querySelector(".guide-overlay");


if(box){

box.remove();

}


}