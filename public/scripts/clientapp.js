var answer = [];

$(document).ready(function() {

$('button').on('click', function(event){//event listener for x, y and type input
  event.preventDefault();
  var x = $('#x').val();
  var y = $('#y').val();
  var data = {
    x: x,
    y: y,
    type: $(this).attr("class")
  };

  console.log(data);//this is giving me browser console.log of Object {x: "3", y: "6", type: "subtract"}
  calculate(data);//calling the function

});
//calling the ajax function takes parameter data
function calculate(data){
  $.ajax({
    type: 'POST',
    url: '/calculator',
    data: data,
    success: function(response) {
    answer = response
      showAnswer();//calling function
        console.log(response);//his is giving me browser console.log of Object {answer: 12}
      console.log(answer.answer);//this is giving me browser console.log of the ANSWER! yea!
    //comment
  }

});

}

// Updates the DOM
function showAnswer() {
  $('.result').empty();//not sure if I need this
  $('.result').append('<p>' + 'The answer = ' + answer.answer + '</p>');
}

$('.clear').on('click', function() {
  $('input').val('');
  $('p').val('');
});

});
