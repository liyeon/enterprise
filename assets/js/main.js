// 상단 이동 버튼
// 스크롤 이벤트 핸들러
let lastScrollTop = 0; // 마지막 스크롤 위치를 저장할 변수

$(window).scroll(function() {
		let scrollTop = $(this).scrollTop(); // 현재 스크롤 위치

		if (scrollTop < lastScrollTop) { // 스크롤이 위로 올라가는 경우
				if (scrollTop > 100) { // 스크롤 위치가 100px 이상일 때
						$('.btn-top').addClass('on');
				} else {
						$('.btn-top').removeClass('on');
				}
		} else { // 스크롤이 아래로 내려가는 경우
				$('.btn-top').removeClass('on');
		}
		lastScrollTop = scrollTop; // 현재 스크롤 위치를 마지막 스크롤 위치로 업데이트
});
	
// 버튼 클릭 시 상단으로 스크롤
$('.btn-top').on('click',function() {
		$('html, body').animate({ scrollTop: 0 }, 400);
		return false; // 클릭 시 기본 동작 방지
});
//언어 선택
$('.btn-lang').click(function (e) {
  $('.lang-list').toggleClass('on');
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

//인트로
