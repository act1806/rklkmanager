(function($) {
  
  "use strict";  

  $(window).on('load', function() {

  /*Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /** 图片懒加载
     ============================================================== */
    // 一开始没有滚动的时候，出现在视窗中的图片也会加载
    start();

    // 当页面开始滚动的时候，遍历图片，如果图片出现在视窗中，就加载图片
    var clock; //函数节流
    $(window).on('scroll',function(){
        if(clock){
            clearTimeout(clock);
        }
        clock = setTimeout(function(){
            start()
        },200)
    })
    
    function start(){
         $('.container img').not('[data-isLoading]').each(function () {
            if (isShow($(this))) {
                loadImg($(this));
            }
        })
    }


    // 判断图片是否出现在视窗的函数
    function isShow($node){
        return $node.offset().top <= $(window).height()+$(window).scrollTop();
    }

    // 加载图片的函数，就是把自定义属性data-src 存储的真正的图片地址，赋值给src
    function loadImg($img){
            $img.attr('src', $img.attr('data-src'));

            // 已经加载的图片，我给它设置一个属性，值为1，作为标识
            // 弄这个的初衷是因为，每次滚动的时候，所有的图片都会遍历一遍，这样有点浪费，所以做个标识，滚动的时候只遍历哪些还没有加载的图片
            $img.attr('data-isLoading',1);
    }

  /**FORMAT TIME
   * =========================================================*/
    function formatDateTime(inputTime) {
        var date = new Date(inputTime);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        var minute = date.getMinutes();
        var second = date.getSeconds();
        minute = minute < 10 ? ('0' + minute) : minute;
        second = second < 10 ? ('0' + second) : second;
        return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
    };

    /* ==========================================================================
       countdown timer
       ========================================================================== */
     jQuery('#clock').countdown('2018/06/21',function(event){
      var $this=jQuery(this).html(event.strftime(''
      +'<div class="time-entry days"><span>%-D</span> Days</div> '
      +'<div class="time-entry hours"><span>%H</span> Hours</div> '
      +'<div class="time-entry minutes"><span>%M</span> Minutes</div> '
      +'<div class="time-entry seconds"><span>%S</span> Seconds</div> '));
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'liner',
        allowParentLinks: true,
        duplicate: true,
        label: '',
      });

      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });
    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
      });

    // one page navigation 
    $('.navbar-nav').onePageNav({
            currentClass: 'active'
    }); 

    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

    /* 读取新闻
    ==========================================================*/
      $.ajax({
        //几个参数需要注意一下
        type: "GET",//方法类型
        dataType: "json",//预期服务器返回的数据类型
        url: "http://www.bj-rklk.com/news/list1" ,//url

        contentType: "application/json;charset-UTF-8",
        success : function(data){

          for (var i = data.length+1; i < 6; i++) {
            $("#heading1" + i).remove();
          }

          for (var i = 1; i < data.length+1; i++) {
            $("#list1title" + i).html(data[i-1].title);
            $("#list1time" + i).html(formatDateTime(data[i-1].createTime));
            $("#list1content" + i).html(data[i-1].content);
            $("#list1img" + i).attr('src',data[i-1].pic);
          }
            
        },
        error : function() {
            alert("异常！");
        }
    });

    $.ajax({
      //几个参数需要注意一下
      type: "GET",//方法类型
      dataType: "json",//预期服务器返回的数据类型
      url: "http://www.bj-rklk.com/news/list2" ,//url

      contentType: "application/json;charset-UTF-8",
      success : function(data){
          for (var i = data.length+1; i < 6; i++) {
            $("#heading2" + i).remove();
          }

          for (var i = 1; i < data.length+1; i++) {
            $("#list2title" + i).html(data[i-1].title);
            $("#list2time" + i).html(formatDateTime(data[i-1].createTime));
            $("#list2content" + i).html(data[i-1].content);
            $("#list2img" + i).attr('src',data[i-1].pic);
          }
         
      },
      error : function() {
          alert("异常！");
      }
  });

  $.ajax({
    //几个参数需要注意一下
    type: "GET",//方法类型
    dataType: "json",//预期服务器返回的数据类型
    url: "http://www.bj-rklk.com/news/list3" ,//url

    contentType: "application/json;charset-UTF-8",
    success : function(data){
       // console.log(data);
        for (var i = data.length+1; i < 6; i++) {
          $("#heading3" + i).remove();
        }

        for (var i = 1; i < data.length+1; i++) {
          $("#list3title" + i).html(data[i-1].title);
          $("#list3time" + i).html(formatDateTime(data[i-1].createTime));
          $("#list3content" + i).html(data[i-1].content);
          $("#list3img" + i).attr('src',data[i-1].pic);
        }
    },
    error : function() {
        alert("异常！");
    }
});

$.ajax({
  //几个参数需要注意一下
  type: "GET",//方法类型
  dataType: "json",//预期服务器返回的数据类型
  url: "http://www.bj-rklk.com/news/list4" ,//url

  contentType: "application/json;charset-UTF-8",
  success : function(data){
    for (var i = data.length+1; i < 6; i++) {
      $("#heading4" + i).remove();
    }

    for (var i = 1; i < data.length+1; i++) {
      $("#list4title" + i).html(data[i-1].title);
      $("#list4time" + i).html(formatDateTime(data[i-1].createTime));
      $("#list4content" + i).html(data[i-1].content);
      $("#list4img" + i).attr('src',data[i-1].pic);
    }
  },
  error : function() {
      alert("异常！");
  }
});

    /**登录跳转 */
    $('#lg-btn').on('click',function(event) {
      window.location.href = "login1.html"; 
    });
    

  });      

}(jQuery));