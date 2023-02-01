function toggle(){

    let x = document.getElementById("navDiv");
    let y = document.getElementById("headerDiv");

    if (x.style.display=== "none") {
        x.style.display = "block";
        y.style.height = "auto";
    }else{
        x.style.display = "none";
    }
}