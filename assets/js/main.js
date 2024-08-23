gsap.defaults({
	ease:"none"
})

//언어 선택
$('.btn-lang').click(function (e) {
  $('.lang-list').toggleClass('on');
});

$(window).scroll(function() {
  $('.lang-list').removeClass('on');
});

// //header
// ScrollTrigger.create({
// 	trigger:'body',
// 	start:'10% 0',
// 	end:'100% 100%',
// 	markers:false,
// 	scrub:0,
// 	onEnter:function(){
// 		$('#header').addClass('on');
// 	},
// 	onLeaveBack:function(){
// 		$('#header').removeClass('on');
// 	}
// });




// 탑버튼
// 버튼 클릭 시 상단으로 스크롤
$('.btn-top').on('click',function() {
	gsap.to(window, { duration: 1, scrollTo: 0 });
});







const intro = gsap.timeline({
	scrollTrigger: {
		trigger: ".sc-intro",
		start: "top top",
		end: "+=600%",// 700vh
		scrub: 0,
		pin: true, // 애니메이션 완료 될 때까지 섹션 유지
		markers: false,
		onLeave:function(){
			//화살표 지우기 removeClass 기점..
		}
	}
});
intro
		.to(".sc-intro", {'--opacity': 1,}) 
		.from(".sc-intro .d01", {autoAlpha: 0,},'<') // autoAlpha: 0에서 시작하,초 동안 1로 변화
    .to(".sc-intro .d01", {autoAlpha: 0,
			onStart:function(){
				$('#header').addClass('on');
			},
			onReverseComplete:function(){
				$('#header').removeClass('on');
			}
		})
    .from(".sc-intro .d02", {autoAlpha: 0,})
    .to(".sc-intro .d02", {autoAlpha: 0,})
    .from(".sc-intro .d03", {autoAlpha: 0,})
    .to(".sc-intro .d03", {autoAlpha: 0,})
    .from(".sc-intro .d04", {autoAlpha: 0,})


//비주얼
//우뜨케 해야해ㅐ......우뜨..우뜨케,,.......아아아앙앙 이게 맞ㅈ나..
const visual = gsap.timeline({
	scrollTrigger: {
			trigger: ".sc-visual",
			start: "top top",
			end: "+=600%",
			scrub: 0,
			pin: true,
			markers: false,
	}
});

visual
//딤드 넣기
	.from(".sc-visual .headline", { autoAlpha: 0, duration: 200 },)
	.to(".sc-visual .headline span:nth-child(1)", { xPercent: 100, duration: 100 }, 'b')
	.to(".sc-visual .headline span:nth-child(3)", { xPercent: -100, duration: 100 }, 'b')
	.to(".sc-visual .headline", { autoAlpha: 0, duration: 100 }, 'c')
	.to(".sc-visual .bg:nth-child(3)", { height: 0, duration: 100 })
	.to(".sc-visual .bg:nth-child(2)", { height: 0, duration: 100 })
	.from(".sc-visual .desc", { autoAlpha: 0, duration: 100 });

	const eeee = gsap.timeline({
		scrollTrigger: {
				trigger: ".sc-possibility",
				start: "top top",
				end: "+=200%",
				scrub: 0,
				pin: true,
				markers: false,
				//리사이증시 값 갱신
				invalidateOnRefresh:true,
		}
	});
	eeee.to('.sc-possibility .group-x',{xPercent:-100})
	eeee.to('.sc-possibility .group-x',{
		x:function(){
			return window.innerWidth-100;
		}
	},'<')

	$('.sc-prove').each(function(i,el){
		const prove = gsap.timeline({
			scrollTrigger: {
					trigger: el,
					start: "top 75%",
					end: "100% 97%",
					scrub: 0,
					markers: false,
			}
		});
	
		prove.to($(el).find('.headline span'),{x:0})
		.from($(el),{'--x':100},'<')
	})

	const color = gsap.timeline({
		scrollTrigger: {
				trigger: ".sc-color",
				start: "top 95%",
				end: "100% 80%",
				scrub: 0,
				// markers: true,
		}
	});
	color.from('.sc-color .box:nth-child(1)',{xPercent:-50})
	.from('.sc-color .box:nth-child(2)',{xPercent:-50},'<')
	.from('.sc-color .box:nth-child(3)',{xPercent:50},'<')
	const color2 = gsap.timeline({
		scrollTrigger: {
				trigger: ".sc-color",
				start: "top 45%",
				end: "100% 30%",
				scrub: 0,
				// markers: true,
				onEnter:function(){
					$('.sc-color').addClass('show')
				},
				onLeaveBack:function(){
					$('.sc-color').removeClass('show')
				}
		}
	});
	color2.from('.sc-color .headline',{autoAlpha:0})
// area1

const area1Headline = $('.sc-safety .area1 .headline');
const area1 = gsap.timeline({
	scrollTrigger: {
			trigger: ".area1",
			start: "top 95%",
			end: "100% 80%",
			scrub: 0,
			// markers: true,
			invalidateOnRefresh:true,
			onEnter:function(){},
			onLeaveBack:function(){},
			onUpdate:function(self){
				// console.log(self.progress);
				if(self.progress >= 0.5){

				}else{

				}
			}
	}
});
area1
.to('.sc-safety .area1 .group-x',{
	x:function() {
		return area1Headline.outerWidth()*-1;
	}
})
//duration 1
.to('.sc-safety .area1 .card-item:nth-child(2)',1,{x:40*-1,xPercent:-100},'a')
.to('.sc-safety .area1 .card-item:nth-child(3)',1,{x:40*-2,xPercent:-100*2},'a')
.to('.sc-safety .area1 .card-item:nth-child(4)',1,{x:40*-3,xPercent:-100*3},'a')

.to('.sc-safety .area1 .card-item .icon-lock:nth-child(2)',0.5,{opacity:0},'b-=1') // 둘이 합쳐 1초 
.to('.sc-safety .area1 .card-item .icon-lock:nth-child(1)',0.5,{opacity:1},'b-=0.5')

gsap.set('.area2 .left-wrap',{autoAlpha:0})
ScrollTrigger.create({
	trigger: '.area2', 
	start: "0 0 ", 
	end: "bottom bottom", 
	// markers:true,
	onEnter:function(){
		gsap.set('.area2 .left-wrap',{autoAlpha:1})
		gsap.set('.area1 .card-list',{autoAlpha:0})
	},
	onLeaveBack:function(){
		gsap.set('.area2 .left-wrap',{autoAlpha:0})
		gsap.set('.area1 .card-list',{autoAlpha:1})
	}
});
// 헤더..
// ScrollTrigger.create({
// 	trigger: ".sc-gig", 
// 	start: "top top", 
// 	end: "bottom bottom", 
// 	endTrigger: ".sc-prove",
// 	markers:false,
// 	onEnter: function() {
// 			$('#header').addClass('dark'); 
// 	},
// 	onLeaveBack: function() {
// 			$('#header').removeClass('dark'); 
// 	}
// });
	ScrollTrigger.create({
    trigger: `[data-theme="dark"]`, 
    start: "top 50%", 
    end: "bottom 50%", 
    toggleClass:{
			targets:"body",
			className:"dark"
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
//footer
ScrollTrigger.create({
	trigger:'#footer',
	start:'90% bottom',//[트리거 기준 시작]  [윈도우 기준&화면 기준]
	end:'bottom bottom',//[트리거 기준 끝] [윈도우 기준&화면 기준]
	markers:true,
	onEnter:function(){
		$('.sc-banner').removeClass('on');
	},
	onLeaveBack:function(){
		$('.sc-banner').addClass('on');
	}
})

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

ScrollTrigger.create({
  trigger: ".sc-visual",
  start: "top top",
  end: "bottom bottom",
  endTrigger: "#footer",
  markers: true,
  onUpdate: function (e) {// 스크롤이 움직일 때마다 호출
    direction = e.direction; // 스크롤 방향을 나타냄 아래로 스크롤 하는 경우(1) 위로 스크롤 하는 경우 -1
    if (direction == 1) {
      $(".btn-top").removeClass("on");
    } else {
      $(".btn-top").addClass("on");
    }
  },
  onLeaveBack: function () {
		// alert('')
    $(".btn-top").removeClass("on");
  },
});