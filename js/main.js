//----------------------------------------------------------------------



var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
})

gsap.from("#page1 h1,#page1 h2", {
    y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
})
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        //scroller: ".main",
        // markers:true,
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
})
tl.to("#page1 h1", {
    x: -100,
}, "anim")
tl.to("#page1 h2", {
    x: 100
}, "anim")
tl.to("#page1 video", {
    width: "90%"
}, "anim")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        //scroller: ".main",
        // markers:true,
        start: "top -115%",
        end: "top -120%",
        scrub: 3
    }
})
tl2.to(".main", {
    backgroundColor: "#fff",
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        //scroller: ".main",
        // markers:true,
        start: "top -200%",
        end: "top -280%",
        scrub: 3
    }
})
tl3.to(".main", {
    backgroundColor: "#000"
})


var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        //scroller: ".main",
        // markers:true,
        start: "top -360%",
        end: "top -460%",
        scrub: 3
    }
})

tl4.to(".main", {
    backgroundColor: ""
})

var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
h4.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        purple.style.display = "block"
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave", function () {
        purple.style.display = "none"
        purple.style.opacity = "0"
    })
})


//--------------------------------------------
//--------------------------------------------
//🤍page2 tap menu

function openCont(e, cityName) {
    // console.log(cityName)
    let tabcontent = document.getElementsByClassName('tabcontent');
    let tablinks;
    //console.log(tabcontent[1])
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "flex";

}

document.getElementById('defaultOpen').click();




//-----------------------------------------------------------
//🤍page2 skillbar 

function animateSkills() {
    document.querySelectorAll('.skill-per').forEach((perElement) => {
        gsap.to(perElement, {
            duration: 2,
            width: perElement.getAttribute('per') + '%', // 넓이는 perElement의 'per' + '%'를 가져와라
            onUpdate: function () {
                perElement.setAttribute('per', Math.ceil(this.progress() * parseInt(perElement.style.width)) + '%');
            }
            //onUpdate: 애니메이션 중간중간 할일
            //setAttribute() -> 다시 셋팅을 해라
            //setAttribute('per') -> 다시 'per'에 셋팅을 해라
            //화살표 함수에는 this 사용 안된다
        })
    })
}

animateSkills();

gsap.to("#page2", {
    scrollTrigger: {
        trigger: "#page2",
        start: "top top",
        end: "bottom top", //바닥이 화면의 40%에 왔을때 끝나라
        scrub: true,
    },
    opacity: 1,
});




//🤍 page3 - bottom ani
function pgbottom() {

    gsap.to(".header__marq-wrapp", {
        scrollTrigger: {
            trigger: "#page3",
            start: 'top top',
            end: 'bottom top',
            scrub: 1.9
        },
        xPercent: -50

    })

    gsap.to(".header__marq-star img", {
        scrollTrigger: {
            trigger: "#page3",
            start: 'top top',
            end: 'bottom top',
            scrub: 1.9
        },
        rotate: 720

    })


}

pgbottom();

//////////////////////////////////////////////////////
//🤍 page4 - text ani🤍


let pTag2 = document.querySelector('.second-perallel');

let textArr2 = 'Christian Dior Christian Dior Christian Dior Christian Dior Christian Dior Christian Dior'.split(' ');
console.log(textArr2)


let count2 = 0;

initTexts(pTag2, textArr2);

function initTexts(element, textArray) {
    textArray.push(...textArray) //8개의 배열안의 아이템을 복사하여 다시 배열 뒤에 넣는다.
    console.log("함수안" + textArray)
    for (let i = 0; i < textArray.length; i++) {
        //    &nbsp
        //    \u00A0   --> 자바스크립트의 공백을 나타냄
        element.innerHTML += `${textArray[i]}\u00A0\u00A0\u00A0`
    }
}

/////////////////////////////
function animate() {
    // console.log(count1)
    count2++;

    count2 = marqueeText(count2, pTag2, -1)


    window.requestAnimationFrame(animate);
    // setInterval--> 어떤 시간마다 할 일(오류가 많이나서 requestAnimationFrame로 대체사용)
}

function marqueeText(count, element, direction) {
    // .scrollHeight --> 보이지 않는 공간이라도 그 공간의 높이값을 불러낸다.
    // 보이지않는 공간일지라도 스크롤해서 확인할 수 있는 공간의 높이
    // .scrollWidth --> 
    //console.log("element.scrollWidth" + element.scrollWidth)
    //console.log("count" + count)
    if (count > element.scrollWidth / 2) {
        count = 0;
        element.style.transform = `translate(0,0)`;
    }

    element.style.transform = `translate(${count * direction}px,0)`;

    return count
}

function scrollHandler() {
    count2 += 25;
}

animate()
//window.addEventListener('scroll',function(){
//    scrollHandler()
//})

window.addEventListener = function () {
    console.log("나호출")
}


window.addEventListener('scroll', scrollHandler())
//////////////////////////////////////////////////////
//🤍 page4 - bg ani🤍

VANTA.CLOUDS({
    el: "#page4",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00
})




//////////////////////////////////////////////////////
//🤍🤍 page6 hover 시차 슬라이드 이미지 
const images = document.querySelectorAll(".item .img img");

const colorArray = [
    "#FFE7CB",
    "#BBC8D9",
    "#FBEFE2",
    "#F9FFE9",
    "#E4FDFF",
];

function handleImageClick(event) {
    const imgSrc = event.currentTarget.src;
    let body = document.querySelector('#page6')
    const imgNumber = imgSrc.match(/(\d+)\.jpg/)[1];
    body.style.backgroundColor = colorArray[parseInt(imgNumber) - 1];

    const newImgSrc = `img/cont${imgNumber}.jpg`;

    const previewContainer = document.querySelector(".preview-container");
    const currentLastImg = previewContainer.querySelector("img:last-child");

    if (currentLastImg) {
        gsap.to(currentLastImg, {
            duration: 1,
            scale: 1.5,
            left: "-50%"
        });
    }

    const newImg = document.createElement("img");
    newImg.src = newImgSrc;
    newImg.style.position = "absolute";
    newImg.style.right = "-100%";

    previewContainer.appendChild(newImg);

    gsap.to(newImg, {
        duration: 1,
        right: "0%"
    });
}

images.forEach((img) => {
    img.addEventListener("click", handleImageClick);
});

//랜덤으로 슬라이드 돌아가기
function simulateImageClick() {
    // Randomly select an image and trigger a click event
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    const clickEvent = new Event("click");
    randomImage.dispatchEvent(clickEvent);
}

// Set interval to simulate a click every 1 second (1000 milliseconds)
setInterval(simulateImageClick, 3000);


//////////////////////////////////////////////////////
//🤍🤍page5 옆으로 넘어가는 포트폴리오 

const horSection = gsap.utils.toArray('.port_desc .port')
//모든 요소들을 horSection이라는 변수에 배열로 저장한다. (gsap.utils.toArray)
console.log(horSection)//Array(20)
const horiz = gsap.to(horSection, {
    //x: (- 94 * (horSection.length - 1)) + "%",
    xPercent: - 70 * (horSection.length - 1),
    scrollTrigger: {
        trigger: '#page5',
        start: '1% top',
        end: '+=300%', //애니메이션이 시작되는 지점으로 부터 + 5000px 떨어진곳에 도착하면 애니메이션이 끝남.
        pin:true,
        scrub: 1, //스크롤에 반응 false: 애니메이션 (숫자이용이 더 부드럽게 표현됨)
        //sticky처럼 화면 고정
       // markers:true,
    }
})
//gsap.to : 어떻게 되어라 



// gsap.to("#page5", {
//     scrollTrigger: {
//         trigger: "#page5",
//         start: "+=50 ",
//         end: "bottom top", //바닥이 화면의 40%에 왔을때 끝나라
//         pin: true,
//     },
//     opacity: 1,
// });

// gsap.to("#page6", {
//     scrollTrigger: {
//         trigger: "#page6",
//         start: "top top",
//         end: "bottom top", //바닥이 화면의 40%에 왔을때 끝나라
//         scrub:true,

//     },
//     opacity: 1,
// });

// gsap.to("#page7", {
//     scrollTrigger: {
//         trigger: "#page7",
//         start: "top top",
//         end: "bottom top", //바닥이 화면의 40%에 왔을때 끝나라
//         scrub:true,
        
//     },
//     opacity: 1,
// });

//--------------------------------------------
//🤍page7  tap menu

function openContent(e, cityName) {
    // console.log(cityName)
    let tabcontent2 = document.getElementsByClassName('tabcontent2');
    let tablinks2;
    //console.log(tabcontent[1])
    for (let i = 0; i < tabcontent2.length; i++) {
        tabcontent2[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "flex";

}

document.getElementById('defaultOpen2').click();
