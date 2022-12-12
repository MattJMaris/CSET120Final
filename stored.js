
var inputKey = document.getElementById("inputKey");
var inputValue = document.getElementById("inputValue");

var btnInsert = document.getElementById("btnInsert");
var lsOutput = document.getElementById("lsOutput");

// btnInsert.onclick = function() {
//     var key = inputKey.value;
//     var value = inputValue.value;

//     if (key && value) {
//         localStorage.setItem(key, value);
//         location.href = "http://127.0.0.1:5501/Landingpage.HTML"; 
//     }
// };

for (let i=0; i<localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);

    // lsOutput.innerHTML += `${key}<br/>`;
};
