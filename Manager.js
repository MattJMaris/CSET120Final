function ManagerLog()
    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
    let username ="Manager1"
    let password = "Manager1"
        inputUser = document.querySelector('inputKey')
        inputpass = document.querySelector('inputValue')
        if (inputeUser === "username" || inputpass === "password") {
            document.querySelector('messageDetails').innerHTML = "Username and Password do not match. <br>Please try again."
        }
        if (inputeUser === "Manager1" && inputpass === "Manager1") {
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