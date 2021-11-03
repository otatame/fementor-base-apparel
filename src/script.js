function validateEmail(inputText){
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailFormat)){
        alert("Valid Email address!")
    }else if(inputText.value == ""){
        alert("Your email is required")
    }else{
        alert("Please enter a valid email address")
    }
}