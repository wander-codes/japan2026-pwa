// ======================================
// 🇯🇵 JAPAN 2026 APP
// password.js
// ======================================


const APP_PASSWORD = "Japan2026";


function checkPassword(){


if(
localStorage.getItem("japan-access")
==="true"
){

showHome();

return;

}



document.getElementById("content").innerHTML = `


<div class="welcome">


<h2>
🔒 Japan 2026
</h2>


<p>
Private Reise-App
</p>


<input

id="password"

type="password"

placeholder="Passwort">


<br><br>


<button onclick="unlockApp()">

Öffnen

</button>


</div>


`;

}



function unlockApp(){


const input =
document.getElementById("password").value;



if(input === APP_PASSWORD){


localStorage.setItem(
"japan-access",
"true"
);


showHome();



}else{


alert(
"Falsches Passwort"
);


}


}