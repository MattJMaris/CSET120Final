function ClickforAlert() {
    var everythingitem = JSON.parse(localStorage.getItem('everythingitem'))
    var string = document.getElementById("NameCard").value + " ordered: "
    for (let i = 0; i < everythingitem.length; i++) {
    string = string + everythingitem[i]["title"]
    string = string + everythingitem[i]["price"]
}

alert(string);  
}

