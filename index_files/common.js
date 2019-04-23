$(function(){
	  // pageup
  var topBtn = $('.pagetop.pc');	
  var topBtn2 = $('.pagetop.sp');	
  var wW = $(window).width();
    topBtn.hide();
  if(wW < 768){
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn2.fadeIn();
		} else {
			topBtn2.fadeOut();
		}
	});
  } else {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
  }
	
$('.mv #squaremv .number').addClass('bounceIn animated');
 
	
	/*  スクロールエフェクト  */
  $('.effect').css({display:'block',opacity:'0'});	

  $(window).scroll(function () {
    var delayHeight = 50;

    $('.effect').each(function(){
      var setThis = $(this),
      elmTop = setThis.offset().top,
      elmHeight = setThis.height(),
      scrTop = $(window).scrollTop(),
      winHeight = $(window).height();

      if (scrTop > elmTop - winHeight + 100 + delayHeight && scrTop < elmTop + elmHeight + 100 ){
        setThis.stop().animate({opacity:'1'},400);
      } else if (scrTop < elmTop - winHeight + delayHeight && scrTop < elmTop + delayHeight){
 	    setThis.stop().animate({opacity:'0'},400);
      }

    });

	$(".performance .number").each(function(){
      var setThis = $(this),
      elmTop = setThis.offset().top,
      elmHeight = setThis.height(),
      scrTop = $(window).scrollTop(),
      winHeight = $(window).height();

      if (scrTop > elmTop - winHeight + 100 + delayHeight && scrTop < elmTop + elmHeight + 100 ){
		$('#square .number').addClass('bounceIn animated');
		// trick to execute the animation again
        } else if (scrTop < elmTop - winHeight + delayHeight && scrTop < elmTop + delayHeight){
  	      $('#square .number').removeClass('bounceIn animated');
		}
	  });
    });
	
	/*タブ*/
	$(".tab .menu li").on("click", function(){
	  var This = $(".tab .menu li").index(this);  
	  $(".tab .content li").hide();
	  $(".tab .content li").eq(This).css({display:"block"});
	  $('.tab .menu li,.tab .content li').removeClass('select');
	  $(this).addClass('select');
	  $(".tab .content li").eq(This).addClass('select');
	});
	

	/* スムーススクロール */	
	$('a[href^=#]').click(function() {
		  // スクロールの速度
		  var speed = 400; // ミリ秒
		  // アンカーの値取得
		  var href= $(this).attr("href");
		  // 移動先を取得
		  var target = $(href == "#" || href == "" ? 'html' : href);
		  // 移動先を数値で取得
		  var position = target.offset().top;
		  // スムーススクロール
		  $('body,html').animate({scrollTop:position}, speed, 'swing');
		  return false;
	});


	/* サポートアコーディオン */	
  var w = $(window).width();
  if(w < 768){
    $(".support-box li").on("click", function(){
		$(this).children(".support-in").children("dl").children("dd").slideToggle();
		$(this).children(".support-in").children("img").slideToggle();
		$(this).children(".ac-btn").toggleClass("open");
	});
  }
  
  /*  spmenu  */
  MenuAccordion = function(){
	var speed = 200;

	$("#menuButton").on('click',function(){
	  if($(this).hasClass('active')){
	    $(this).removeClass("active");
	    $(".spmenu-list").slideUp(speed);
	  }else{
	    $(this).addClass("active");
	    $(".spmenu-list").slideDown(speed);
	  }
	});  
  };
  MenuAccordion();

  /*  リンク幅  
  $('.link').each(function() {
    var length = $(this).children('li').length,
        linkW = 100 / length;

    if(w > 768){
      $(this).children('li').css({"width":linkW + "%"});
    } else {
      $(this).children('li').css({"width": "100%"});
    }
  });*/
  
  
  /*$(function(){
	do {
		$(".slick-track").children("li:lt(3)").wrapAll('<ul class="line"></ul>');
	}while($(".slick-track").children("li").length);
  });*/
  
  /*  メインビジュアル全画面  
  var mvHeight = $(window).height() + 46;
  $(".mv iframe").css({"height": mvHeight}); */
 
   /*  サムネ処理  */
  $(".news li .img,.other li .img,.slick-slide .img,.work-list li").each(function() {
    if(!$(this).find("img").length){
	  $(this).html('<img src="http://replus-d.ickb.biz/wp/wp-content/themes/replus-d/img/noimage.jpg">');
	}
  });

  $('.attachment-thumbnail').each(function(){
    var txt = $(this).attr("src").replace( /-150x150/g , "" );

	$(this).attr({src: txt});
	$(this).removeAttr("width");
    $(this).removeAttr("height");
  });

  /* spmenu */
  var spHeight = $('.sphead').height() + 20;
  if(w < 768){
    $('body').css({"padding-top":spHeight + "px"});
  }
  
  /* asidemenu処理 
  $('aside .menu li').each(function() {
    var liW = $(this).width();
	$(this).children("a").css({"width": liW + "px","height":liW + "px"});
  });
  $(window).resize(function() {
    $('aside .menu li').each(function() {
      var liW = $(this).width();
	  $(this).children("a").css({"width": liW + "px","height":liW + "px"});
    });
  });*/

  /* ニュース */
  $('.news-wrap').children(".entry-footer").remove();

  $('.navi.plink a,.single-replus_news .inner .navi a').addClass('btnlink');

  var path = location.pathname ;
  if(path === "/replus_news_cat/information/"){
    $('.news .link li:nth-child(2)').addClass('selected');
  } else if(path === "/replus_news_cat/press-release/"){
    $('.news .link li:nth-child(3)').addClass('selected');
  }if(path === "/replus_news_cat/others/"){
    $('.news .link li:nth-child(4)').addClass('selected');
  }

  $('.nimg img').attr('sizes','');
  
  var mae = $('.single-replus_news .in a:first-child').text().indexOf('前の記事');
  if(mae === -1){
    $('.single-replus_news .in').prepend('<a></a>');
  }

  /* お問い合わせ */
  $('input.required').attr('required','required');
  $('.comfirm .inquiry tr').each(function() {
    var name = $(this).children('td').find('input').attr('name');
  
    $(this).children('th').html(name);
  });
  
  /* 実績 */
  var title = $(".single-works .title").text().replace("　","<br>");
  $(".single-works .title").html(title);

  $('.top .product .tops li').each(function(){
    var heili = $(this).height();
  
    $(this).children('a').children('div').height(heili);
  });
});