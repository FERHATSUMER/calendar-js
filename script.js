const monthEl=document.querySelector(".date h1");
const fullDate=document.querySelector(".date p");
const daysEl=document.querySelector(".days");


const monthInx= new Date().getMonth();
const lastDay=new Date(new Date().getFullYear(),monthInx + 1, 0).getDate();
const firstDay=new Date(new Date().getFullYear(),monthInx, 1).getDay() -1;



const months=[
    "January",
    "February",
    "March",
    "April",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

// monthEl .innerHTML=months.forEach((month)=>`${month}` );
fullDate .innerHTML=new Date().toDateString();

let days ="";
for(let i =firstDay;i < 0; i--){
    days+= days +=`<div class="empty"></div>`;
}


for (let i=1 ; i <=lastDay;i++ ){
    if((i===new Date().getDate())){
        days +=`<div class="today">${i}</div>`;
    }else{
        days +=`<div>${i}</div>`;
    }
}


daysEl.innerHTML=days;