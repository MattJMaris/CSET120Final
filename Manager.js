function ManagerLog(){

     let btnInsert = document.getElementById("btnInsert")
    btnInsert.addEventListener("click", (e) => {
        e.preventDefault();
    let username ="Manager1"
    let password = "Manager1"
        inputUser = document.getElementById('inputKey').value
        inputPass = document.getElementById('inputValue').value
        if (inputUser === "Eli" && inputPass === "password") {
            alert("Username and Password do not match. <br>Please try again.")
            // location.href = "http://127.0.0.1:5500/CSET120Final/manager-landing.html";
        }
        else if(inputUser === username && inputPass === password) {
            alert("Success! <br>You are now signin")
            location.href = "http://127.0.0.1:5500/CSET120Final/manager-landing.html";
        }
        else { alert("wrong info loser")
            
        }
            if (inputUser && inputPass) {
                localStorage.setItem(inputUser, inputPass);
                // location.href = "http://127.0.0.1:5500/CSET120Final/manager-landing.html"; 
            }
        });
    }
    
    window.onload = ManagerLog