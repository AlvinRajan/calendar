const monthel = document.getElementById("month");
const dayel = document.getElementById("day");
const wdayel = document.getElementById("weekday");
const yearel = document.getElementById("year");

const date = new Date();
const month =date.getMonth();
monthel.innerHTML=date.toLocaleString("en",{
    month:"long"
})
wdayel.innerHTML=date.toLocaleString("en",{
    weekday:"long"
})
dayel.innerText=date.getDate();
yearel.innerText=date.getFullYear();

