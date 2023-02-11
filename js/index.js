(function() {
  var $aboutContent3 = $('.js-about-content3');
  var $aboutContent2 = $('.js-about-content2');
  var $aboutContent1 = $('.js-about-content1');
  var $aboutHolder = $('.js-about-holder');
  var $aboutContainer = $('.js-about-container');
  var $btnAboutValues = $('.js-btn-about-values');
  var $btnAboutMission = $('.js-btn-about-mission');
  var $btnAboutVision = $('.js-btn-about-vision');


  $btnAboutVision.on('click', {index:0}, changeAbout);
  $btnAboutMission.on('click', {index:1}, changeAbout);
  $btnAboutValues.on('click', {index:2}, changeAbout);

  $aboutContainer.css('height', $aboutContent1.height());

  /*--- About Tab ---*/

  function changeAbout(e) {  
    var th = 0;
    var thy = 0;
    var moveY = 0;
    
    switch(e.data.index) {
      case 0:
        $btnAboutVision.addClass('tab-active');
        $btnAboutMission.removeClass('tab-active');
        $btnAboutValues.removeClass('tab-active');
        
        th = 0;
        thw = $aboutContent1.height();
        thy = th * -1;
      break;
      case 1:
        $btnAboutVision.removeClass('tab-active');
        $btnAboutMission.addClass('tab-active');
        $btnAboutValues.removeClass('tab-active');
        
        th = $aboutContent1.height();
        thw = $aboutContent2.height();
        thy = th * -1;
      break;
      case 2:
        $btnAboutVision.removeClass('tab-active');
        $btnAboutMission.removeClass('tab-active');
        $btnAboutValues.addClass('tab-active');
        
        th = $aboutContent1.height() + $aboutContent2.height();
        thw = $aboutContent3.height();
        thy = th * -1;
      break;
    }
    
    moveY = thy;
    $aboutHolder.css('top', moveY);
    $aboutContainer.css('height', thw);
    
    return false;
  }
})();