$(document).ready(function(){
  gsap.to(".tab_list", {
    scrollTrigger: {
      trigger: ".tab_list",
      start: "top top",
      endTrigger: "scroll_wrap",
      end: "bottom+=1000% bottom",
      pin: true,
      pinSpacing: false,
      // markers: true,
    }
  })
  gsap.to(".scroll_wrap", {
    scrollTrigger: {
      trigger: ".scroll_wrap",
      start: "top-=150px top",
      end: "bottom+=1000% bottom",
      pin: true,
      // scrub: true,
      markers: true,
      onUpdate(self){
        console.log(self.progress.toFixed(3))
        if(self.progress.toFixed(3) > .15) {
          $(".summary_inner").addClass("onAct");
        } else {
          $(".summary_inner").removeClass("onAct");
        }

        if(self.progress.toFixed(3) > .3) {
          $(".intro_con").eq(0).addClass("onTxt");
          console.log("으앙2");
        } else {
          $(".intro_con").eq(0).removeClass("onTxt");
        }

        if(self.progress.toFixed(3) > .5) {
          $(".summary_inner").addClass("motionTwo");
          $(".intro_con").eq(1).addClass("onTxt show");
          console.log("으앙2");
        } else {
          $(".summary_inner").removeClass("motionTwo");
          $(".intro_con").eq(1).removeClass("onTxt show");
        }

        if(self.progress.toFixed(3) > .7) {
          $(".summary_inner").addClass("motionThr");
          $(".intro_con").eq(2).addClass("onTxt show");
          console.log("으앙2");
        } else {
          $(".summary_inner").removeClass("motionThr");
          $(".intro_con").eq(2).removeClass("onTxt show");
        }

        if(self.progress.toFixed(3) > .9) {
          $(".intro_con").addClass("onTxt2");
          console.log("으앙3");
        } else {
          $(".intro_con").removeClass("onTxt2");
        }
      }
    }
  })
});