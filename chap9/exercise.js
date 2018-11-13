var currentIndex = 1

 $("#demo2").click(function(){
        $("#demo1").text('some text');
 });

 var fullname = $("#username").val();
 var password = $("#password").val();

 $("#submit").click(function() {
 	 if ($("#username").val().length < 6) {
 		$("#note").text('Username must have at least 6 chars');
 		$("#success").text("");
 	 } else if ($("#password").val().length < 6) {
 	 	$("#note").text('Password must have at least 6 chars');
 	 	$("#success").text("");
 	 } else {
 	 	$("#note").text('');
 	 	$("#success").text("Login Successful");
 	 }
 });

 $('#forward').click(function() {
 	currentIndex += 1
 	switch (currentIndex) {
 	 	
 	 	case 2:
 	 	 $('#first').addClass('hidden');
 	 	 $('#second').removeClass('hidden');
 	 	 $('#third').addClass('hidden');
 	 	 $('#second').fadeTo('normal', 1);
 	 	 $('#first').css('opacity', "0");
 	 		break;
 	 	case 3:
 	 	 $('#first').addClass('hidden');
 	 	 $('#second').addClass('hidden');
 	 	 $('#third').removeClass('hidden');
 	 	 $('#third').fadeTo('normal', 1);
 	 	 $('#second').css('opacity', "0");
 	 	 break
 	 	case 4:
 	 	$('#first').removeClass('hidden');
 	 	 $('#second').addClass('hidden');
 	 	 $('#third').addClass('hidden');
 	 	 $('#first').fadeTo('normal', 1);
 	 	 $('#third').css('opacity', "0");
 	 	currentIndex = 1
 	 	 break;
 	 } 
 });

  $('#back').click(function() {
 	currentIndex -= 1

 	switch (currentIndex) {

 	 	case 0:
 	 	 $('#first').addClass('hidden');
 	 	 $('#second').addClass('hidden');
 	 	 $('#third').removeClass('hidden');
 	 	 $('#third').fadeTo('normal', 1);
 	 	 $('#first').css('opacity', "0");
 	 	 currentIndex = 3
 	 		break;
 	 	case 1:
 	 	 $('#first').removeClass('hidden');
 	 	 $('#second').addClass('hidden');
 	 	 $('#third').addClass('hidden');
 	 	 $('#first').fadeTo('normal', 1);
 	 	 $('#second').css('opacity', "0");
 	 	 break;
 	 	
 	 	case 2:
 	 	 $('#first').addClass('hidden');
 	 	 $('#second').removeClass('hidden');
 	 	 $('#third').addClass('hidden');
 	 	 $('#second').fadeTo('normal', 1);
 	 	 $('#third').css('opacity', "0");
 	 		break;
 	 	case 3:
 	 	 $('#first').addClass('hidden');
 	 	 $('#second').addClass('hidden');
 	 	 $('#third').removeClass('hidden');
 	 	 $('#third').fadeTo('normal', 1);
 	 	 $('#first').css('opacity', "0");
 	 	 break;

 	 	
 	 } 
 });