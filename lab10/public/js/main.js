(function ($) {
  var theForm = $("#email-form");
  var theEmail = $("#the-email");
  var theMessage = $("#the-message");

  theForm.submit(function (event) {
    event.preventDefault();

    var newEmail = theEmail.val();
    var newMessage = theMessage.val();
    // var newContent = $("#new-content");

    var theResult = $("#the-result");
    var t = newEmail + ": " + newMessage;
    var requestConfig = {
      method: "POST",
      url: "/",
      contentType: 'application/json',
      dataType:"json",
      data: JSON.stringify({
        message: t,
        testField: 12,
        testBool: true
      })
    };

    $.ajax(requestConfig).then(function (responseMessage) {
      console.log(responseMessage);
      theResult.html(responseMessage.message);
      //                alert("Data Saved: " + msg);
    });

  });
})(window.jQuery);