//                                   FOCUSE TEXT FIRST INBOX BY DEFLAULT

// focus on the name input element
jQuery('#name').focus();

//                                            JOB ROLE SELECTION
//hide job role selection
 $('#other-title').hide();
// using if else statement to show text box if other is click, if not hides the text box
$('#title').on('click', function(){
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
$designShirt.on('click', function(){
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

  $designShirt.on('click', function(){
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
