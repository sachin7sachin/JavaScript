setInterval(()=>{
    let hour = document.querySelector("#hr")
    let min = document.querySelector("#m")
    let sec = document.querySelector("#s")

    let currenthour = new Date().getHours();
    let currentmin = new Date().getMinutes();
    let currentsec = new Date().getSeconds();

    hour.innerHTML = currenthour;
    min.innerHTML = currentmin;
    sec.innerHTML = currentsec;
},1000);
