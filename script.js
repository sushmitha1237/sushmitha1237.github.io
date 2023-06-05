console.log("Hello from JS")
var data1={image : "pic.jpg",name : "E.Sushmitha ",designation : "Student"}
var data2={image : "current123.jpg",name : "sush",designation : "Software Developer"}
var isdata1 = true;
var displaydata;
var changemypicture = function(){
    if(isdata1){
        displaydata = data2;
        isdata1 = false;
    }
    else{
        displaydata = data1;
        isdata1 = true;
    }
    document.getElementById("mypicture").src=displaydata.image;
    document.getElementById("myname").innerHTML = displaydata.name;
    document.getElementById("mydesigination").innerHTML = displaydata.designation;
    
}
