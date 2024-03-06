let qaList = document.querySelectorAll('.qaBox li');
let qaDetail = document.querySelectorAll('.qaDetail');
let qaTit = document.querySelectorAll('.qaTit');

menuAccord();

window.addEventListener('resize',function(){
    menuAccord();
});


function menuAccord(){

    let detailBox = [];
    qaDetail.forEach(function(item){
        let detailH = item.getBoundingClientRect().height;
        detailBox.push(detailH);
    });
    
    let titBox = [];
    qaTit.forEach(function(item){
        let titH = item.getBoundingClientRect().height;
        titBox.push(titH);
    });
    
    
    qaList.forEach(function(item,index){
        item.addEventListener('click',function(){
         let listH = item.getBoundingClientRect().height;
    
         let totalH = titBox[index] + detailBox[index];
            if(listH < totalH){
                this.style.height = `${totalH}px`;
                item.style.setProperty('--qaBtn','-45deg')
            }
            else if(listH === totalH){
                this.style.height = '5rem';
                item.style.setProperty('--qaBtn','0deg')
            }
        });
    });
};

let nav = document.querySelector('.nav1');
let membership = document.querySelector('.membership');


window.addEventListener('scroll',function(){
    let mbsY = membership.getBoundingClientRect().bottom;

    if(mbsY < 0){
        nav.style.visibility = 'visible';
        nav.style.opacity = '1';
    }else{
        nav.style.visibility = 'hidden';
        nav.style.opacity = '0';
    }
});

let hint = document.querySelector('.hint');
let page1 = document.querySelector('.page1');
hint.addEventListener('click',function(){
    let page1Y = page1.getBoundingClientRect().height;

    window.scrollTo({
        top: `${page1Y}`,
        left: 0,
        behavior:'smooth'
    });
});