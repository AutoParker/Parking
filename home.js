var userin=0;

function signedin(){
    alert('Logged in');
    userin=1;

    document.getElementById('loginn').href='Loggedin.html'
};

function checklogin(){
    if(userin == 1){
        window.location.replace("Loggedin.html");
    }
}