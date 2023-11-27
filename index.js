function signUp(){
    if(pass.value==0||user.value==0 ){
        alert("FullFill the form")
    }else if(user.value in localStorage){
         details1=JSON.parse(localStorage.getItem(user.value))
        // console.log(details1);
    }else{
        alert("can't find this username")
    }
    console.log(details1);
if(details1.Password==pass.value){
    window.location="home.html"
    localStorage.setItem("currentuser",JSON.stringify(details1))
}else{
    alert("wrong password")
}

}
function signIn(){
    window.location="SignIn.html"
}