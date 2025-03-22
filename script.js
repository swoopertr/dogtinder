console.log('Hello!');

let likeText = document.getElementById('likes');
let dislikeText = document.getElementById('dislikes');

let likesCount = 0;
let dislikesCount = 0;


function reloadImg(){
    let img = document.getElementById('duck-img');
    img.src = 'https://random-d.uk/api/randomimg';
}

document.addEventListener('keydown', function(event){
    
    if(event.key === 'ArrowLeft'){
        dislikesCount++;
        console.log('ArrowLeft ',dislikesCount);
        dislikeText.textContent =`sevmediklerim : ${dislikesCount}`;
        reloadImg();
    }else if(event.key === 'ArrowRight'){
        likesCount++;
        console.log('ArrowRight ', likesCount);
        likeText.textContent = `sevdiklerim : ${likesCount}`;
        reloadImg();
    }

});
