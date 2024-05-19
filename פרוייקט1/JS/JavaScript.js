var myDiv;

function ShowBigImg(Obj) {
    myDiv = document.querySelector('#divImg');
    myDiv.style.display = "block";
    var thesrc = Obj.src;
    document.querySelector("#BigImg").src = thesrc;
}

function hideBigImg() {
    myDiv.style.display = "none";
}
