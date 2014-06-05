
var focusApp;
var lockApp = false;
var maxApp = 0;
var originalOffset;

$(window).load(function(){

	$('body').addClass('overflow');

	$('#projects li').hover(function(e) {
		if(!lockApp){
			$(e.currentTarget).find('.overview').addClass('hover');
			if(!($(e.currentTarget).hasClass('selected'))){
				$(e.currentTarget).find('.app-bar').addClass('hover');
			}
			checkDevices($(e.currentTarget));		
		}
	}, function(e) {
		if(!lockApp){
			$(e.currentTarget).find('.overview').removeClass('hover');
			$(e.currentTarget).find('.app-bar').removeClass('hover');
			resetDevices();
		}
	});

	$('#projects li').on('click', function(e) {
		if(!$(e.currentTarget).hasClass('selected')){
			stackDeck($(e.currentTarget));
			$(e.currentTarget).addClass('selected');
			$(e.currentTarget).find('.app-bar').removeClass('hover');	
		}
	});

	$('#nav-idle').on('click', function(e) {
		TweenMax.to($('#nav'), 0.2, {width:'0px', onComplete:function(){
			changeNav('expanded');
		}});
	});

	$('#nav-close').on('click', function(e) {
		TweenMax.to($('#nav'), 0.2, {width:'0px', onComplete:function(){
			changeNav('idle');
		}});
	});

	$('.back').on('click', function(e) {
		//unstackDeck();
		toggleApp(focusApp);
		lockApp = false; 
		resetDevices();
	});

	$('.load-btn').on('click', function(e) {
		var target = $(e.currentTarget).parents('li');
		loadApp(target);
	});

	//fullIntro();
	briefIntro();

});

function fullIntro() {
	TweenMax.to($('body'), 4, {backgroundColor:'#DFE5E6'});
	TweenMax.to($('#ribbon'),0,{marginTop:'-'+$('#ribbon').outerHeight()/1.7+'px'});
	TweenMax.to($('#ribbon .container'),0,{marginLeft:'-'+$('#logo-img').outerWidth()/2+'px'});
	TweenMax.to($('#logo-img'),3,{opacity:'1', delay:'1', onComplete:intro_moveRibbon});	
}

function briefIntro() {
	TweenMax.to($('body'), 0, {backgroundColor:'#DFE5E6'});
	TweenMax.to($('#ribbon'),0,{marginTop:'-'+$('#ribbon').outerHeight()/1.7+'px'});
	TweenMax.to($('#ribbon .container'),0,{marginLeft:'-'+$('#logo-img').outerWidth()/2+'px'});
	TweenMax.to($('#logo-img'),0,{opacity:'1', delay:'1'});	
	TweenMax.to($('.anim-ribbon'), 0, {left:'0'});
	TweenMax.to($('#logo-img'), 0, {opacity:'0', delay:'0.1'});
	TweenMax.to($('#logo-text'), 0, {opacity:'1', delay:'0.3'});
	TweenMax.to($('body'),0,{backgroundColor:'#000'});
	TweenMax.to($('#ribbon .container'), 0, {left:'90%', delay:'0.1', ease:Back.easeOut});
	TweenMax.to($('.anim-ribbon'), 0, {backgroundColor:'#1D1D1D'});
	TweenMax.to($('#ribbon .everform-paralax'), 0, {opacity:'1'});
	TweenMax.to($('#ribbon .everform-paralax'), 0, {top:'-50px', repeat:10, yoyo:true});
	TweenMax.to($('#ribbon .everform-paralax2'), 0, {top:'50px', repeat:10, yoyo:true});
	TweenMax.to($('#ribbon .text-container'), 0, {delay:'0.6', width:'220px'});
	TweenMax.to($('#ribbon .container'), 0, {left:'75%', delay:'0.6'});
	TweenMax.to($('#ribbon .everform-paralax2'), 0, {opacity:'1'});	
	TweenMax.to($('#ribbon'), 0, {marginTop:'0', top:'0%', height:'100px', boxShadow:'0 3px 3px 0px rgba(0, 0, 0, 0.5)'});
	TweenMax.to($('#ribbon .container'), 0, {marginTop:'5px', marginBottom:'5px'});
	TweenMax.to($('.progressbar-border'), 0, {width:'100%', onComplete:loadContainers});
}

function intro_moveRibbon() {
	TweenMax.to($('.anim-ribbon'), 0.3, {left:'0', onComplete:changeRibbonColor});
	TweenMax.to($('#logo-img'), 0.3, {opacity:'0', delay:'0.1'});
	TweenMax.to($('#logo-text'), 0.4, {opacity:'1', delay:'0.3'});
	TweenMax.to($('body'),1,{backgroundColor:'#000'});
	TweenMax.to($('#ribbon .container'), 1.5, {left:'90%', delay:'0.1', ease:Back.easeOut, onComplete:intro_animText});
}

function changeRibbonColor() {
	TweenMax.to($('.anim-ribbon'), 1.2, {backgroundColor:'#1D1D1D'});
	TweenMax.to($('#ribbon .everform-paralax'), 3, {opacity:'1'});
	TweenMax.to($('#ribbon .everform-paralax'), 40, {top:'-50px', repeat:10, yoyo:true});
	TweenMax.to($('#ribbon .everform-paralax2'), 40, {top:'50px', repeat:10, yoyo:true});
}

function intro_animText() {
	TweenMax.to($('#ribbon .text-container'), 0.4, {delay:'0.6', width:'220px', onComplete:intro_animSubtitle});
	TweenMax.to($('#ribbon .container'), 0.4, {left:'75%', delay:'0.6'});
	TweenMax.to($('#ribbon .everform-paralax2'), 3, {opacity:'1'});
}

function intro_animSubtitle() {
	TweenMax.to($('#ribbon .subtitle'), 1, {opacity:'1', onComplete:intro_nextPage});
}

function intro_nextPage() {
	$('#ribbon').css('position','fixed');
	$('body').removeClass('overflow');

	setTimeout( function(){
		TweenMax.to($('#ribbon'), 0.3, {marginTop:'0', top:'0%', height:'100px', boxShadow:'0 3px 3px 0px rgba(0, 0, 0, 0.5)'});
		TweenMax.to($('#ribbon .container'), 0.3, {marginTop:'5px', marginBottom:'5px'});
		TweenMax.to($('.progressbar-border'), 0.7, {width:'100%', onComplete:loadContainers});
	}, 1000);
}

function loadContainers() {
	TweenMax.to($('.container'), 1.5, {opacity:'1', onComplete:loadProjects});

	var projectsHeight = $(window).outerHeight() - $('#ribbon').outerHeight() - $('#devices').outerHeight();
	$('#projects').css('height',projectsHeight);
}

function loadProjects() {
	var width = Math.round($('#projects .container').outerWidth()*0.23);

	TweenMax.to($('#projects li'), 0, {width: width + 'px'});
	TweenMax.to($('#projects .load'), 0, {width: $('#projects li').innerWidth() + 'px', delay:'1'});
	TweenMax.to($('#projects .img-thumbnail'), 0, {top: ($('#projects .content').outerHeight()/2 - $('#projects .img-thumbnail').outerHeight()/2) + 'px'});
	
	$('#projects ul').addClass('ease-to-left');
	TweenMax.to($('#projects ul'), 0.8, {left:'0', ease:Back.easeOut, onComplete:function(){
		$('#projects ul').removeClass('ease-to-left');
	}});

	maxApp = 0;
	$( "#projects li" ).each(function(i){
		$(this).data('order',i);
		maxApp++;
	});

	TweenMax.to($('#projects ul'), 0, {width: ($('#projects li').outerWidth()*maxApp) + 2 + 'px'});

	changeNav('idle');
}


function changeNav(NAV_STATE) {

	switch (NAV_STATE) {
        case ('expanded'):
        	$('#nav').addClass('expanded');
			TweenMax.to($('#nav'), 0, {top:$(window).outerHeight()/2 - $('#nav').outerHeight()/2 + 'px', onComplete:function(){
				TweenMax.to($('#nav'), 0.1, {width:'100%', boxShadow:'0 1px 5px 2px rgba(0, 0, 0, 0.5)'});
			}});
            break;
        case ('idle'):
        	$('#nav').removeClass('expanded');
           	TweenMax.to($('#nav'), 0, {height:'50px', top:$('#ribbon').outerHeight() + $('#devices').outerHeight() - $('#nav').outerHeight()/2 + 'px', onComplete:function(){
           		TweenMax.to($('#nav'), 0.5, {width:'50px', boxShadow:'0 1px 5px 2px rgba(0, 0, 0, 0.5)'});
           	}});
            break;
	}
}

function checkDevices(li) {
	if(!lockApp){
		if(li.data('android')){
			TweenMax.to('li.android img', 0.2, {top:'0'});
		}
		else {
			TweenMax.to('li.android img', 0.2, {top:'300px'});
		}

		if(li.data('ipad')){
			TweenMax.to('li.ipad img', 0.2, {top:'0'});
		}
		else {
			TweenMax.to('li.ipad img', 0.2, {top:'300px'});
		}

		if(li.data('iphone')){
			TweenMax.to('li.iphone img', 0.2, {top:'0'});
		}
		else {
			TweenMax.to('li.iphone img', 0.2, {top:'300px'});
		}

		if(li.data('kiosk')){
			TweenMax.to('li.kiosk img', 0.2, {top:'0'});
		}
		else {
			TweenMax.to('li.kiosk img', 0.2, {top:'300px'});
		}	
	}
}

function resetDevices(li) {
	if(!lockApp){
		TweenMax.to('li img', 0.2, {top:'0'});
	}
}

function stackDeck(li, state) {
	focusApp = li;
	lockApp = true;
	originalOffset = li.offset().left;
	var selected = li.data('order');
	var width = $(li).outerWidth();
	var longestDelay = 1.05/maxApp;
	var centerLeftPos = ( $( document ).width() /2.0)-(width/2.0);
	var centerPos = centerLeftPos - li.offset().left;
	var initMoveSpeed = .6/maxApp;

	TweenMax.to(li, 0, {zIndex: '50'});

	
	//stack cards
	$( "#projects li" ).each(function(i){
		var moveInteger = selected - $(this).data('order');
		var moveSpeed = initMoveSpeed*Math.abs(moveInteger);
		var delayTime = longestDelay - (moveInteger/(maxApp- selected)*.15);
		var aniAttr = {left: ( (width) * moveInteger ) + 'px', ease:Sine.easeOut, delay: delayTime};

		TweenMax.to($(this), moveSpeed, aniAttr)
	});

	//move stack to center
	$( "#projects li" ).each(function(i){
		var moveInteger = selected - $(this).data('order');
		var delayTime = longestDelay+ (.035*(maxApp-selected));
		var aniAttr = {left: "+=" + centerPos+ 'px', ease:Sine.easeOut, delay: delayTime};

		if(moveInteger != 0 ){
			aniAttr.opacity = 0;
		}
		else{
			aniAttr.onComplete = function(){
				 $(".back").fadeIn();
				 toggleApp(li);
				};
		}

		TweenMax.to($(this), .2, aniAttr);
	});

	//toggleApp(li);
}

function unstackDeck(li){
	var selected = focusApp.data('order');
	var width = focusApp.outerWidth();
	var longestDelay = .15;
	var centerLeftPos = ( $( document ).width() /2.0)-(width/2.0);
	var centerPos = centerLeftPos - originalOffset;


	lockApp = false;
	$(".back").fadeOut();

	//move cards to left
	$( "#projects li" ).each(function(i){
		var delayTime = longestDelay+ (.07*(selected));
		var aniAttr = {left: '-=' + centerPos + 'px', ease:Sine.easeOut, opacity:1};

		TweenMax.to($(this), .2, aniAttr);
	});

	$( "#projects li" ).each(function(i){
		var moveInteger =  $(this).data('order')-selected;
		var moveVal = (moveInteger);
		var delayTime = .2;
		var aniAttr = {left: moveVal + 'px', ease:Sine.easeOut, delay: delayTime};	
		TweenMax.to($(this), .2, aniAttr);
	});

	TweenMax.to(li, 0, {delay:'2', zIndex: '0'});
}


function toggleApp(li) {
	if(!li.hasClass('shed')) {
		li.addClass('shed');

		TweenMax.to(li.find('.icon-ribbon'), 0, {x:'-300px'});
		TweenMax.to(li.find('.load-container'), 0.2, {width:'100%', onComplete:function() {
			TweenMax.to(li.find('.shed-bar'), 0.1, {width:'0px'});
			TweenMax.to(li.find('.icon-ribbon'), 0.5, {x:'0'});
		}});
	}
	else {
		TweenMax.to(li.find('.shed-bar'), 
			0.1, 
			{width: '10px',
				onComplete: function(){
				TweenMax.to(li.find('.load-container'),
							0.2, 
							{width:'0px', onComplete: function(){
								li.removeClass('shed');
								li.removeClass('selected');
								unstackDeck(li);
							}})}}
		);
	}
}

function loadApp(li) {
	lockApp = true;
	loadAnim = li.find('.load-anim-container');
	loadBtn = li.find('.load-btn');

	var tempColor = li.find('.icon-ribbon').css('color');

	$('#appPDV').css('background',tempColor);
	$('.load-anim').css('background', tempColor);

	TweenMax.to(loadBtn, 1, {opacity:'0', onComplete:function(){
		li.find('.app-bar').addClass('hover');
		TweenMax.to(loadAnim, 3, {delay:'2', height:'100%', top:'-10px'});

		TweenMax.to('#appPDV', 3, {delay:'2.5', opacity:'1', onComplete:function(){
			resetApp(li, loadAnim, loadBtn);
		}});
	}});
}

function resetApp(li, loadAnim, loadBtn) {
	li.find('.app-bar').removeClass('hover');
	TweenMax.to(loadBtn, 0, {delay:'2', opacity:'1'});
	TweenMax.to(loadAnim, 0, {delay:'2', height:'0px', top:'100%'});

	showLoadedApp(li);
}

function showLoadedApp(li) {
	$('#appPDV').addClass('enabled');
	TweenMax.to('#appPDV', 0.5, {height:'100%', onComplete:function(){	
		toggleApp(li);
		unstackDeck(li);
	}});

	TweenMax.from('#main-title', 1.5, {opacity:'0', marginTop:'100px', onComplete:function(){
		$('#heading .scroll-container').addClass('enabled');
	}});
}


