<?php
  // Before that, set the content type to JSON.
  header("Content-type: application/json");
  // Get the previous contents of C2R text file.
  $c2rText = file_get_contents("c2r.txt");
  // Make note of Date & Time, when the user has accessed the phone number.
  file_put_contents("c2r.txt", $c2rText . PHP_EOL . "Phone number accessed at " . @date("l, jS M, Y g:i a", @strtotime("now + 1 hour")) . ".");
  // Dump all the HTTP Variables.
  echo json_encode("+44 740 570 8485");
?>