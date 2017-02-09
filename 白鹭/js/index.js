/**
 * Created by cz on 2016/7/18.
 */
var swiper = new Swiper('.swiper1', {
    direction: 'vertical',
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        if(swiper.activeIndex==1){
            $("#play0").click(function(e){
                document.getElementById("video0").play();
                $("#play0").hide();
                swiper.update();
            });
            $("#video0").click(function(e){
                document.getElementById("video0").pause();
                $("#play0").show();
                swiper.update();
            });
            $("#play1").click(function(e){
                document.getElementById("video1").play();
                $("#play1").hide();
                swiper.update();
            });
            $("#video1").click(function(e){
                document.getElementById("video1").pause();
                $("#play1").show();
                swiper.update();
            });
            $("#play2").click(function(e){
                document.getElementById("video2").play();
                $("#play2").hide();
                swiper.update();
            });
            $("#video2").click(function(e){
                document.getElementById("video2").pause();
                $("#play2").show();
                swiper.update();
            });
            $("#play3").click(function(e){
                document.getElementById("video3").play();
                $("#play3").hide();
                swiper.update();
            });
            $("#video3").click(function(e){
                document.getElementById("video3").pause();
                $("#play3").show();
                swiper.update();
            });
            $("#play4").click(function(e){
                document.getElementById("video4").play();
                $("#play4").hide();
                swiper.update();
            });
            $("#video4").click(function(e){
                document.getElementById("video4").pause();
                $("#play4").show();
                swiper.update();
            });
        }else{
            for(var i=0;i<5;i++){
                document.getElementById("video"+i).pause();
                $("#play"+i).show();
            }
        }
        if(swiper.activeIndex==2){
            $(".cart1>img:nth-child(1)").animate({"opacity":"1","top":"0.6rem"},1000);
            $(".cart1>img:nth-child(2)").animate({"opacity":"1","top":"-0.3rem"},1000);
        }else{
            $(".cart1>img:nth-child(1)").animate({"opacity":"0.4","top":"0.3rem"},1000);
            $(".cart1>img:nth-child(2)").animate({"opacity":"0.4","top":"0rem"},1000);
        }
        if(swiper.activeIndex==4){
            $(".cart3>img:nth-child(1)").animate({"opacity": "1"}, 1000);
            $(".cart3>img:nth-child(2)").animate({"opacity": "1", "left": "0.3rem"}, 1000);
            $(".cart3>img:nth-child(3)").animate({"opacity": "1", "left": "4.6rem"}, 1000);
        }else {
            $(".cart3>img:nth-child(1)").animate({"opacity": "0.4"}, 1000);
            $(".cart3>img:nth-child(2)").animate({"opacity": "0.4", "left": "0"}, 1000);
            $(".cart3>img:nth-child(3)").animate({"opacity": "0.4", "left": "4.8rem"}, 1000);
        }
        if(swiper.activeIndex==7){
            $(".slidef>ul>li").click(function () {
                $(".bds").stop(true,true).animate({"height":"0rem"});
                $(this).children(".bds").stop(true,true).animate({"height":"2.37rem"});
            });
        }else{
            $(".bds").css({"height":"0rem"});
        }
    }
});
swiper.setWrapperTranslate(0);
var swiper1 = new Swiper('.swipers', {
    initialSlide: 0,
    grabCursor: true,
    nested:true,
    pagination : '.swiper-pagination',
    paginationClickable: true,
    onSwiperCreated:function(){},
    onSlideChangeStart: function() {
    },
    onSlideChangeEnd:function () {
        document.getElementById("video"+swiper1.activeIndex).pause();
        $("#play"+swiper1.activeIndex).show();
    }
});

var swiperx = new Swiper('.swiperx', {
    scrollbar: '.swiper-scrollbar',
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    nested:true,
});
var swiperd = new Swiper('.swiperd', {
    scrollbar: '.swiper-scrollbar',
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    nested:true,
});
/*var regxs = [];
regxs.push(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/g);
regxs.push(/^1\d{10}$/g);
function check(regxs,ele,text1,text2) {
    ele.onblur=function () {
        if (this.value) {
            for (var i = 0; i < this.value.length; i++) {
                if (this.value.match(regxs)) {
                    this.style.color="#000";
                }else{
                    this.value=text1;
                    this.style.color="red";
                }
            }
        }else{
                this.value=text2;
        }
    }
}
function getfocus(ele,text) {
    ele.onfocus=function () {
        this.style.color="#333";
        this.value="";
    }
}
getfocus(document.getElementById("name"));
getfocus(document.getElementById("phone"));
getfocus(document.getElementById("email"));
check(regxs[1],document.getElementById("phone"),"手机号错误","请输入你的手机号码");
check(regxs[0],document.getElementById("email"),"邮箱错误","请输入你的邮箱");
check("",document.getElementById("name"),"查无此名","请输入你的姓名");*/





