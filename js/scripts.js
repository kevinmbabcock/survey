$(document).ready(function() {
  $("#formX").submit(function(event) {
    event.preventDefault();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var age = $("input:radio[name=age]:checked").val();
    var dob = $("#born").val();
    var food = $("#food").val();
    var color = $("#color").val();

    $(".firstName").text(firstName);
    $(".lastName").text(lastName);
    $(".age").text(age);
    $(".dob").text(dob);
    $(".food").text(food);
    $(".color").text(color);

    $(".display").show();
  })

})
