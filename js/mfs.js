document.getElementById("btn-login").addEventListener("click", function(event){
    event.preventDefault();
    
    const phoneNumber = document.getElementById("phone-number").value;
    // console.log(phoneNumber);
    const pinCode = document.getElementById("pin").value;
    // console.log(pinCode);
    if(phoneNumber === "01786843395" && pinCode === "7335"){
        window.location.href="home.html"
    }
    else{alert("Your phone number or password is wrong")}
})