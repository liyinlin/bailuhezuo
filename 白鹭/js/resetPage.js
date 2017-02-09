/**
 * Created by cz on 2016/6/24.
 */
function resetpage(){
    var html=document.getElementsByTagName("html")[0];
    var width=document.documentElement.clientWidth;
    var scale = width*100/640;
    html.style.fontSize=scale + "px";
    document.body.style.opacity="1";
}
window.onload =function () {
    resetpage();
}
window.onresize = function () {
    resetpage();
}