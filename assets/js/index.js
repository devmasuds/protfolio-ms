
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 25000,
    disableOnInteraction: false,
  },
  loop:true,
    navigation: {
      nextEl: ".valuable-next",
      prevEl: ".valuable-prev",
    },
  });

      
  const toTop=document.querySelector(".top-bottom");
  window.addEventListener("scroll",()=>{
      if(window.pageYOffset >200){
          toTop.classList.add("active");
      }else{
          toTop.classList.remove("active");
      }
  });
  $(window).scroll(function(){
    var sticky = $('.header-menu'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 300) sticky.addClass('menu-fixed');
    else sticky.removeClass('menu-fixed');
  });




$(".opne-menu ,.header-close").click(function(){
  $(".navbar").toggleClass("active")
});