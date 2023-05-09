import Swiper, {Navigation, Pagination, Mousewheel} from 'swiper';

export function init(){

    var swiper = Swiper;
    var init = false;

    const swiperMode = () => {
        let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
        let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
        let desktop = window.matchMedia('(min-width: 1025px)');

        if(mobile.matches){
            if(init){
                init = false;
                debugger
                swiper.destroy();
            }
        }else if(tablet.matches){
            if(init){
                init = false;
                swiper.destroy();
            }            
        }else if(desktop.matches){
            if(!init){
                init = true;

                swiper = new Swiper('.swiper', {
                    direction: 'vertical',
                    setWrapperSize: true,
                    // updateOnWindowResize: false,
                    // allowTouchMove: true,
                    // loop: true,
                
                    // If we need pagination
                    pagination: {
                    clickable: true,
                    el: '.swiper-pagination',
                    },
                    // Navigation arrows
                //   navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                //   },
                    // And if we need scrollbar
                    // scrollbar: {
                    //     el: '.swiper-scrollbar',
                    //   },
                    modules: [Pagination, Mousewheel],
                    // mousewheel: {
                    //     invert: true,
                    //   }, 
                    mousewheel: true,
                    
                });

                let btnsScrollDown = document.getElementsByClassName("btn__scroll-down")
                for(let b of btnsScrollDown){
                   b.addEventListener("click", function(){
                    swiper.slideNext();
                  })
                }
                
                let slides = document.getElementsByClassName("swiper-slide");
                swiper.on("paginationUpdate", function(s, e){
                  if(slides[s.activeIndex].classList.contains("games-list")){
                    s.mousewheel.disable()
                  }else{
                    s.mousewheel.enable()
                  }
                  
                })
            }
        }
    }
    
    
    const swiperH = new Swiper('.swiper-h', {
        // setWrapperSize: true,
        // loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          // when window width is >= 480px
          800: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          
        },
        // If we need pagination
        // pagination: {
        //   clickable: true,
        //   el: '.horiz-swiper-pagination',
        // },
         // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        //   },
        modules: [Navigation, Mousewheel],
        // mousewheel: {
        //     invert: true,
        //   }, 
          mousewheel: true,
          
    });
    
    // const mediaQueryXL = window.matchMedia('(min-width: 1200px)');
    // if (!mediaQueryXL.matches) {
    //   // swiper.destroy();
    //   swiper.disable();
    //   swiper.detachEvents();
    //   // swiper.wrapperEl.style.height = "auto";
    //   // swiper.slides.forEach(e => e.style.height = 'auto');
    // }else{
    //   swiperH.disable();
    //   swiperH.detachEvents();
    // }
    
    // mediaQueryXL.addListener(function(e){
    //   if(e.matches){
    //     swiper.enable();
    //     swiper.attachEvents();
    
    //     swiperH.disable();
    //     swiperH.detachEvents();
    //   }else{
    //     swiper.disable();
    //     swiper.detachEvents();
    //     swiper.setTranslate(0);
    //     swiper.wrapperEl.style.height = "auto";
    //     swiper.slides.forEach(e => e.style.height = 'auto');
    
    //     swiperH.enable();
    //     swiperH.attachEvents();
    //   }
    // })
    
    // console.log(document.getElementsByClassName("btn__scroll-down"));


    window.addEventListener('load', function() {
        swiperMode();
    });
    
    /* On Resize
    **************************************************************/
    window.addEventListener('resize', function() {
        swiperMode();
    });
    
}