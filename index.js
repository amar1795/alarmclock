



function getclock()
{
    let currentdate=new Date();

    let currenthour=currentdate.getHours();
    let currentminutes=currentdate.getMinutes();
    let currentseconds=currentdate.getSeconds();

    currenthour=(currenthour>12 ? currenthour-12 :currenthour);
    currenthour=(currenthour==0 ? 12 : currenthour);

    let timeofday=(currenthour>12 ? "AM":"PM");

    currentminutes=(currentminutes<10 ? "0" :"") +currentminutes;
    currentseconds=(currentseconds<10 ? "0" :"") +currentseconds;

    let currenttime=currenthour+":"+currentminutes+":"+currentseconds;

    document.getElementById('clock').innerHTML=currenttime;



}

setInterval(() => {

    // console.log('running now');
    getclock()
    
}, 1000);