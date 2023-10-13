$('.nav>ul>li').mouseover(function(){
    $(this).find('.submenu').stop().slideDown();
});

$('.nav>ul>li').mouseout(function(){
    $(this).find('.submenu').stop().slideUp();
});


/* 📍 slide */

let currentIndex=0;
/* console.log(currentIndex) 0이 나오면 됨 */

/* setInterval(어떤일, 시간) 시간마다 어떤 일이 일어난다 무한 반복 */
/* setInterval(function(){}, 3000); 3초마다 함수가 실행된다 */

/* if(조건문){
    조건문이 참일 때 실행
}else{
    조건문이 거짓일 때 실행
} */

setInterval(function(){
    if(currentIndex<2){
        currentIndex++;
        /* ++ = 1씩 더한다 */
    }else{
        currentIndex=0;
    }
    let slidePosition=currentIndex * (-1000)+"px";
    console.log(slidePosition)
    
    /* $('.slidelist').animate({실행문}),시간) */
    $('.slidelist').animate({
        left: slidePosition
    },1000);
},3000);
