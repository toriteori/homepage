window.onload = function () {
  let monthAd = document.querySelector(".monthlyWrap");
  let angleDown = document.querySelector("#angleDown");

  document.querySelector(".monthlyBtn").addEventListener("click", function () {
    monthAd.classList.toggle("slideDown");
    angleDown.classList.toggle("angleSpin");
  });

  //스크롤 이벤트

  window.addEventListener("scroll", function () {
    slideTxt();

    let resizeIw = window.innerWidth;
    if (resizeIw > 1100) {
      spin();
    }
  });

  //이미지 slideInOut 효과
  function slideTxt() {
    let eveBox = document.querySelector(".section3");
    let evePos = eveBox.getBoundingClientRect().top;
    //해당 영역 좌표값에 따라서 이벤트를 주기 위한 변수 선언

    let txtLeft = document.querySelector(".txtLeft");
    let txtRight = document.querySelector(".txtRight");

    if (evePos < 700) {
      txtLeft.classList.add("slideIn");
      txtRight.classList.add("slideIn");
    } else {
      txtLeft.classList.remove("slideIn");
      txtRight.classList.remove("slideIn");
    }
  }

  // 이미지 Y축 회전효과
  function spin() {
    let spinBox = document.querySelector(".section5");
    let spinPos = spinBox.getBoundingClientRect().top;
    //해당 영역 좌표값에 따라서 이벤트를 주기 위한 변수 선언

    let spinImg = [];
    spinImg[0] = document.querySelector(".map");
    spinImg[1] = document.querySelector(".catering");

    if (spinPos < 700) {
      spinImg[0].classList.add("spin");
      spinImg[1].classList.add("spin");
    } else {
      spinImg[0].classList.remove("spin");
      spinImg[1].classList.remove("spin");
    }
  }
  //마우스 enter 시 가로 스크롤 이벤트
  let rail = document.querySelector(".rail");
  let railImg = document.querySelector(".railImg");
  let isEnter = false;

  rail.addEventListener("mouseenter", function () {
    isEnter = true;
  });
  railImg.addEventListener("mousemove", function (e) {
    if (isEnter === true) {
      let speedX = 1.5;
      let railImgX = e.clientX * speedX;

      this.style.left = -railImgX + "px";
    }
  });
  railImg.addEventListener("mouseleave", function () {
    isEnter = false;
  });
  window.addEventListener("resize", function () {
    railImg.style.left = -130 + "px";
  });
};

//메뉴 슬라이드 업다운

$(function () {
  let menu = $(".mainMenu");
  let menuWrap = $(".gnb2Wrap");

  let subWrap = $(".subWrap");

  $(".menu").mouseenter(function () {
    menuWrap.stop().animate({
      height: "250px",
    });
  });

  $(".menu").mouseleave(function () {
    menuWrap.stop().animate({
      height: "50px",
    });
  });

  menu.mouseenter(function () {
    $(this).find(subWrap).stop().fadeIn(500);
    $(this).find("a").addClass("fontColor");
  });
  menu.mouseleave(function () {
    $(this).find(subWrap).stop().fadeOut(100);
    $(this).find("a").removeClass("fontColor");
  });

  //resize 이벤트 한번만 실행

  let delay = 100;
  let timer = null;

  $(window).on("resize", function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      if (window.innerWidth <= 750) {
        changeImg1();
        changeImg2();
      } else {
        originImg1();
        originImg2();
      }
    }, delay);
  });

  let slideImg = $(".swiper-slide");
  //이미지 원본
  function originImg1() {
    slideImg
      .find(".changeImg1")
      .attr(
        "src",
        "https://www.dunkindonuts.co.kr/upload/mbanner/1641602527.png"
      );
    slideImg
      .find(".changeImg2")
      .attr(
        "src",
        "https://www.dunkindonuts.co.kr/upload/mbanner/1641607818.png"
      );
    slideImg
      .find(".changeImg3")
      .attr(
        "src",
        "https://www.dunkindonuts.co.kr/upload/mbanner/1688722092.png"
      );
    slideImg
      .find(".changeImg4")
      .attr(
        "src",
        "https://www.dunkindonuts.co.kr/upload/mbanner/1677899702.jpg"
      );
    slideImg
      .find(".changeImg5")
      .attr(
        "src",
        "https://www.dunkindonuts.co.kr/upload/mbanner/1688722147.png"
      );
    slideImg
      .find(".changeImg6")
      .attr(
        "src",
        "https://www.dunkindonuts.co.kr/upload/mbanner/1575611684.png"
      );
    slideImg
      .find(".changeImg7")
      .attr(
        "src",
        "https://www.dunkindonuts.co.kr/upload/mbanner/1580951826.png"
      );
  }

  // 리사이즈 이미지
  function changeImg1() {
    slideImg
      .find(".changeImg1")
      .attr(
        "src",
        "http://www.dunkindonuts.co.kr/upload/mbanner/1641602527(0).png"
      );
    slideImg
      .find(".changeImg2")
      .attr(
        "src",
        "http://www.dunkindonuts.co.kr/upload/mbanner/1641602561.png"
      );
    slideImg
      .find(".changeImg3")
      .attr(
        "src",
        "http://www.dunkindonuts.co.kr/upload/mbanner/1688722092(0).png"
      );
    slideImg
      .find(".changeImg4")
      .attr(
        "src",
        "http://www.dunkindonuts.co.kr/upload/mbanner/1677899702(0).jpg"
      );
    slideImg
      .find(".changeImg5")
      .attr(
        "src",
        "http://www.dunkindonuts.co.kr/upload/mbanner/1688722147(0).png"
      );
    slideImg
      .find(".changeImg6")
      .attr(
        "src",
        "http://www.dunkindonuts.co.kr/upload/mbanner/1575611684(0).png"
      );
    slideImg
      .find(".changeImg7")
      .attr(
        "src",
        "http://www.dunkindonuts.co.kr/upload/mbanner/1575611684(0)(1)(2).png"
      );
  }

  function originImg2() {
    $(".section2 h2 img").attr(
      "src",
      "http://www.dunkindonuts.co.kr/assets/images/main/tit_new_event.png"
    );
    $(".section4 h2 img").attr(
      "src",
      "https://www.dunkindonuts.co.kr/assets/images/main/tit_dunkin_menu.png"
    );
    $(".section6 h2 img").attr(
      "src",
      "https://www.dunkindonuts.co.kr/assets/images/main/tit_dunkin_sns.png"
    );
  }
  function changeImg2() {
    $(".section2 h2 img").attr(
      "src",
      "img/tit_new_event.png"
    );
    $(".section4 h2 img").attr(
      "src",
      "img/tit_menu_mobile.png"
    );
    $(".section6 h2 img").attr(
      "src",
      "img/tit_sns_mobile.png"
    );
  }
});
//제이쿼리 끝

//슬라이드 이미지 스와이퍼 사용

new Swiper(".section1 .mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".section1 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".section1 .swiper-button-next",
    prevEl: ".section1 .swiper-button-prev",
  },
});

new Swiper(".section2 .mySwiper", {
  slidesPerView: 1,
  spaceBetween: 5,
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".section2 .swiper-pagination",
    clickable: true,
  },
});

new Swiper(".section4 .mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  slidesPerView: "auto",
  initialSlide: 2,
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
