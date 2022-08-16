let span = document.querySelector(".up");

window.onscroll = function(){
    // if(this.scrollY >=300){
        
    // }
    // else{
        
    // }
    this.scrollY >=10 ? span.classList.add("show") : span.classList.remove("show");
};
span.onclick = function(){
    window.scrollTo({
        top:0,
        behavior: "smooth",
    });

};

// Videos
let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');
let title = document.querySelector('.main-video .title');

listVideo.forEach(video =>{
    video.onclick = ()=>{
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if(video.classList.contains('active')){
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
            let text = video.children[1].innerHTML;
            title.innerHTML = text;
        }
    }
})