//---------------------------------------------------
///🤍progress바 얹기
let container = document.querySelector('#progress');
let progressBar = document.querySelector('.progress-bar');
let progressText = document.querySelector('.progress-text');


var imgLoad = imagesLoaded('body');
//console.log(imgLoad)
let imgTotal = imgLoad.images.length;
//console.log(imgTotal)//192


let imgLoaded = 0;
let current = 0;
let progressTimer;
let topValue;

progressTimer = setInterval(updateProgress, 1000 / 60)
//setInterval() : 매시간마다
imgLoad.on('progress', function () {
    //이미지가 로드되는 중간중간 할일
    imgLoaded++;
});

function updateProgress() {
    let target = (imgLoaded / imgTotal) * 100
    //console.log(target)
    current += (target - current) * 0.1;

    progressBar.style.width = current + "%"
    progressText.innerHTML = Math.ceil(current) + "%" //Math.ceil :올림 

    if (current > 99.9) {
        clearInterval(progressTimer) //updateProgress() 호출 멈추기
        container.classList.add('progress-complete'); //99.9를 넘으면 선을 조금 굵게만듬
        progressBar.style.width = "100%"; //넒이를 100%로 선으로 채워라
        gsap.to(container, {
            duration: 0.3,
            yPercent: -100
        })
    }
}
updateProgress();

//---------------------------------------------------
///🤍쿠키


//쿠키 생성시 필수 항목 ! -> 쿠키이름 , 소멸시기
//쿠키이름 -> cookieName
//소멸시기 -> expires 
//쿠키를 만들때 시간은 UTF협정세계시를 사용한다.

//오늘의 날짜
let date = new Date(); //이건 정해져있는거라 다른방법 가져오면 안됌
//console.log(date.toUTCString())// 협정세계시 - Mon, 15 Jan 2024 03:04:36 GMT
//console.log(date.getDate())//오늘의 날짜만 뽑는방법 - 15
//console.log(date.getDate() + 7) // + 7일 뒤 - 22

//날짜 지정하는 방법 - 변수 .setDate(새로운 날짜)
date.setDate(date.getDate() + 7)
console.log(date) //Mon Jan 22 2024 12:08:18 GMT+0900 (한국 표준시)

//쿠키 생성하기
let setCookie = "";
setCookie += 'CookieName=green; ';
setCookie += 'expires=' + date.toUTCString()
console.log(setCookie) //CookieName=green; expires=Mon, 22 Jan 2024 03:12:27 GMT

//쿠키 저장하기
document.cookie = setCookie;


//close
document.querySelector('.close').addEventListener("click", function (e) {
    this.parentElement.style.display = "none" //parentElement -> notice
    e.preventDefault();
})



// Variables
const el = document.querySelector(".title");

// Variables ~ Widths
let elWidth = el.offsetWidth;
let windowWidth = window.innerWidth;

// Variables ~ Mouse
let mouseX = 0;
let prevMouseX = 0;

// Target: value to animate to
let skewTarget = 0;
let translateTarget = 0;

// WithEasing: value used to animate
let skewWithEasing = 0;
let translateWithEasing = 0;

// EasingFactor: determines how quick the animation/interpolation goes
let skewEasingFactor = 0.1;
let translateEasingFactor = 0.05;

// Events
window.addEventListener("mousemove", handleMouseMove);
window.addEventListener("resize", handleWindowResize);

// Functions
function handleMouseMove(e) {
  mouseX = e.pageX;
}

function handleWindowResize(e) {
  elWidth = el.offsetWidth;
  windowWidth = window.innerWidth;
}

function lerp(start, end, factor) {
  return (1 - factor) * start + factor * end;
}

function animateMe() {
  // Get difference between current and previous mouse position
  skewTarget = mouseX - prevMouseX;
  prevMouseX = mouseX;

  // Calc how much the el needs to translate
  translateTarget = (elWidth - windowWidth) / windowWidth * mouseX * -1;

  // Ease between start and target values (skew)
  skewWithEasing = lerp(skewWithEasing, skewTarget, skewEasingFactor);

  // Limit skew to a range of 75 degrees so it doesn't "over-skew"
  skewWithEasing = Math.min(Math.max(parseInt(skewWithEasing), -75), 75);

  // Ease between start and target values (translate)
  translateWithEasing = lerp(
  translateWithEasing,
  translateTarget,
  translateEasingFactor);


  el.style.transform = `
    translateX(${translateWithEasing}px)
    skewX(${skewWithEasing}deg)
  `;

  // RAF
  window.requestAnimationFrame(animateMe);
}

window.requestAnimationFrame(animateMe);