

//** 돋보기 창 -> 통합검색 항목 이벤트 

const sub_list = document.querySelector('.smenu_list');
const searchBtn = document.querySelector('.smenu_search');
const searchInput = document.querySelector('.search_input');
const searchIcon = document.querySelector('.search_icon');

//search 클릭 이벤트
searchBtn.addEventListener('click', (e) => {
    //a태그 링크 막기
    e.preventDefault();
    //기타 css 변경
    sub_list.style.right = '120px';
    searchBtn.style.width = "145px";
    searchInput.style.display = 'block';
    //input 내 placeholder 추가 
    searchInput.placeholder = "통합검색";
    //input에 focus주기
    searchInput.focus();
});

//input value가 없을 때 alert 띄우기
searchInput.addEventListener("focus", (e) =>{
    if(searchInput.value == ""){
        searchIcon.onclick = () => alert("검색어를 입력하세요.");
    }
});


//** 서브메뉴 mouseover이벤트
const menuheader = document.querySelector(".header_menu");
const menuList = document.querySelectorAll(".menu_nav");
const subMenu = document.querySelectorAll(".menu_sub_container");
const headerHeight = menuheader.offsetHeight;
let subMenuHeight = 0;

for(let i = 0; i<menuList.length; i++){
    //각 메뉴탭에 마우스를 올릴 때마다
    menuList[i].addEventListener('mouseover', function(){
        //subMenuHeight를 각 서브메뉴의 높이로 지정 후,
        subMenuHeight = this.querySelector('.menu_sub_container').offsetHeight;
        //메뉴탭 높이 + 각 서브메뉴의 높이
        menuheader.style.height = headerHeight+ subMenuHeight + 'px';       
    });
    //각 메뉴탭에서 마우스가 나올 때마다
    menuList[i].addEventListener('mouseout', function(){
        //메뉴탭 높이는 메뉴탭 높이 + 0px
        menuheader.style.height = headerHeight + 'px';
    });    
}



//** 프로모션창 펼쳐짐 기능
const pro_btn = document.querySelector('.pro_btn');
const prom_info = document.querySelector('.prom_info');
// false = 접힌 상태로 시작
let prom_info_down = false;

// 버튼 클릭 이벤트 리스너
pro_btn.addEventListener('click', e => {
    if(prom_info_down) {
        // 클릭시 height 값을 바꾸어 접히도록 하기
        prom_info.style.height = "0px";
        // false 상태 = 접혀져 있는 상태로 바꾸기
        prom_info_down = false;
        // 버튼 이미지 바꿔주기
        pro_btn.classList.replace('prom_btn_up', 'prom_btn_down');
    } else {
        // 클릭시 height 값을 바꾸어 펼쳐지도록 하기
        prom_info.style.height = "655px";
        // true 상태 = 펼쳐져 있는 상태로 바꾸기
        prom_info_down = true;
        // 버튼 이미지 바꿔주기
        pro_btn.classList.replace('prom_btn_down', 'prom_btn_up');
    }
    
});

//** 자동 스와이프 기능 on/off 버튼 기능
const swiper_play_btn = document.querySelector('.swiper_play_btn');
// false 상태 = pause 버튼이 보이게 시작 = 현재 재생 중
let swiper_play_btn_is_on = false;

// 버튼 클릭 이벤트 리스너
swiper_play_btn.addEventListener('click', event => {
    if(swiper_play_btn_is_on) {
        // 클릭시 false 상태(재생 중)로 바꿔주기
        swiper_play_btn_is_on = false;
        // 보이는 이미지 재생버튼 뺴주고 멈춤버튼 넣어주기
        swiper_play_btn.classList.replace('swiper_play_btn_on', 'swiper_play_btn_off');
        // swiper 제공 프로퍼티&함수, 오토플레이 시작
        swiper.autoplay.start();
    } else {
        // 클릭시 true 상태(재생 중)로 바꿔주기
        swiper_play_btn_is_on = true;
        // 보이는 이미지 멈춤버튼 뺴주고 재생버튼 넣어주기
        swiper_play_btn.classList.replace('swiper_play_btn_off', 'swiper_play_btn_on');
        // swiper 제공 프로퍼티&함수, 오토플레이 멈춤
        swiper.autoplay.stop();
    }
});


//** 공지사항 게시글 롤링 

function textScroll(scroll_el_id) {
    //해당 파라미터를 가진 클래스를 가져와서
    this.objElement = document.getElementById(scroll_el_id);
    //css 설정 변경
    this.objElement.style.position = 'relative';
    this.objElement.style.overflow = 'hidden';

    this.objLi = this.objElement.getElementsByTagName('li');
    // li 엘리먼트가 움직이는 높이
    this.height = this.objElement.offsetHeight; 
    // li 엘리먼트의 총 개수
    this.num = this.objLi.length; 
    // 총 높이
    this.totalHeight = this.height*this.num;
    // 스크롤되는 px 
    this.scrollspeed = 1; 
    // 각 li의 top 위치를 저장
    this.objTop = new Array(); 
    this.timer = null;
    
    for(var i=0; i<this.num; i++){
        this.objLi[i].style.position = 'absolute';
        this.objTop[i] = this.height*i;
        this.objLi[i].style.top = this.objTop[i]+"px";
    }
}
//textScroll에 move 추가
textScroll.prototype.move = function(){
    //li 엘리먼트의 개수 만큼 반복
    for(var i=0; i<this.num; i++) {
        //top깂 -  scrollspeed 설정값
        this.objTop[i] = this.objTop[i] - this.scrollspeed;
        this.objLi[i].style.top = this.objTop[i]+"px";
    }
    if(this.objTop[0]%this.height == 0){
        //jump로 연결
        this.jump();
    }else{
        //clearTimeout으로 연결
        clearTimeout(this.timer);
        this.timer = setTimeout(this.name+".move()",50);
    }
}

//textScroll에 jump 추가
textScroll.prototype.jump = function(){
    for(var i=0; i<this.num; i++){
        if(this.objTop[i] == this.height*(-2)){
            this.objTop[i] = this.objTop[i] + this.totalHeight;
            //top 위치 + px
            this.objLi[i].style.top = this.objTop[i]+"px";
        }
    }
    clearTimeout(this.timer);
    this.timer = setTimeout(this.name+".move()",3000);
}

//textScroll에 start 추가
textScroll.prototype.start = function() {
    this.timer = setTimeout(this.name+".move()",3000);
}

//id값 => scroll (공지사항 게시물)
var real_search_keyword = new textScroll('scroll'); 
real_search_keyword.name = "real_search_keyword"; 
real_search_keyword.start();

