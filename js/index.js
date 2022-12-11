// 로딩 화면
$(document).ready(function () {
  setTimeout(() => {
    $("#loading").fadeOut(600);
  }, 6000);
});

// 로딩 카운트다운
let count = 5;
let timer = setInterval(function () {
  document.querySelector('#loading>span>strong').innerHTML = count;
  count--;
  if (count < 0) {
    clearInterval(timer);
  }
}, 1000);

// 로딩 화면 타이핑
setTimeout(() => {
  let typed = new Typed('.loading-text', {
    strings: ["안녕하세요.", "웹퍼블리셔 <strong>김현우</strong>입니다."],
    typeSpeed: 80,
    backSpeed: 50,
    showCursor: false
  });
}, 500);

// 로딩 종료 후 인트로
setTimeout(() => {
  document.querySelector('.intro-box').style.transform = "scale(1)";
}, 6300);

// 화면 드래그 이동
$("#project-icon, #skill-icon, .screen, #intro").draggable({
  containment: "window"
});

// 프로젝트 관련 버튼
$("#project-icon").click(function () {
  $("#project-btn").show().css('display', 'flex');
  $("#project-screen").toggle();
});

$("#project-btn, #project-min").click(function () {
  $("#project-screen").toggle();
});

$("#project-close").click(function () {
  $("#project-screen, #project-btn, .sample-box").hide();
});

// 프로젝트 화면
$(".project-icon").click(function () {
  let idx = $(this).index();
  $('.sample-box').css('display', 'none');
  $('.sample-box').eq(idx).css('display', 'block');
});

// 프로젝트 화면 클릭
$(".sample-box").click(function () {
  $(this).stop().fadeOut(200);
});

// 스킬 관련 버튼
$("#skill-icon").click(function () {
  $("#skill-btn").show().css('display', 'flex');
  $("#skill-screen").toggle();
});

$("#skill-btn, #skill-min").click(function () {
  $("#skill-screen").toggle();
});

$("#skill-close").click(function () {
  $("#skill-screen, #skill-btn").hide();
  $('.skill-detail').removeClass('active').css('display', 'none');
  $('.skill-detail').css('background', '');
  $('.detail-content, .detail-back').css('opacity', '0');
  $('.skill-list>ul, .skill-title').css('opacity', '1');
});

// 스킬 이미지 클릭
$('.skill-img').click(function () {
  let tabId = $(this).attr('data-tab');
  $("#" + tabId).addClass('active').css('display', 'flex');
  setTimeout(function () {
    $('.skill-detail').css('background', 'white');
    $('.detail-content, .detail-back').css('opacity', '1');
    $('.skill-list>ul, .skill-title').css('opacity', '0')
  }, 500);
});

// 스킬 뒤로가기 클릭
$('.detail-back').click(function () {
  $('.skill-detail').fadeOut(500, function () {
    setTimeout(function () {
      $('.skill-detail').removeClass('active').css('display', 'none');
      $('.skill-detail').css('background', '');
      $('.detail-content, .detail-back').css('opacity', '0');
    }, 300);
  });
  setTimeout(function () {
    $('.skill-list>ul, .skill-title').css('opacity', '1');
  }, 300);
});

// 시작 버튼 토글
$("#start, .start-main>li").click(function () {
  $("#start-menu").toggle();
});

// 시작 메뉴 외 클릭
$("html").click((e) => {
  if ($(e.target).parents("footer").length < 1) {
    $("#start-menu").hide();
  }
});

// 종료 버튼 그룹
let offBtn = document.getElementById('portfolio-off');
let exit = document.getElementById('exit');
let startMenu = document.getElementById('start-menu');
offBtn.addEventListener("click", function () {
  exit.style.display = "block";
  startMenu.style.display = "none";
});

// 새로고침 버튼
let refreshBtn = document.getElementById('portfolio-refresh');
refreshBtn.addEventListener("click", function () {
  history.go(0);
});

// 종료 버튼
let exitBtn = document.getElementById('portfolio-exit');
exitBtn.addEventListener("click", function () {
  window.close();
});

// 다시 열기 버튼
let reopenBtn = document.getElementById('portfolio-reopen');
reopenBtn.addEventListener("click", function () {
  window.close();
  window.open('./index.html');
});

// 종료 취소 버튼
let cancelBtn = document.getElementById('cancel-btn');
cancelBtn.addEventListener("click", function () {
  exit.style.display = "none";
});

// 공지 클릭
$('#notice-close, .notice-box, .notice-icon').click(function () {
  $('.notice-box').stop().fadeOut(400);
  $('.notice>.notice-icon').delay(400).hide(100);
});

// 실시간 시간 변경
const currentTime = () => {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let time = document.getElementById('f-time');

  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (hours < 12) {
    time.innerHTML = '오전 ' + hours + ':' + minutes;
  } else {
    if (hours == 12) {
      time.innerHTML = '오후 ' + hours + ':' + minutes;
    } else if (hours > 12) {
      hours = hours - 12;
      time.innerHTML = '오후 ' + hours + ':' + minutes;
    }
  }
  setTimeout('currentTime()', 1000);
}
window.onload = currentTime;