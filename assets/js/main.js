//언어 선택
$('.btn-lang').click(function (e) {
  $('.lang-list').toggleClass('on');
});

$(window).scroll(function() {
  $('.lang-list').removeClass('on');
});

//header
ScrollTrigger.create({
	trigger:'body',
	start:'10% 0',
	end:'100% 100%',
	markers:false,
	scrub:0,
	onEnter:function(){
		$('#header').addClass('on');
	},
	onLeaveBack:function(){
		$('#header').removeClass('on');
	}
});

//footer
ScrollTrigger.create({
	trigger:'#footer',
	start:'bottom bottom',//[트리거 기준 시작]  [윈도우 기준&화면 기준]
	end:'bottom bottom',//[트리거 기준 끝] [윈도우 기준&화면 기준]
	markers:false,
	scrub:0,
	onEnter:function(){
		$('.sc-banner').removeClass('on');
	},
	onLeaveBack:function(){
		$('.sc-banner').addClass('on');
	}
})


// 탑버튼
// 버튼 클릭 시 상단으로 스크롤
$('.btn-top').on('click',function() {
	gsap.to(window, { duration: 1, scrollTo: 0 });
});

ScrollTrigger.create({
  trigger: ".sc-intro",
  start: "top top",
  end: "bottom bottom",
  endTrigger: "#footer",
  markers: false,
  onUpdate: function (e) {// 스크롤이 움직일 때마다 호출
    direction = e.direction; // 스크롤 방향을 나타냄 아래로 스크롤 하는 경우(1) 위로 스크롤 하는 경우 -1
    if (direction == 1) {
      $(".btn-top").removeClass("on");
    } else {
      $(".btn-top").addClass("on");
    }
  },
  onLeaveBack: function () {
    $(".btn-top").removeClass("on");
  },
});

ScrollTrigger.create({
  trigger: ".sc-ground",
  start: "top top",
  end: "bottom bottom",
  endTrigger: "#footer",
  markers: true,
  onEnter: function () {
		$(".btn-top").addClass("bottom");
  },
  onLeaveBack: function () {
    $(".btn-top").removeClass("bottom");
  },
});



//우뜨케 해야해ㅐ......우뜨..우뜨케,,.......아아아앙앙
// 요소가 스크롤에 따라 나타나도록 하는 함수
const animateTextOnScroll = (selector) => {
  gsap.fromTo(selector,
    { opacity: 0 }, // 초기 상태
    { 
      opacity: 1, // 최종 상태
      scrollTrigger: {
        trigger: selector,
        start: "top 75%", // 요소가 화면의 75% 위치에 도달했을 때
        end: "top 80%", // 요소가 화면의 25% 위치에 도달했을 때
        scrub: true, // 스크롤에 맞춰 애니메이션 동기화
      },
      duration: 1,
    }
  );
};

// 스크롤 트리거로 .sc-intro 섹션을 고정시키는 설정
ScrollTrigger.create({
  trigger: ".sc-intro",
  start: "top top",
  end: "+=700", // 고정될 범위
  pin: true,
  pinSpacing: false,
});

// 각 텍스트 요소에 애니메이션을 적용
animateTextOnScroll(".d01");
animateTextOnScroll(".d02");
animateTextOnScroll(".d03");
animateTextOnScroll(".d04");