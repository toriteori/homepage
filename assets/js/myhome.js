// 테이블 캡션 자동완성 함수
function tableCaption () {
    let tableEl = document.querySelectorAll('table');

    tableEl.forEach(function (element) {
        let captionEl = element.querySelector('caption');
        let thEl = element.querySelectorAll('th');

        let captionText = captionEl.innerText;

        let thText = '';

        thEl.forEach(function(element, index) {
            thText += element.innerText;

            if (index !== thEl.length - 1) {
                thText += ', '; // 마지막 요소가 아니면 콤마와 공백을 추가
            }
        });

        captionEl.innerText = captionText + ' 테이블로 ' + thText + '을(를) 나타낸 표 입니다.';
    })
}

// 헤더 스크롤 시 active 추가 함수
function scrollHeader () {
    let headerEl = document.querySelector('.header-wrapper');

    window.addEventListener('scroll', function () {
        let posY = scrollY;
        if (posY > 0) {
            headerEl.classList.add('active');
        } else {
            headerEl.classList.remove('active');
        }
    });
}

// gsap 연습
function introSvg() {
    let visualWrap = document.querySelector('.intro-visual-wrap');
    let contactWrap = document.querySelector('.intro-contact-wrap');
    function visualAni () {
        gsap.timeline({
            scrollTrigger: {
                trigger: visualWrap,
                start: '0 0',
                end: '50% 0',
                scrub: 1,
            }
        })
        .to('.intro-visual-wrap .intro-text.s', { xPercent: -80, yPercent: 120, rotate: -40, ease: 'none', duration: 5 }, 0)
        .to('.intro-visual-wrap .intro-text.e', { xPercent: -100, yPercent: -20, rotate: 10, ease: 'none', duration: 5 }, 0)
        .to('.intro-visual-wrap .intro-img.o', { xPercent: -80, yPercent: 120, rotate: -270, ease: 'none', duration: 5 }, 0)
        .to('.intro-visual-wrap .intro-text.n', { xPercent: 0, yPercent: 160, rotate: 80, ease: 'none', duration: 5 }, 0)
        .to('.intro-visual-wrap .intro-img.g', { xPercent: 100, yPercent: 100, rotate: -230, ease: 'none', duration: 5 }, 0)
        .to('.intro-visual-wrap .intro-text.m', { xPercent: 120, yPercent: -30, rotate: -40, ease: 'none', duration: 5 }, 0)
        .to('.intro-visual-wrap .intro-img.o-last', { xPercent: 100, yPercent: 160, rotate: 270, ease: 'none', duration: 5 }, 0)
    }
    function contactAni() {
        gsap.timeline({
            scrollTrigger: {
                trigger: contactWrap,
                start: '0 100%',
                end: '100% 0',
                scrub: 1,
            }
        })
            .to('.intro-contact-wrap .intro-img.o', { xPercent: -30, yPercent: 100, rotate: -270, ease: 'none', duration: 5 }, 0)
            .to('.intro-contact-wrap .intro-img.g', { xPercent: 20, yPercent: 120, rotate: -230, ease: 'none', duration: 5 }, 0)
            .to('.intro-contact-wrap .intro-img.o-last', { xPercent: 30, yPercent: 100, rotate: 270, ease: 'none', duration: 5 }, 0)
    }

    visualAni();
    contactAni()
}

function introWord () {
    gsap.utils.toArray('.word-box .text').forEach(function (selector){
        gsap.timeline({
            scrollTrigger : {
                trigger : selector,
                start : '100% 100%',
                end : '100% 100%',
                scrub : 1,
            }
        })
            .fromTo(selector,{y: 150 }, {y: 0, ease: 'none', duration: 5}, 0)
    })
}

function subText () {
    gsap.utils.toArray('.sub-text-box .text').forEach(function (selector) {
        gsap.timeline({
            scrollTrigger : {
                trigger : selector,
                start : '100% 100%',
                end : '100% 100%',
                scrub : 1,
            }
        })
            .fromTo(selector,{opacity: 0, y: 50 }, {opacity: 1, y: 0, ease: 'none', duration: 5}, 0)
    })
}

function animationText () {
    let textList = document.querySelectorAll('.animation-list .animation-item');
    let textAni = gsap.timeline({repeat: -1});

    for (let i =0; i < textList.length; i++) {
        textAni.to(textList[i], 0.8, {opacity: 1, repeat: 1, delay: 0, x: 0, yoyo: true, ease: 'power4.out'});
        textAni.play();
    }
}

function introCard() {
    gsap.utils.toArray('.card-list .card-item').forEach(function (selector, i) {

        let yValue = i * 40;
        
        // card-item 간격 설정
        selector.style.transform = `translate(0, ${yValue}px)`;

        gsap.timeline({
            scrollTrigger: {
                trigger: selector,
                start: '0% 20%',
                end: '100% 0%',
                scrub: 1,
                onUpdate: (self) => {
                    let progress = self.progress.toFixed(4); // 현재 스크롤 진행도 0 ~ 1
                    let scaleValue = Math.max(0.8 + (0.05 * i), 1 - (progress * 0.2));
                    let rotateValue = Math.max(-10, 0 - (10 * progress));

                    gsap.to(selector, {
                        transform: `translate3d(0, ${yValue}px, 0) rotateX(${rotateValue}deg) scale(${scaleValue})`,
                        ease: "back",
                    });
                }
            }
        })
            .to (selector, {
                transformOrigin: 'top',
                filter: 'brightness(0.3)',
            })
    });
}

function introPortfolio () {
    gsap.utils.toArray('.intro-portfolio-wrap .portfolio-item').forEach(function (selector, i) {
        ScrollTrigger.create({
            trigger: selector,
            start: '0% 100%',
            onEnter: () => {
                gsap.set(selector, {
                    rotateX: '-65deg',
                    z: '-500px',
                    opacity: 0,
                }),
                    gsap.to(selector, {
                        rotateX: 0,
                        z: 0,
                        opacity: 1,
                        delay: i % 3 * 0.05,
                    })
            }
        })
    });
}

function loading() {
    let currentWidth = window.innerWidth;

    function loadingAni () {
        let loadingEl = document.querySelector('.loading-wrapper');
        let aniRotate = document.querySelectorAll('.ani-rotate');
        let aniFadeIn = document.querySelectorAll('.ani-fadeIn');

        setTimeout(function () {
            loadingEl.classList.add('active');

            setTimeout(function () {
                loadingEl.classList.add('active2');

                setTimeout(function () {
                    loadingEl.classList.remove('active', 'active2');

                    if (currentWidth > 1025) {
                        aniRotate.forEach(function (selector) {
                            selector.classList.add('on');
                        });

                        aniFadeIn.forEach(function (selector) {
                            selector.classList.add('on');
                        });
                    }

                    setTimeout(function () {
                        loadingEl.style.display = 'none';
                    }, 100);
                }, 1000);
            }, 1000);
        }, 0);
    }

    loadingAni();
}

document.addEventListener('DOMContentLoaded', function() {
    scrollHeader();
    loading();
    tableCaption();
    introSvg();
    introWord();
    subText();
    animationText();
    introCard();
    introPortfolio();
});