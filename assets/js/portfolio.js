function setScreenSize() {
    //먼저 뷰포트 높이를 얻고 1%를 곱하여 vh 단위 값을 얻습니다.
    let vh = window.innerHeight * 0.01;
    //그런 다음 --vh 사용자 정의 속성의 값을 문서의 루트로 설정합니다.
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}



// 커서 이벤트 함수
function followCursor (){
    const cursorIcon = document.querySelector('#cursor');

    if (window.innerWidth > 1400) {
        function moveCursor (event){
            // 아이콘 마우스 위치
            cursorIcon.style.left = event.clientX - cursorIcon.clientWidth / 2  + 'px';
            cursorIcon.style.top = event.clientY - cursorIcon.clientHeight / 2  + 'px';
        }

        window.addEventListener('mousemove', moveCursor);
    }
}

// 입장전 이벤트 함수 (마우스 enter/leave)
function enterEvent(selector){
    // "selector가 falsy한 값(undefined, null, false, 0, 빈 문자열 등)인 경우 '.enter-choice-wrap' 기본값
    selector = selector || '.enter-choice-wrap';

    if (document.querySelectorAll(selector).length > 0) {
        document.querySelectorAll(selector).forEach(function (element){
            let childEl = element.querySelector('.choice-info-box');

            childEl.addEventListener('mouseenter', function (){
                this.classList.add('active');
                this.nextElementSibling.classList.add('active');
            });

            childEl.addEventListener('mouseleave', function (){
                this.classList.remove('active');
                this.nextElementSibling.classList.remove('active');
            });
        });
    }
}

// tab 함수
function commTab (selector){
    selector = selector || '.tab-wrap, .bg-tab-wrap';

    if (document.querySelectorAll(selector).length > 0) {
        document.querySelectorAll(selector).forEach(function (element){

            let btnTabs = element.querySelectorAll('.btn-tab');
            let tabContents = element.querySelectorAll('.tab-content');
            let bgSignatures = element.querySelectorAll('.bg-visual-item');

            // 중복 클릭 막기 위한 변수
            let isClickAllowed = true;
            let activeTabIndex = null;

            btnTabs.forEach(function (btnTab, index) {
                // 탭버튼 활성화
                if (btnTab.parentElement.classList.contains('active')) {
                    tabContents[index].style.display = 'block';
                    bgSignatures[index].classList.add('active');
                    activeTabIndex = index;
                } else {
                    tabContents[index].style.display = 'none';
                }

                // 탭버튼 클릭 이벤트
                btnTab.addEventListener('click', function (event) {
                    // 중복 클릭 방지 및 활성화 된 탭 이벤트 방지
                    if (!isClickAllowed || (activeTabIndex !== null && activeTabIndex === index)) {
                        return;
                    }
                    isClickAllowed = false;
                    
                    // 탭버튼 활성화
                    btnTabs.forEach(function (btnTab){
                        btnTab.parentElement.classList.remove('active');
                    });
                    btnTab.parentElement.classList.add('active');

                    // 일반탭 작동
                    tabContents.forEach(function (tabContent){
                       tabContent.style.display = 'none';
                    });
                    tabContents[index].style.display = 'block';

                    // 배경탭 작동
                    bgSignatures.forEach(function (bgSignature, i){
                        bgSignature.classList.remove('active');
                        bgSignature.style.zIndex = 0;
                    });

                    bgSignatures[index].classList.add('active');
                    bgSignatures[index].style.zIndex = 2;
                    if (bgSignatures[index].previousElementSibling === null) {
                        // 마지막 시그니처 배경 변수
                        let lastBgIndex = bgSignatures.length - 1;

                        bgSignatures[lastBgIndex].style.zIndex = 1;
                    } else {
                        bgSignatures[index].previousElementSibling.style.zIndex = 1;
                    }

                    activeTabIndex = index;

                    // 일정 시간 후에 클릭 허용을 다시 활성화
                    setTimeout(function () {
                        isClickAllowed = true;
                    }, 100); // 100ms 후에 클릭 허용
                });
            });
        });
    }
}

// 스와이퍼 함수 및 커스텀
function commSwiper(selector) {
    selector = selector || '.auto-swiper-wrap, .fraction-swiper-wrap';
    let swipers = [];

    // 스와이퍼 기본 옵션
    const commOption = {
        init: false,
        resistance: '100%',
        resistanceRatio: 0,
        observer: true,
        observeParents: true,
        watchOverflow: true,
        spaceBetween: 0,
    }

    // 스와이퍼 auto 옵션
    const autoOption = {
        speed: 500,
        slidesPerView: 'auto',
    }

    // 스와이퍼 fraction 옵션
    const fractionOption = {
        speed: 500,
        slidesPerView: '1',
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            formatFractionCurrent: function (number) {
                // 현재 슬라이드 두자리 수 반환
                return ('0' + number).slice(-2);
            },
            formatFractionTotal: function (number) {
                // 현재 슬라이드 두자리 수 반환
                return ('0' + number).slice(-2);
            },
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    ' / ' +
                    '<span class="' + totalClass + '"></span>';
            },
        },
    }

    // 스와이퍼 loop 옵션
    const loopOption = {
        loop: true,
    }

    // 스와이퍼 autoPlay 옵션
    const autoPlayOption = {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        }
    }

    // 스와이퍼 초기화 함수
    function swipersInit(swiperEl, i) {
        // 각 스와이퍼의 슬라이드 개수
        let slideCnt = swiperEl.querySelectorAll('.swiper-slide').length;

        // 슬라이드 개수에 따른 init 조건
        if (slideCnt <= 1 || (swiperEl.parentNode.classList.contains('menu-visual-wrap') && slideCnt <= 3)) {
            return false;
        } else {
            // 스와이퍼 커스텀 옵션 객체 병합
            let mergeOption = Object.assign({}, commOption);

            if (swiperEl.classList.contains('auto-swiper-wrap')) {
                Object.assign(mergeOption, autoOption);
            }
            else if (swiperEl.classList.contains('fraction-swiper-wrap')) {
                Object.assign(mergeOption, fractionOption);
            }

            // 멀티클래스를 통한 loop 옵션 제어
            if (swiperEl.classList.contains('loop')) {
                Object.assign(mergeOption, loopOption);
            }

            // 멀티클래스를 통한 autoplay 옵션 제어
            if (swiperEl.classList.contains('autoplay')) {
                Object.assign(mergeOption, autoPlayOption);
            }

            // 스와이퍼 생성 및 초기화
            swipers[i] = new Swiper(swiperEl, mergeOption);
            swipers[i].init();
        }
    }

    // 스와이퍼 공통 사용
    if (document.querySelectorAll(selector).length > 0) {
        document.querySelectorAll(selector).forEach(function (swiperEl, i) {
            swipersInit(swiperEl, i);
        });
    }
}

// 헤더 서브 드롭 함수
function dropSubDepth() {

    let linkGnb = document.querySelectorAll('.link-gnb');
    let subDepthWrap = document.querySelector('.sub-depth-wrap');
    let headerWrap = document.querySelector('.header-wrapper');
    let btnFounded = document.querySelector('.btn-founded');

    if (linkGnb.length > 0) {
        // 마우스 진입 이벤트 함수
        function gnbMouseEnter() {
            subDepthWrap.classList.add('active');
            btnFounded.classList.add('active');
        }

        // 마우스 이탈 이벤트 함수
        function gnbMouseLeave() {
            subDepthWrap.classList.remove('active');
            btnFounded.classList.remove('active');
        }

        linkGnb.forEach(function (element) {
            element.addEventListener('mouseenter', gnbMouseEnter);
        });

        headerWrap.addEventListener('mouseleave', gnbMouseLeave);
    }
}

// 헤더 스크롤 함수
function scrollHeader () {
    const minScrollValue = 15;
    let scrollPosY = 0;
    let headerEl = document.querySelector('.header-wrapper');

    window.addEventListener('scroll', function () {
        let currentPosY = this.scrollY;

        // 헤더 스크롤 조건
        if (Math.abs(currentPosY - scrollPosY) < minScrollValue) {
            return;
        }

        if(currentPosY > scrollPosY && scrollPosY > 0) {
            headerEl.classList.add('scroll-down');
        } else {
            headerEl.classList.remove('scroll-down');
        }

        scrollPosY = currentPosY;
    });
}

// 스크롤 최상단 함수
function scrollToTop (){
    let scrollPosY = 0;
    let btnToTop = document.querySelector('.btn-to-top');

    if (btnToTop !== null) {
        window.addEventListener('scroll', function (){
            let currentPosY = this.scrollY;

            if(currentPosY > scrollPosY) {
                btnToTop.classList.add('active');
            } else {
                btnToTop.classList.remove('active');
            }
        });

        btnToTop.addEventListener('click', function (event){
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, 300);
        });
    }
}


// marqueee 함수
function setMarquee (selector) {
    selector = selector || '.marquee-wrap';
    let timer;

    marqueeCopy();

    // marquee 복제 함수
    function marqueeCopy() {
        let marqueeWrap = document.querySelectorAll(selector);

        marqueeWrap.forEach((element) => {
            const marqueeBox = element.querySelector('.marquee-box');
            const originalEl = marqueeBox.querySelector('.original-marquee');

            for (let i = 0; i < 9; i++) {
                // originalEl을 복제하여 새로운 요소 생성
                let clonedElement = originalEl.cloneNode(true);

                // 복제된 요소에 새로운 클래스 할당
                clonedElement.className = 'marquee';

                // 생성된 요소를 marqueeBox에 삽입
                marqueeBox.insertAdjacentElement('beforeend', clonedElement);
            }
        });

        marqueeInit();
    }

    // marquee 초기화 함수
    function marqueeInit() {
        let marqueeWrap = document.querySelectorAll(selector);

        clearTimeout(timer);
        timer = setTimeout(() => {
            marqueeWrap.forEach((element) => {
                element.classList.remove('active');

                const marqueeWidth = element.querySelector('.original-marquee').offsetWidth;
                // 애니메이션 X축 이동을 위한 marquee-wrap 총 길이 변수
                element.style.setProperty('--marqueeWidth', - (marqueeWidth * 5) + 'px');
                // 애니메이션 X축 이동을 위한 초단위 변수 m/s
                element.style.setProperty('--marqueeDuration', (marqueeWidth * 5) / 100 + 's');

                element.classList.add('active');
            });
        }, 500);
    }
}

document.addEventListener('DOMContentLoaded', function(){
    setScreenSize();
    followCursor();
    enterEvent();
    commTab();
    commSwiper();
    dropSubDepth();
    scrollHeader();
    setMarquee();
    scrollToTop();
});