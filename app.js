
function myLogin(){
    var username = document.getElementById("username").value;
var pass  = document.getElementById("pass").value;
if (username=='umair' && pass == '123'){
    location.href = "consumer.html";

}
else{
    document.getElementById('error').innerHTML= 'Wrong username or password.';
    document.getElementById('checkbox').style.display="none";
}
}

function caseApp(){

    
var meter = document.getElementsByName('meter');
meter[0].addEventListener('click', check_1());
function check_1() {
  for (var i = 0; i < meter.length; i++) {
    var rcheck = meter[i].checked;
    if (rcheck) {
     meterval=meter[i].value;
    }

  }
}

    //  var meterval;
var caseVal = document.getElementsByName('case');
caseVal[0].addEventListener('click', check());
function check() {
  for (var i = 0; i < caseVal.length; i++) {
    var rcheck = caseVal[i].checked;
    if (rcheck) {
      caseval=caseVal[i].value;
    }

  }
}
if (meterval=='yes' && caseval=='active'){
    location.href = "active_yes.html";

}
else if(meterval=='no' && caseval=='active'){
    location.href = "image.html";

}

else if(meterval=='yes' && caseval=='inactive'){
    location.href = "inactive_yes.html";

}
else if(meterval=='no' && caseval=='inactive'){
  location.href = "inactive_yes.html";

}
else {
  alert("Enter Valid selection")
}




}