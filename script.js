console.log("Hello from JS")
var data1={image : "bz2.jpg",name : "Jeevitha Simma",designation : "Student"}
var data2={image : "xyz.jpg",name : "Jeevi",designation : "Software Developer"}
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
