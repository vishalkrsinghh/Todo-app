// declare all the variables.
let del = document.getElementById("del");
let edit = document.getElementById("edit");
let form2 = document.getElementById("form2");
let textArea1 = "";
let textArea2 = document.getElementById("textArea2")
let date2 = document.getElementById("date2");
let date="";
let para1 = document.getElementsByClassName("para1");
let para2 = document.getElementsByClassName("para2");
let main2 = document.getElementById("main2");
let main = document.getElementsByClassName("main")[0];
let main3 = document.getElementsByTagName("main")[0];
let h4 = document.getElementsByTagName("h4")[0];
let checkBox = document.getElementsByClassName("checkBox");
let catBtn = document.getElementsByClassName("catBtn");

// what will happens after clicking on radio button. 
for (let i = 0; i < checkBox.length; i++) {
    checkBox[i].onclick = () => {
        // console.log(checkBox[i].value);
        del.setAttribute("href", `/delete/${checkBox[i].value}`);
        form2.setAttribute("action", `/update/${checkBox[i].value}`);
        textArea1 = para1[i].innerText;
        date=para2[i].innerText;
        del.style.background = "#ff9c9c";
        edit.style.background = "#ffff99";
        edit.style.pointerEvents = "auto";
        edit.style.cursor = "pointer"
    }

}

// on click edit button what will happens
let show = () => {
    main2.style.display = "flex";
    main2.style.justifyContent="center";
    main.style.display = "none";
    main3.style.display = "none"
    h4.style.display = "none"
    textArea2.value = textArea1;
    let month=new Date(date).getMonth()+1;
    let year=new Date(date).getFullYear()
    let dt=new Date(date).getDate()
    if(month<10){
        month="0"+month;
    }
    if(dt<10){
        dt="0"+dt;
    }
    date2.value=`${year}-${month}-${dt}`;
    // console.log(date2.value);
}

// changes the color of Category buttons according to innertext
for(let i=0; i<catBtn.length; i++){
    if(catBtn[i].innerText==="Personal"){
        catBtn[i].style.background="#8585ff"
    }
     if(catBtn[i].innerText==="Work"){
        catBtn[i].style.background="#82ff82"
    }
     if(catBtn[i].innerText==="Study"){
        catBtn[i].style.background="#ff75ff"
    }
}
// adding event to edit button
edit.addEventListener("click", show);