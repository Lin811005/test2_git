const swiper = new Swiper('.swiper', {
  Mode: true,
  loop: true,
  // Optional parameters
  
  slidesPerView: 1,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay:{delay:3500, disableOnInteraction:false}
	
  });	  	

  $(window).on('load',function(){
  lazyLoadInstance.update(); //重新觸發圖片延遲,針對共用素材,無限輪播
	
  });
