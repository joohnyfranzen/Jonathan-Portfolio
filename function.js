function showHide(target_id) {
    const target = document.getElementById(target_id).style
    const onbuttons = document.getElementsByClassName("onbutton")

    for(var i = 0;i<onbuttons.length;i++) {
        onbuttons[i].style.display = "none"
    }    

    var displayNone = target.display == "none" ? true : false
    displayNone = !displayNone
    displayNone ? target.display = "none" :
    target.display = "block"
}

