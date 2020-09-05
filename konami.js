// Do something on load of the page.
$(function () {
	// Check if Konami code is already activated:
	var konamiActivated = false;
	// This is our target keyCode sequence:
	var target = "38 38 40 40 37 39 37 39 66 65";
	// Let's create an array for saving the keyCode sequence.
	var seq = [];
	// Bind keyup event on the body.
	$(document).keyup(function (e) {
		// Detect which key was pressed.
		var key = e.keyCode || e.which;
		// We also need to send the keyCode sequence to an array.
		seq.push(key);
		// Check for Konami code entered.
		var konamiEntered = seq.join(" ").substr(-29) === target;
		// Update stuff in pre tag.
		// $("pre").html(JSON.stringify({target, seq: seq.join(" ")}, null, 2));
		if (konamiActivated) {
			$("pre").html('Thanks for activating the secret! Please hire me by looking at my <a href="https://praveen.science/">Profile</a>.');
		} else {
			if (seq.length < 10) {
				// Wait for at least 10 key strokes.
				$("pre").html("Waiting for at least 10 key strokes!");
			} else {
				// Now we have 10 or more than 10.
				$("pre").html(
					"Checking...\n" +
					"Currently Entered: " + seq.join(" ").substr(-29) + "\n" +
					"Needed:            " + target + "\n" + (
					konamiEntered ?
						"Konami Code Activated! Press any key! :)" :
						"Not Konami Code!"
				));
				if (konamiEntered)
					konamiActivated = true;
			}
		}
	});
});