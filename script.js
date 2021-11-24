
// show popup
document.getElementById("goPopup").addEventListener('click',function(){
 let body = this.getElementsByTagName('body');
 
    document.querySelector('.big-model').style.display= 'flex';
    document.querySelector('video').play();
    document.querySelector('body').style.overflow='hidden';
   
});
// close popup
document.getElementById("close").addEventListener('click',function(){

    document.querySelector('.big-model').style.display= 'none';
    document.querySelector('video').pause();
    document.querySelector('body').style.overflow='visible ';
});



function adding(){
    document.querySelector('.big-model').style.display= 'flex';
    document.querySelector('video').play();
}

function closing(){
    document.querySelector('.big-model').style.display= 'flex';
    document.querySelector('video').pause();
    document.querySelector('video').currentTime = 0;
    
}