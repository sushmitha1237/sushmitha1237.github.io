var userinfo = {name:"",image:"",username:""};
var changemypicture=function(){
    fetch("https://randomuser.me/api").then((response) => response.json()).then((data)=>{
        userinfo.name=data.results[0].name.first;
        userinfo.image = data.results[0].picture.large;
        userinfo.usename = data.results[0].login.username;
        document.getElementById("mypicture").src=userinfo.image;
        document.getElementById("myname").innerHTML= userinfo.name;
        document.getElementById("mydesigination").innerHTML= userinfo.username;

    });
}
