console.log('Hello!');

let img = document.getElementById('duck-img');

let likeText = document.getElementById('likes');
let dislikeText = document.getElementById('dislikes');

let likesCount = 0;
let dislikesCount = 0;

let touchstartX = 0;
let touchendX = 0;

img.addEventListener('load', function(event){
    console.log('img load', event);
    event.target.classList.remove('w3-animate-top');
});

function reloadImg(){
    img.classList.add('w3-animate-top');
    img.src = 'https://random-d.uk/api/randomimg';
    
}

function dislikeFunction(){
    dislikesCount++;
    //console.log('ArrowLeft ',dislikesCount);
    dislikeText.textContent =`sevmediklerim : ${dislikesCount}`;
    reloadImg();
}

function likeFunction(){
    likesCount++;
    //console.log('ArrowRight ', likesCount);
    likeText.textContent = `sevdiklerim : ${likesCount}`;
    reloadImg();
}

document.addEventListener('keydown', function(event){
    
    if(event.key === 'ArrowLeft'){
        dislikeFunction();
    }else if(event.key === 'ArrowRight'){
        likeFunction();
    }

});


document.addEventListener('touchstart', function(event){
    //console.log('touchstart',event.touches[0].clientX);
    touchstartX = event.touches[0].clientX;
});

document.addEventListener('touchend', function(event){
    //console.log('touchend', event.changedTouches[0].clientX);
    touchendX = event.changedTouches[0].clientX;
        160 - 30
    if(touchendX - touchstartX > 0){
        likeFunction();
    }else {
        dislikeFunction();
    }

});
