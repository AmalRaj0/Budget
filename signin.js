function Signin(){
    userdetails={
UserName:user.value,
Emailid:email.value,
Password:pass.value,
income:0,
expense:0,
incomeType:"",
expenseType:"",
balance:0,
expamount:0
    }
    if(user.value==0||email.value==0||pass.value==0){
        alert(
            "FullFIll the FormFirst"
        )
                }  
    else if(user.value in localStorage){
        alert("Username already Exist")}
    else{
       localStorage.setItem(userdetails.UserName,JSON.stringify(userdetails))
       alert("SignIn Successful")
       window.location="index.html"
    }    
}