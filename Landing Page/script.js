document.addEventListener('DOMContentLoaded',function(){
let firstvideo = document.getElementById('firstVideo')
let secondVideo = document.getElementById('secondVideo')
let thirdVideo = document.getElementById('thirdVideo')
let fourthVideo = document.getElementById('fourthVideo')

firstvideo.onclick = togglePause1;
secondVideo.onclick = togglePause2;
thirdVideo.onclick = togglePause3;
fourthVideo.onclick = togglePause4;

function togglePause1(){
    if(firstvideo.paused){
       firstvideo.play();
    }else{
      firstvideo.pause();
    }
}
function togglePause2(){
    if(secondVideo.paused){
       secondVideo.play();
    }else{
        secondVideo.pause();
    }
}
function togglePause3(){
    if(thirdVideo.paused){
        thirdVideo.play();
    }else{
        thirdVideo.pause();
    }
}
function togglePause4(){
    if(fourthVideo.paused){
        fourthVideo.play();
    }else{
        fourthVideo.pause();
    }
}
});
