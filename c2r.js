// Start the script when the document loads completely.
$(function () {
  // The above function is a shorthand for the document's
  // onReady event. This will execute once the doc is ready.
  // Select the c2r element and add an event listener.
  $("code.c2r").click(function (e) {
    // Cache the element.
    $this = $(this);
    // Once clicked on the code on the page, this should happen.
    // Prevent the default action.
    e.preventDefault();
    // Fire an AJAX Call.
    $.getJSON("/c2r.php", function (res) {
      $this
        .html(res)
        .removeAttr("class")
        .off("click");
    });
  });
});
