function validate(){
    var username = document.getElementById("uname");
    var password = document.getElementById("pw");

    if(username.value.trim() ==""){
        alert("Please enter username");
        return false;
    }
    else if(password.value.trim() ==""){
        alert("Please enter password");
        return false;
    }
    else if(password.value.trim().length<8){
        alert("Password must be atleast 8 characters");
        return false;
    }
    else{
        alert("Login Successfully");
        true;
    }
}


