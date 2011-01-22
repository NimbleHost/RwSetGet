jQuery(document).ready(function($) {
	$('#contentContainer .content').prepend('<div class="specialMessage">');
	$('.specialMessage').load(RwGet.pathto("rwget/","sampletarget.html"));
});
