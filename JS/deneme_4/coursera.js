function val(){

    var uname = document.getElementById('username').value;
    if(!uname){
        document.getElementById("error").innerHTML = "Enter a username";
        return false;
    }
    else{
        // I want to submit form if this else statement executes.
    }


}
