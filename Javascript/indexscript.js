function toggleMenu(div) {
		div.classList.toggle("change");
		document.getElementById("myNav").classList.toggle("open"); /* class within CSS to toggle menu open and close */
	}
	
/*
function submitForm() {
		
	document.getElementById("feedback").classList.toggle("showfeedback");
		return true;
	}
	
	*/


function submitForm() {
  alert("Your application has been submitted. Please sit back and the Hot Beans team will be in touch.");
  return true;
}