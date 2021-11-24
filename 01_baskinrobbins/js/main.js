    //서브메뉴 동작
    var menu_area = document.querySelector('.menu_area');
    var menu_bar_content = document.querySelector('.menu-bar-content');
    var gnb_sub_elements = document.querySelectorAll('.gnb_sub');
    var list_line = document.querySelector('.list_line');

    menu_bar_content.addEventListener('mouseover', function() {
        menu_area.style.height = '320px';
        list_line.style.opacity = 1;
        gnb_sub_elements.forEach(function(gnb_sub) {
            gnb_sub.style.height = 'auto';
            gnb_sub.style.opacity = 1;
        });
    });

    menu_bar_content.addEventListener('mouseout', function() {
        menu_area.style.height = '42px';
        list_line.style.opacity = 0;
        gnb_sub_elements.forEach(function(gnb_sub) {
            gnb_sub.style.height = 0;
            gnb_sub.style.opacity = 0;
        });
    });


    //search 버튼 동작
    const body = document.body;
    const searchBtn = document.querySelector('.search_icon');
    const search_status = document.querySelector('.s-off');
    const search_icon = document.querySelector('.a');

    function searchOnOff (){
        let mode = false;
        searchBtn.addEventListener('click', e => {
            body.classList.toggle('on-search');
            if(body.classList == "on-search"){
                mode = true;
                search_status.classList.remove('s-off');
                search_status.classList.add('s-on');
                search_icon.style.background="url('img/btn_search_close.gif') no-repeat";
            } else {
                mode = false;
                search_status.classList.add('s-off');
                search_status.classList.remove('s-on');
                search_icon.style.background="url('img/icon_search.png') no-repeat";
            }
        });
    }
    searchOnOff();

    
    //footer 버튼 이벤트
    const familyBtn = document.querySelector(".family-btn");
    const familyList = document.querySelector(".off");

    familyBtn.addEventListener("click", e => {
        if(familyList.classList == "off"){
            familyList.classList.remove("off");
            familyList.classList.add("on");
            familyBtn.style.background="url('img/family_size_on.png') no-repeat 100% 0";
        } else {
            familyList.classList.remove("on");
            familyList.classList.add("off");
        }
    });

