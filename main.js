let targetBody = document.querySelector("body");
targetBody.innerHTML = `<h1>internal company directory</h1>
<div class="personal">
</div>`
let loadPersonal = document.querySelector('.personal');
for (let i = 0; i < customers.results.length; i++) {
loadPersonal.innerHTML +=`<div class="infoBlock">
<img src=${customers.results[i].picture.large}>
<h3 class="name">${customers.results[i].name.first} ${customers.results[i].name.last}</h3>
<p class="email">${customers.results[i].email}</p>
<p class="addressOne">${customers.results[i].location.street}</p>
<p class="cityStateZip">${customers.results[i].location.city} ${customers.results[i].location.state} ${customers.results[i].location.postcode}</p>
<p class="phone">${customers.results[i].phone}</p>
<p class="sSN">${customers.results[i].id.value}</p>
</div>`
}
