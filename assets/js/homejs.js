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
let main3 = document.getElementsByTagName("main")[0]
let checkBox = document.getElementsByClassName("checkBox");

for (let i = 0; i < checkBox.length; i++) {
    checkBox[i].onclick = () => {
        console.log(checkBox[i].value);
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
let show = () => {
    main2.style.display = "flex";
    main2.style.justifyContent="center";
    main.style.display = "none";
    main3.style.display = "none"
    textArea2.value = textArea1;
    let newDate= new Date(date);
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
edit.addEventListener("click", show);