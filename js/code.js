$('document').ready(function(){


	$('#correo').blur(function(){
		var contenido = $(this).val();

		if(contenido.length > 5){

			$('#helpBlock2').css('display', 'none');			
			$('.correo').removeClass('has-error');
			$('.correo').addClass('has-success');
		}
		else{
			$('.correo').removeClass('has-success');			
			$('.correo').addClass('has-error');
			$('#helpBlock2').css('display', 'inline');
		}
	});

	$('#asunto').blur(function(){
		var contenido = $(this).val();

		if(contenido.length > 5){

			$('#helpBlock3').css('display', 'none');			
			$('.asunto').removeClass('has-error');
			$('.asunto').addClass('has-success');
		}
		else{
			$('.asunto').removeClass('has-success');			
			$('.asunto').addClass('has-error');
			$('#helpBlock3').css('display', 'inline');
		}
	});

	$('#mensaje').blur(function(){
		var contenido = $(this).val();

		if(contenido.length > 5){

			$('#helpBlock4').css('display', 'none');			
			$('.mensaje').removeClass('has-error');
			$('.mensaje').addClass('has-success');
		}
		else{
			$('.mensaje').removeClass('has-success');			
			$('.mensaje').addClass('has-error');
			$('#helpBlock4').css('display', 'inline');
		}
	});

	$('a.servicio').click(function(e){
		e.preventDefault();
		var enlace = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(enlace).offset().top
		}, 1000);
	});

});