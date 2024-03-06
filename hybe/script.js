let menu = document.querySelectorAll(".menu"),
  subLi = document.querySelectorAll(".sub li"),
  menuA = document.querySelectorAll(".menu > a");
//각 메뉴 슬라이드를 위한 변수

let menuBg = document.querySelector(".navBg");
let langBg = document.querySelector(".langBg");
// 메뉴 슬라이드시 각 배경을 위한 변수

let lang = document.querySelector(".lang"),
  langKor = document.querySelector(".langKor"),
  langOther = document.querySelectorAll(".langOther li");

// language 슬라이드 시 변수

let sub = document.querySelectorAll('.menu .sub');

menuA.forEach(function(item){
  item.addEventListener('click',function(){
    item.nextElementSibling.classList.toggle('accordion');
   
  });
});


let onColor = (item) => {
  item.style.color = "#fff";
};
let offColor = (item) => {
  item.style.color = null;
};
// 슬라이드 시 메인메뉴 색상변경 함수

let mainOn = () => {
  menuBg.style.height = '37.7rem';
  langKor.style.setProperty("--fontColor", "#f5ff00");
};
// 슬라이드 다운 및 슬라이드시 변경되는 효과 함수


let mainOff = () => {
  menuBg.style.height = "0";
  langKor.style.setProperty("--fontColor", "#111");
};
//슬라이드 업 함수

let logoChange = () => {
  let logoImg = document.querySelector(".logo a");
  let changeUrl = "https://hybecorp.com/images/common/logo-symbol-l.svg";
  logoImg.style.width = "13rem";
  logoImg.style.height = "6rem";
  logoImg.style.backgroundImage = `url(${changeUrl})`;
};
let logoBack = () => {
  let logoImg = document.querySelector(".logo a");
  let backUrl = "https://hybecorp.com/images/common/logoB.svg";
  logoImg.style.width = "11rem";
  logoImg.style.height = "2.8rem";
  logoImg.style.backgroundImage = `url(${backUrl})`;
};
//슬라이드 로고 변경 함수

function downSl(){
  menuA.forEach(onColor);
  subLi.forEach(function(item){
    item.style.height = '4rem';
  });
  mainOn();
  logoChange();
};

function upSl(){
  menuA.forEach(offColor);
  subLi.forEach(function(item){
    item.style.height = '0';
  });
  mainOff();
  logoBack();
};

function sizeW(){
  let menuW = window.innerWidth;

  if(menuW > 1300){
    menu.forEach(function(item){
      item.addEventListener("mouseenter", downSl);
      item.addEventListener("mouseleave", upSl);
      });
      subLi.forEach(function(item){
        item.style.height = '0';
      });
    }else{
      menu.forEach(function(item){
        item.removeEventListener("mouseenter", downSl);
        item.removeEventListener("mouseleave", upSl);
    });
    subLi.forEach(function(item){
      item.style.height = '4rem';
    });
  }
};
window.addEventListener('load', sizeW)
window.addEventListener('resize', sizeW);



//헤더 메인메뉴 슬라이드 효과

langKor.addEventListener("mouseenter", function (){
  langOther.forEach(function (item) {
    item.style.height = "4rem";
    item.style.visibility = "visible";
  });
  langBg.style.height = "20rem";
  langKor.style.setProperty("--fontColor", "#f5ff00");
});
lang.addEventListener("mouseleave", function (){
  langOther.forEach(function (item) {
    item.style.height = "0px";
    item.style.visibility = "hidden";
  });
  langBg.style.height = "0px";
  langKor.style.setProperty("--fontColor", "#111");
});
//헤어 언어메뉴 슬라이드 효과

let gnb = document.querySelector('.gnb'),
    mobileBtn = document.querySelector('.mobileBtn'),
    menuIcon =  document.querySelector('.mobileBtn i'),
    navWrap = document.querySelector('.navWrap');

let bodyW = document.querySelector('body');

mobileBtn.addEventListener('click',function(){
  navWrap.classList.toggle('appear');  

  if(menuIcon.className === 'fa-solid fa-bars-staggered'){
    menuIcon.className = 'fa-solid fa-x';
     mobileBtn.style.color = '#f5ff00';
     bodyW.style.overflow = 'hidden';
  }else{
    menuIcon.className = 'fa-solid fa-bars-staggered';
    mobileBtn.style.color = '#111';
    bodyW.style.overflow = 'auto';
  }
});
// 모바일 메뉴 효과

let company = document.querySelectorAll(".company");
let moveBtn = document.querySelectorAll('.moveBtn');

window.addEventListener('scroll',() => {
  let yValue = window.scrollY;
  moveBtn.forEach(function(item){
    item.addEventListener('click' , function(){
      if(yValue > 0){
        window.scrollTo({top : 0});
      }
    });
  });
});
function resize1 (){
  company.forEach(function(item){
    item.style.height = '380rem';
    for(cp of company){
      cp.classList.add('on');
    }
    company[0].classList.remove('on');
  });
}; 
function resize2 (){
  company.forEach(function(item){
    item.style.height = '915rem';
    for(cp of company){
      cp.classList.add('on');
    }
    company[1].classList.remove('on');
  });
}; 
function resize3 (){
  company.forEach(function(item){
    item.style.height = '515rem';
    for(cp of company){
      cp.classList.add('on');
    }
    company[2].classList.remove('on');
  });
}; 
company[1].classList.add('on');
company[2].classList.add('on');

moveBtn[0].addEventListener('click', resize1);
moveBtn[1].addEventListener('click', resize2);
moveBtn[2].addEventListener('click', resize3);

moveBtn[0].classList.add('off');
moveBtn.forEach(function(item){
  item.addEventListener('click',function(){
    for(mb of moveBtn){
      mb.classList.remove('off');
    }
    this.classList.add('off');
  });
});

// 기존 홈페이지와 다르게 메인 페이지 내에서만 볼 수 있게 크기 변경

let slideWrap = document.querySelector(".slideWrap"),
  slideBox = document.querySelector(".slideBox"),
  slides = slideBox.querySelectorAll(".slide"),
  slideCnt = slides.length,
  currentIdx = 0,
  pager = slideWrap.querySelector(".pager"),
  pagerHTML = "",
  timer,
  prev = document.querySelector("#prev"),
  next = document.querySelector("#next");

if (slideCnt > 0) {
  slides.forEach(function (item, index) {
    item.style.left = `${index * 100}%`;
    pagerHTML = pagerHTML + `<span></span>`;
  });
  pager.innerHTML = pagerHTML;
}

let pagerBtn = pager.querySelectorAll("span");

function goToSlide(idx) {
  slideBox.style.left = `${idx * -100}%`;
  currentIdx = idx;

  for (pb of pagerBtn) {
    pb.classList.remove("active");
  }
  pagerBtn[currentIdx].classList.add("active");

  if (currentIdx == slideCnt - 1) {
    next.classList.add("disabled");
  } else {
    next.classList.remove("disabled");
  }
  if (currentIdx == 0) {
    prev.classList.add("disabled");
  } else {
    prev.classList.remove("disabled");
  }
}
next.addEventListener("click", () => {
  if (currentIdx != slideCnt - 1) {
    goToSlide(currentIdx + 1);
  }
});

prev.addEventListener("click", () => {
  if (currentIdx > 0) {
    goToSlide(currentIdx - 1);
  }
});

goToSlide(0);

let footerInner = document.querySelector(".footerInner"),
  trailBox = document.querySelector(".artTrail"),
  trailItem = document.querySelectorAll(".artTrail li"),
  trailLen = trailItem.length;

trailItem.forEach(function (item, index) {
  item.style.left = `${index * 100}%`;
});

// footerInner.addEventListener(
//   "wheel",
//   function (e) {
//     leftRoll(e);
//   },
//   { passive: true }
//   //passive Event Listener 스크롤 동작 최적화..?
//   // 스크롤이 가능한 지역인지 확인이 필요하자만 이 passive값을 true로 등록하면 지역을 확인해야혀는 과정을 거치지 않아도 되어서 동작이 비동기처럼 가능하다..?
//   // 스크롤 최적화를 위한 좋은 옵션이다..!
// );

// let wrapX = 0;
// function leftRoll(e) {
//   wrapX += Math.sign(e.deltaY) * 20;
//   //     Math.sign은 주어진 수의 부호를 나타내는 +1/-1을 반환 ,단 제공한 수가 0일 경우 부호에따라 +0/-0반환
//   // deltaY는 내리면 양수 올리면 음수를 반환
//     wrapX = Math.min(Math.max(0 , wrapX),(trailLen - 1) * 100) ;
//     trailBox.style.left = `${-wrapX}%`;  
// }

let fnbItem = document.querySelector('.fnbItem'),
    fnbBtn = document.querySelector('#fnbBtn');

    fnbBtn.addEventListener('click' , () => {
      fnbItem.classList.toggle('up');
      fnbBtn.classList.toggle('opaci');
    });



