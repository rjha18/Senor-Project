function printCookie() {
    var name = "cart" + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            console.log(JSON.parse(c.substring(name.length, c.length)));
        }
    }
    console.log("hi");
}