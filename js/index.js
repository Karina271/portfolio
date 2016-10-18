function formSubmit () {
var email = $('#email'),
 		name = $('#name'),
 		subject = $('#subject'),
 		text = $('#text');

if (email.val() && name.val()) {
  $.ajax({
    url: 'http://formspree.io/caramba1994net@mail.ru',
    method: 'POST',
    data: {
    	name: name.val(),
    	email:email.val(),
      subject: subject.val(),
      message: text.val()
    },
    dataType: 'json'
  })
  .done(function() {
  	$('#jsonForm').html('<div class="success">Thank you!</div>');
  })
  .fail(function(xhr, err) {
      var html = '<div class="fail">Error, enter again.  ('+xhr.statusText+')</div>';
      $('#jsonForm').html(html);
  });
} else {
 if (!name.val()) {
 	name.addClass('error');
 }
 
 if (!email.val()) {
  email.addClass('error');
 }
}
}

