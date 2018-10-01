//                                   FOCUSE TEXT FIRST INBOX BY DEFLAULT

// focus on the name input element
jQuery('#name').focus();

//                                            JOB ROLE SELECTION
//hide job role selection
 $('#other-title').hide();
// using if else statement to show text box if other is click, if not hides the text box
$('#title').change(function(){
  if($(this).val() == "other"){
    $('#other-title').show();
  } else {
    $('#other-title').hide();
  }
});

//                                            T-SHIRT SELECTION
//select the shirt color element
const $colorShirt = $('#colors-js-puns');
const $designShirt = $('#design');
//using if else statement when the correct shirt design is click then the correct design color will show
$colorShirt.hide();
$designShirt.change(function(){
  if ($('#design option:selected').text() === 'Theme - JS Puns') {
    $colorShirt.show();
    $('#color').val('cornflowerblue');
    $('#color option[value = cornflowerblue]').show();
    $('#color option[value =  darkslategrey]').show();
    $('#color option[value =  gold]').show();
    $('#color option[value = tomato]').hide();
    $('#color option[value = steelblue]').hide();
    $('#color option[value = dimgrey]').hide();
    //if SELECT THEME is selected, this function hides all of the shirt colors
    } else if ($('#design option:selected').text() === 'Select Theme') {
      $colorShirt.hide();
    }
  });

  $designShirt.change(function(){
    if ($('#design option:selected').val() === 'heart js') {
      $colorShirt.show();
      $('#color').val('tomato');
      $('#color option[value = cornflowerblue]').hide();
      $('#color option[value =  darkslategrey]').hide();
      $('#color option[value =  gold]').hide();
      $('#color option[value = tomato]').show();
      $('#color option[value = steelblue]').show();
      $('#color option[value = dimgrey]').show();

    }
  });

  //                             RESGISTER FOR ACTIVITIES SECTION
// set the current value to 0 and append it to the paragraph to add total cost
    let currentValue= 0;
    $('.activities').append('<p></p>');

//When JS Framworks is click
$('input[name="js-frameworks"]').click(function(){
//if js frameworks is click add 100 to the current value and cancel out express ws
  if($(this).is(':checked')){
  currentValue = currentValue + 100;
  $(".activities p").text("Total: $ " + currentValue);
  $('[name="express"]').prop('disabled', true).parent().css({"color":"gray"});
} else {
  //if js is unclick subtract 100 to the current value and make express ws available
  currentValue = currentValue - 100;
  $(".activities p").text("Total: $ " + currentValue);
  $('[name="express"]').removeAttr('disabled').parent().css({"color":"black"});
 }
})

//When express is click
$('input[name="express"]').click(function(){
//if js express is click add 100 to the current value and cancel out js frameworks ws
  if($(this).is(':checked')){
  currentValue = currentValue + 100;
  $(".activities p").text("Total: $ " + currentValue);
  $('[name="js-frameworks"]').prop('disabled', true).parent().css({"color":"gray"});
} else {
  //if express is unclick subtract 100 to the current value and make js frameworks ws available
  currentValue = currentValue - 100;
  $(".activities p").text("Total: $ " + currentValue);
  $('[name="js-frameworks"]').removeAttr('disabled').parent().css({"color":"black"});
 }
});

$('input[name="js-libs"]').click(function(){
//if js Libraries is click add 100 to the current value and cancel out nodes ws
  if($(this).is(':checked')){
  currentValue = currentValue + 100;
  $(".activities p").text("Total: $ " + currentValue);
  $('[name="node"]').prop('disabled', true).parent().css({"color":"gray"});
} else {
  //if js Libraries is unclick subtract 100 to the current value and make nodes ws available
  currentValue = currentValue - 100;
  $(".activities p").text("Total: $ " + currentValue);
  $('[name="node"]').removeAttr('disabled').parent().css({"color":"black"});
 }
});

$('input[name="node"]').click(function(){
//if nodes is click add 100 to the current value and cancel out js Libraries ws
  if($(this).is(':checked')){
  currentValue = currentValue + 100;
  $(".activities p").text("Total: $ " + currentValue);
  $('[name="js-libs"]').prop('disabled', true).parent().css({"color":"gray"});
} else {
  //if nodes is unclick subtract 100 to the current value and make js Libraries ws available
  currentValue = currentValue - 100;
  $(".activities p").text("Total: $ " + currentValue);
  $('[name="js-libs"]').removeAttr('disabled').parent().css({"color":"black"});
 }
});

$('input[name="build-tools"]').click(function(){
//if buld tools Workshop is click add 100 to the current value
  if($(this).is(':checked')){
  currentValue = currentValue + 100;
  $(".activities p").text("Total: $ " + currentValue);
} else {
  //if buld tools Workshop is unclick subtract 100 to the current value
  currentValue = currentValue - 100;
  $(".activities p").text("Total: $ " + currentValue);
 }
});

$('input[name="npm"]').click(function(){
//if npm Workshop is click add 100 to the current value
  if($(this).is(':checked')){
  currentValue = currentValue + 100;
  $(".activities p").text("Total: $ " + currentValue);
} else {
  //if npm Workshop is unclick subtract 100 to the current value
  currentValue = currentValue - 100;
  $(".activities p").text("Total: $ " + currentValue);
 }
});

$('input[name="all"]').click(function(){
//if Main Conference is click add 200 to the current value
  if($(this).is(':checked')){
  currentValue = currentValue + 200;
  $(".activities p").text("Total: $ " + currentValue);
} else {
  //if Main Conference is unclick subtract 200 to the current value
  currentValue = currentValue - 200;
  $(".activities p").text("Total: $ " + currentValue);
 }
});

//                                              PAYMENT SELECTION
// credit card should be set as a deflault
$('#payment').val('credit card');
$('p').eq(1).hide();
$('p').eq(2).hide();

//when credit card is selected the credit card informatin should be shown
$('#payment').change(function(){
  if($('#payment option:selected').val() === 'credit card'){
$(".credit-card").show();
$(".col-6 col").show();
$(".col-3 col").show();
$("#exp-month").show();
$("#exp-year").show();
$("p").eq(1).hide();
$("p").eq(2).hide();
  }
});
//when paypal is selected the paypal informatin should be shown
$('#payment').change(function(){
  if($('#payment option:selected').val() === 'paypal'){
$(".credit-card").hide();
$(".col-6 col").hide();
$(".col-3 col").hide();
$("#exp-month").hide();
$("#exp-year").hide();
$("p").eq(1).show();
$("p").eq(2).hide();
  }
});
//when bitcion is selected the bitcion informatin should be shown
$('#payment').change(function(){
  if($('#payment option:selected').val() === 'bitcoin'){
$(".credit-card").hide();
$(".col-6 col").hide();
$(".col-3 col").hide();
$("#exp-month").hide();
$("#exp-year").hide();
$("p").eq(1).hide();
$("p").eq(2).show();
  }
});

//                                  FORM VALIDATION AND MESSAGES

//Append spans to alert the user the reason why the form is not submitting
$("form").append("<span></span>");
$("form").append("<span></span>");
$("form").append("<span></span>");
$("form").append("<span></span>");
$("form").append("<span></span>");
$("form").append("<span></span>");
$("form").append("<span></span>");
$("#mail").prev().append("<div></div>");

//For the NAME input
$(".container").submit(function(){
  //variable to help check if the form can be submitted
  let isFormValid = true;
  $("#name:input").each(function(){
    if ($.trim($(this).val()).length == 0){
      //if this section is not filled out, the input field is highlighted
      $(this).addClass("highlight").css("border", "1px solid red");
      //the form is not submitted
      isFormValid = false;
      //enters a span at the bottom of the button stating why the form will not submit
      $("form span:nth-of-type(1n)").text("Please enter your name.").css("display", "block").css("color", "red");
  }
    else{
     //if fixed, the box is unhighlighted and error message is removed
     $(this).removeClass("highlight").css("border", "none");
     //("<span></span>").remove();
     $("form span:nth-of-type(1n)").text("Please enter your name.").css("display", "none").css("color", "red");

        }
    });
    return isFormValid;
});
//For the EMAIL input
  $(".container").submit(function(){
    //variable to help check if the form can be submitted
    let isFormValid = true;
    $("#mail:input").each(function(){
        if ($.trim($(this).val()).length == 0){
            //if this section is not filled out, the input field is highlighted
            $(this).addClass("highlight").css("border", "1px solid red");
            isFormValid = false;
            //enters a span at the bottom of the button stating why the form will not submit
            $("form span:nth-of-type(2n)").text("Please enter a valid email.").css("display", "block").css("color", "red");
        } else{
            //if fixed, the box is unhighlighted and error message is removed
            $(this).removeClass("highlight").css("border", "none");
            //$("<span></span>").remove();
            $("form span:nth-of-type(2n)").text("Please enter a valid email.").css("display", "none").css("color", "red");

        }
    });
    return isFormValid;
});

//Only allows a valid EMAIL address to be entered
  $('#mail').keyup(function(){
    $('#mail').filter(function(){
    var email=$('#mail').val();
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
     if( !emailReg.test( email ) ) {
      $("label div").text('Please enter a valid email.').css("display", "block").css("color", "red");
     } else {
      $("label div").text('Please enter a valid email.').css("display", "none");
     }
    });
  });

  //For the ACTIVITIES input
  $(".container").submit(function(){
    //variable to help check if the form can be submitted
    let isFormValid = true;
    $(".activities").each(function(){
        if ($(".activities input:checked").length < 1){
           //if this section is not checked, the name is highlighted
            $(this).addClass("highlight").css("display", "block").css('color', 'red');
            isFormValid = false;
            //enters a span at the bottom of the button stating why the form will not submit
            $("form span:nth-of-type(3n)").text("Please choose at least one activity.").css("display", "block").css("color", "red");
        }
        else {
            //if fixed, the box is unhighlighted and error message is removed
            $(this).removeClass("highlight").css("display", "block").css('color', 'black');
            //$("<span></span>").remove();
            $("form span:nth-of-type(3n)").text("Please choose at least one activity.").css("display", "none").css("color", "red");

        }
    });
    return isFormValid;
});
//For the CREDIT CARD NUMBER input
$(".container").submit(function(){
  //variable to help check if the form can be submitted
  let isFormValid = true;
  if ($('#payment option:eq(1)').is(':selected')){
  $("#cc-num:input").each(function(){
    if ($.trim($(this).val()).length < 13 || !$.isNumeric($(this).val())) {
        //if this section is not filled out with only 13-16 characters and is not a number, the input field is highlighted
        $(this).addClass("highlight").css("border", "1px solid red");
        isFormValid = false;
        //enters a span at the bottom of the button stating why the form will not submit
        $("form span:nth-of-type(4n)").text("Please make sure your credit card number is at least 13 digits long.").css("display", "block").css("color", "red");
    } else if (($(this).val()).length > 16 || !$.isNumeric($(this).val())) {
      //if this section is not filled out with only 13-16 characters and is not a number, the input field is highlighted
      $(this).addClass("highlight").css("border", "1px solid red");
      isFormValid = false;
      //enters a span at the bottom of the button stating why the form will not submit
      $("form span:nth-of-type(4n)").text("Please make sure your credit card number is 16 or fewer digits long.").css("display", "block").css("color", "red");
  }
    else{
        //if fixed, the box is unhighlighted and error message is removed
        $(this).removeClass("highlight").css("border", "none");
        //$("<span></span>").remove();
        $("form span:nth-of-type(4n)").text("Please enter a valid credit card number. Make sure it is 13-16 digits long.").css("display", "none").css("color", "red");
    }
  });
  } else {
    isFormValid = true;
  }
return isFormValid;
});
    //For the CREDIT CARD ZIP CODE input
    $(".container").submit(function(){
      //variable to help check if the form can be submitted
      let isFormValid = true;
      if ($('#payment option:eq(1)').is(':selected')){
    $("#zip:input").each(function(){
      if ($.trim($(this).val()).length < 5 || ($(this).val()).length > 5 || !$.isNumeric($(this).val())){
        //if this section is not filled out and is not 5 digits long, the input field is highlighted
        $(this).addClass("highlight").css("border", "1px solid red");
        //enters a span at the bottom of the button stating why the form will not submit
        $("form span:nth-of-type(5n)").text("Please enter a valid zip code.").css("display", "block").css("color", "red");
        isFormValid = false;
    } else{
        //if fixed, the box is unhighlighted and error message is removed
        $(this).removeClass("highlight").css("border", "none");
        //$("<span></span>").remove();
        $("form span:nth-of-type(5n)").text("Please enter a valid zip code.").css("display", "none").css("color", "red");
      }
    });
  } else {
    isFormValid = true;
  }
return isFormValid;
});
    //For the CREDIT CARD CVV input
    $(".container").submit(function(){
      //variable to help check if the form can be submitted
      let isFormValid = true;
      if ($('#payment option:eq(1)').is(':selected')){
        $("#cvv:input").each(function(){
          if ($.trim($(this).val()).length < 3 || ($(this).val()).length > 3 || !$.isNumeric($(this).val())){
            //if this section is not filled out and 3 digits long, the input field is highlighted
            $(this).addClass("highlight").css("border", "1px solid red");
            isFormValid = false;
            //enters a span at the bottom of the button stating why the form will not submit
            $("form span:nth-of-type(6n)").text("Please enter a valid cvv.").css("display", "block").css("color", "red");
          } else {
            //if fixed, the box is unhighlighted and error message is removed
            $(this).removeClass("highlight").css("border", "none");
            //$("<span></span>").remove();
            $("form span:nth-of-type(6n)").text("Please enter a valid cvv.").css("display", "none").css("color", "red");
          }
        });
      } else {
        isFormValid = true;
      }
return isFormValid;
    });
//For the SELECT PAYMENT input(to not allow the page to submit if this is selected)
$(".container").submit(function(){
  //variable to help check if the form can be submitted
  let isFormValid = true;
  if ($('#payment option:eq(0)').is(':selected')){
    $('#payment').addClass("highlight").css("border", "1px solid red");
    isFormValid = false;
    //enters a span at the bottom of the button stating why the form will not submit
    $("form span:nth-of-type(7n)").text("Please enter a source of payment.").css("display", "block").css("color", "red");
  } else {
     //if fixed, the box is unhighlighted and error message is removed
     $("form span:nth-of-type(7n)").text("Please enter a source of payment.").css("display", "none").css("color", "red");
     isFormValid = true;
  }
  return isFormValid;
});

//If the page is submitted and there is an error, and then the user changes his or her payment option, it deletes the previous information submitted
$(".container").submit(function(){
  //variable to help check if the form can be submitted
  let isFormValid = true;
    $('#payment').change(function(){
     $('#cvv:input').removeClass("highlight").css("border", "none");
     $('#zip:input').removeClass("highlight").css("border", "none");
     $('#cc-num:input').removeClass("highlight").css("border", "none");
     $('#payment').removeClass("highlight").css("border", "none");
     isFormValid = true;
  })
  return isFormValid;
});
