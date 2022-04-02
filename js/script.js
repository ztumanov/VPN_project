function myFunction() {
    if($(window).width() < 1000)
    {   
        $('.tarif').removeClass('tarif').addClass('tarif2');
        $('.box-tarif').removeClass('box-tarif').addClass('box-tarif2');
        $('.menu').addClass('hidden');
        $('.menu_phone').removeClass('hidden');
    }
    else
    {
        $('.tarif2').removeClass('tarif2').addClass('tarif');
        $('.menu').removeClass('hidden');
       
        $('.menu_phone').addClass('hidden');
    }
}

myFunction();

$(window).resize(function() {
    myFunction();
});

$(function() {
	var $menu_popup = $('.menu-popup');
	
	$(".menu-triger, .menu-close").click(function(){
		$menu_popup.slideToggle(300, function(){
			if ($menu_popup.is(':hidden')) {
				$('body').removeClass('body_pointer');
			} else {
				$('body').addClass('body_pointer');
			}					
		});  
		return false;
	});			
	
	$(document).on('click', function(e){
		if (!$(e.target).closest('.menu').length){
			$('body').removeClass('body_pointer');
			$menu_popup.slideUp(300);
		}
	});
});


function myFunction2() {
    if($(window).width() < 1410)
    {   
        $('.munu-all').addClass('hidden');
    }
    else
    {
        $('.munu-all').removeClass('hidden');
    }
}

myFunction2();

$(window).resize(function() {
    myFunction2();
});




$(document).ready(function() {

var count; //колличество устройство
var sale; //скидка
var price; //стоимость

var $price1 = $('#price1').parent().find('input');
var $price2 = $('#price2').parent().find('input');
var $price3 = $('#price3').parent().find('input');

	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		count = parseInt($input.val()) - 1;
		var z = (50 + 100) * sale;
		var idName = $(this).attr('id');
		var id  = parseInt(idName.match(/\d+/));
		
		if(id == 1){
			var $inputP = $price1;
			sale = 1;
			
		}else if (id == 2) {
			var $inputP = $price2;
			sale = 0.8;
			
		}else if (id == 3){
			var $inputP = $price3;
			sale = 0.6;
		}
		count = count < 1 ? 1 : count;
		price = (150 * count) * sale;
		price = price < z ? z : price;
		$inputP.val(price);
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		count = parseInt($input.val()) + 1;
		var z = (150) * sale;
		var idName = $(this).attr('id');
		var id  = parseInt(idName.match(/\d+/));
		
		if(id == 1){
			var $inputP = $price1;
			sale = 1;
			
		}else if (id == 2) {
			var $inputP = $price2;
			sale = 0.8;
			
		}else if (id == 3){
			var $inputP = $price3;
			sale = 0.6;
		}
		count = count < 1 ? 1 : count;
		price = (150 * count) * sale;
		price = price < z ? z : price;
		$inputP.val(price);
		$input.val(count);
		$input.change();
		return false;
	});
});



function formatState (state) {
	if (!state.id) {
	  return state.text;
	}
	var baseUrl = "img/iconsFlag/";
	var $state = $(
	  '<span><img src="' + baseUrl + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
	);
	return $state;
  };
  
  $(".js-example-templating").select2({
	templateResult: formatState
  });