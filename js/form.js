// Function to limit and count the words in text area
$(document).ready(function() {
    $("#comments").on('keyup', function() {
        var words = this.value.match(/\S+/g).length;
        if (words > 200) {
            var trimmed = $(this).val().split(/\s+/, 200).join(" ");
            $(this).val(trimmed + " ");
            $('#word_left').text("No words left!")
        }
        else {
            $('#word_left').text(200-words);
        }
    });
 });

// Function to add dinamically an input text in the select
$('#find-me').change(function() {
      if ($('#find-me').val()==='other'){
        $("#reason-main").append('<input style="margin-left:20px" class="reason" id="reason" placeholder="Other reason"/>');
      }
      else{
        $("#reason").remove();
      }
  });

// Function for validate the form with jvalidate plugin and submit it using ajax post request
$(document).ready(function () {
    $('#contact-form').validate({ 
        rules: {
            name: {
                required: true,
            },
            surname: {
                required: true,
            },
            email: {
              required: true,
              email:true
            },
            phone: {
              required: true,
              number: true,
              minlength: 8,
              maxlength: 14,

            },
            comments: {
              required: true,
            }
        },
        messages: {
          name:  "Please enter your name",
          surname: "Please enter your surname",
          email: {
            required: "Please enter your email",
            email: "Please enter a valid email",
          },
          phone: {
            required: "Please enter your phone",
            number: "Please enter a number format",
            minlength:"Minimum length phone is 8 numbers",
            maxlength:"Maximum length phone is 14 numbers",

            
          },
          comments: "Please enter any comments",
        },

        submitHandler: function (form) {
                if ($('#find-me').val()=='other'){
                  findme = $('#reason').val()
                }
                else{
                  findme = $('#find-me').val()
                }
                var data ={
                  name: $('#name').val(),
                  surname: $('#surname').val(),
                  email: $('#email').val(),
                  phone: $('#phone').val(),
                  findMe: findme,
                  comments: $('#comments').val()
                } 
                console.log(data);
                $.ajax({
                  url: "http://localhost:8000/api/form",
                  type: "POST",
                  data: JSON.stringify(data),
                  contentType: "application/json ; charset=utf-8",
                  success : function(result) {
                      alert(result.name+" your contact form was succesfully sent!"); 
                      window.location.href = "index.html";
                   },
                  failure: function(errMsg) {
                      alert(errMsg);
                  }
            });

          }
    });

});




