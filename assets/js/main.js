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
	markers:true,
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
  markers: false,
  onEnter: function () {
		$(".btn-top").addClass("bottom");
  },
  onLeaveBack: function () {
    $(".btn-top").removeClass("bottom");
  },
});




const intro = gsap.timeline({
	scrollTrigger: {
		trigger: ".sc-intro",
		start: "top top",
		end: "+=8000",// 애니메이션이 끝나는 지점: 스크롤할 총 영역을 7000px로 설정
		scrub: 0,
		pin: true, // 애니메이션 완료 될 때까지 섹션 유지
		markers: false,
	}
});
intro
		.from(".sc-intro .d01", {autoAlpha: 0, duration: 100}) // autoAlpha: 0에서 시작하여 duration: 100초 동안 1로 변화
    .to(".sc-intro .d01", {autoAlpha: 0, duration: 100})
    .from(".sc-intro .d02", {autoAlpha: 0, duration: 100})
    .to(".sc-intro .d02", {autoAlpha: 0, duration: 100})
    .from(".sc-intro .d03", {autoAlpha: 0, duration: 100})
    .to(".sc-intro .d03", {autoAlpha: 0, duration: 100})
    .from(".sc-intro .d04", {autoAlpha: 0, duration: 100})


//비주얼
//우뜨케 해야해ㅐ......우뜨..우뜨케,,.......아아아앙앙 이게 맞ㅈ나..
const visual = gsap.timeline({
	scrollTrigger: {
			trigger: ".sc-visual",
			start: "top top",
			end: "+=10000",
			scrub: 0,
			pin: true,
			markers: false,
	}
});

visual
	.from(".sc-visual .headline", { autoAlpha: 0, duration: 200 },'a')
	.to(".sc-visual .headline span:nth-child(1)", { xPercent: 100, duration: 100 }, 'b')
	.to(".sc-visual .headline span:nth-child(3)", { xPercent: -100, duration: 100 }, 'b')
	.to(".sc-visual .headline", { autoAlpha: 0, duration: 100 }, 'c')
	.to(".sc-visual .bg:nth-child(3)", { height: 0, duration: 100 })
	.to(".sc-visual .bg:nth-child(2)", { height: 0, duration: 100 })
	.from(".sc-visual .desc", { autoAlpha: 0, duration: 100 });

// 헤더..
ScrollTrigger.create({
	trigger: ".sc-gig", 
	start: "top top", 
	end: "bottom bottom", 
	endTrigger: ".sc-prove",
	markers:false,
	onEnter: function() {
			$('#header').addClass('dark'); 
	},
	onLeaveBack: function() {
			$('#header').removeClass('dark'); 
	}
});
	ScrollTrigger.create({
    trigger: ".dark-inner", 
    start: "top top", 
    end: "bottom bottom", 
		markers:false,
		endTrigger: "",
    onEnter: function() {
			$('#header').removeClass('dark'); 
    },
    onLeaveBack: function() {
			$('#header').addClass('dark'); 
    }
});
ScrollTrigger.create({
	trigger: ".sc-desc", 
	start: "top top", 
	end: "bottom bottom", 
	markers:false,
	endTrigger: "",
	onEnter: function() {
		$('#header').addClass('dark'); 
	},
	onLeaveBack: function() {
		$('#header').removeClass('dark'); 
	}
});

//prove
