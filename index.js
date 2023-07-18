$(document).ready(function () {
  $("#dismiss").click(function () {
    $("input[name='useremail']").val("");
    $(".successpage").show();
    $("#thankpage").hide();
    $(".error").text("");
  });
  $("#myForm").submit(function (event) {
    event.preventDefault(); // Prevent form submission
    var email = $("input[name='useremail']").val().trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      $(".error").text("valid email required.");
    } else if (!emailPattern.test(email)) {
      $(".error").text("valid email required.");
    }else{
        $("#emailval").text(email);
        $(".successpage").hide();
        $("#thankpage").show();
    }
    return false;
  });
});
