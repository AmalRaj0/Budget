
currentUser=JSON.parse(localStorage.getItem("currentuser"))
uname.innerHTML=currentUser.UserName.toUpperCase()
console.log(currentUser);
function Add(){
    if(incomeType.value==0||incomeAmount.value==0){
        alert("Enter valid data")
    }else{
     currentUser.incomeType=incomeType.value
     currentUser.income= Number(incomeAmount.value)
    //  currentUser.balance=0
     currentUser.balance += Number(incomeAmount.value)
     localStorage.setItem("currentuser",JSON.stringify(currentUser))
     alert("Added Successfully")  
     // 12344 
    }
    incomeDetails=JSON.parse(localStorage.getItem("currentuser"))
    console.log(incomeDetails);
    let time=new Date()
    type.innerHTML=incomeDetails.incomeType
    Amount.innerHTML=`+${incomeDetails.income}`
    Balance.innerHTML=incomeDetails.balance
    DateTime.innerHTML= date = time.getDate() + "/" +time.getMonth() + "/" + time.getFullYear() + "," +time.getHours()+ ":" + time.getMinutes()
    incomeType.value="" 
    incomeAmount.value="" 
}



 
 function sub(){
 currentUser=JSON.parse(localStorage.getItem("currentuser"))
if(expenseType.value==0||expenseAmount.value==0){
    alert("FullFill the data")
}else{
currentUser.expenseType=expenseType.value
currentUser.expense+=Number(expenseAmount.value)
currentUser.balance-=Number(expenseAmount.value)
currentUser.expamount=Number(expenseAmount.value)
// console.log(currentUser);
localStorage.setItem("currentuser",JSON.stringify(currentUser))
alert("successfull")
currentUser=JSON.parse(localStorage.getItem("currentuser"))
bal.innerHTML=`${currentUser.balance}<span class="ms-1 fs-3">Rs</span>`
exp.innerHTML=`${currentUser.expense}<span class="ms-1 fs-3">Rs</span>`
expDetails=JSON.parse(localStorage.getItem("currentuser"))
exptype.innerHTML=expDetails.expenseType
expamount.innerHTML="-"+ expDetails.expamount
expExp.innerHTML=expDetails.balance
let time=new Date()
expdate.innerHTML= date = time.getDate() + "/" +time.getMonth() + "/" + time.getFullYear() + "," +time.getHours()+ ":" + time.getMinutes()
expenseAmount.value=""
expenseType.value=""
}
}
// nvkjrebv 

// console.log(expDetails);
function lgout(){
window.location="index.html"
}
function clearr(){
    window.location="home.html"
}



