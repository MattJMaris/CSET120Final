function ManagerLog(){

     let btnInsert = document.getElementById("btnInsert")
    btnInsert.addEventListener("click", (e) => {
        e.preventDefault();
    let username ="Manager1"
    let password = "Manager1"
        inputUser = document.querySelector('inputKey')
        inputPass = document.querySelector('inputValue')
        if (inputUser === "Eli" || inputPass === "password") {
            alert("Username and Password do not match. <br>Please try again.")
        }
        if (inputUser === username && inputPass === password) {
            alert("Success! <br>You are now signin")
        }
        btnInsert.onclick = function() {
            var key = inputKey.value;
            var value = inputValue.value;
        
            if (key && value) {
                localStorage.setItem(key, value);
                location.href = "http://127.0.0.1:5501/manager-landing.html"; 
            }
        };
    })
}
    window.onload = ManagerLog