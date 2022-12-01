function ManagerLog()
    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
    let username ="Bowser"
    let password = "peach"
        inputUser = document.querySelector('inputKey')
        inputpass = document.querySelector('inputValue')
        if (inputeUser === "username" || inputpass === "password") {
            document.querySelector('messageDetails').innerHTML = "Username and Password do not match. <br>Please try again."
        }
        if (inputeUser === "username" && inputpass === "password") {
            document.querySelector('messageDetails').innerHTML = "Success! <br>You are now signin"
        }
        btnInsert.onclick = function() {
            var key = inputKey.value;
            var value = inputValue.value;
        
            if (key && value) {
                localStorage.setItem(key, value);
                location.href = ""; 
            }
        };
    })