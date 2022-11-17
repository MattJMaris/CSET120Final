function passwordHide() {
    var x = document.getElementById("placeholder");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password"
    }
}

var inputKey = document.getElementById("inputKey");
var inputValue = document.getElementById("inputValue")
var btnInsert = document.getElementById("btnInsert");
var lsOutput = document.getElementById("lsOutput")

btnInsert.onclick = function() {
    var key = inputKey.ariaValueMax;
    var value = inputValue.value;

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    }
}

for (let i=0; i<localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);

    lsOutput.innerHTML += `${key}`;
}

//Need to make location.reload() take you to the landingPage