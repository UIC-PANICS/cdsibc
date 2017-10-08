var originData = document.getElementsByName("show");

function barBGInit(){
    var showNumber = showBarNumber();
    for(var i = 0; i < showNumber; i ++){
        var r = Math.floor(150 - 100*(i/showNumber));
        //var g = Math.floor(150*(i/showNumber));
        var g = Math.floor(90 - 70*(i/showNumber));
        var b = Math.floor(220 - 130*(i/showNumber));
        originData[i].style.cssText = "background-color: rgb(" + parseInt(r) + "," + parseInt(g) + "," + parseInt(b) + ")";
    }

}

function showBarNumber(){
    //console.log("Total Show Number: " + originData.length);
    return originData.length;
}