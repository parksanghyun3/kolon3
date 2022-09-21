$(document).ready(function(){

  
  var _winH = $(window).innerHeight();
  var _social = $(".social_programs").offset().top;

  ScrollTrigger.matchMedia({
    "(min-width: 1025px)": function(){
      gsap.to(".scroll_wrap", {
        scrollTrigger: {
          trigger: ".scroll_wrap",
          start: "top-=140px top",
          end: "bottom+=1000% bottom-=343",
          pin: true,
          // markers: true,
          onUpdate(self){
            // console.log(self.progress.toFixed(3))
            if(self.progress.toFixed(3) > .15) {
              $(".summary_inner").addClass("onAct");
            } else {
              $(".summary_inner").removeClass("onAct");
            }
    
            if(self.progress.toFixed(3) > .3) {
              $(".intro_con").eq(0).addClass("onTxt");
            } else {
              $(".intro_con").eq(0).removeClass("onTxt");
            }
    
            if(self.progress.toFixed(3) > .5) {
              $(".summary_inner").addClass("motionTwo");
              $(".intro_con").eq(1).addClass("onTxt show");
            } else {
              $(".summary_inner").removeClass("motionTwo");
              $(".intro_con").eq(1).removeClass("onTxt show");
            }
    
            if(self.progress.toFixed(3) > .7) {
              $(".summary_inner").addClass("motionThr");
              $(".intro_con").eq(2).addClass("onTxt show");
            } else {
              $(".summary_inner").removeClass("motionThr");
              $(".intro_con").eq(2).removeClass("onTxt show");
            }
    
            if(self.progress.toFixed(3) > .9) {
              $(".intro_con").addClass("onTxt2");
            } else {
              $(".intro_con").removeClass("onTxt2");
            }
          },
        },
      })
    
      gsap.to(".tab_list", {
        scrollTrigger: {
          trigger: ".tab_list",
          start: "top top",
          endTrigger: ".scroll_wrap",
          end: "bottom+=1000% bottom-=343",
          pin: true,
          pinSpacing: false,
        }
      })
    
      $(window).on("scroll", function(){
        var winT = $(this).scrollTop();
        var winH = $(window).innerHeight() / 2;
        var social = $(".social_programs").offset().top;
    
        if(winT > social - winH) {
          $(".social_programs").addClass("onMotion");
          // if((".social_programs").hasClss("onMotion")) {
          //   // .motion_bg
          // }
        }
      })
    },

    "(min-width: 1024px)": function(){
      $(window).on("scroll", function(){
        var winT = $(this).scrollTop();
        var winH = $(window).innerHeight() / 2;
        // var social = $(".social_programs").offset().top;
        
        $(".con_list").each(function(){
          var conList = $(this).offset().top;
          if(winT > conList - winH) {
            $(this).addClass("onMotionMob");
            // $(".social_programs").addClass("onMotion");
          }
        });
      })
    }


  })


  



});