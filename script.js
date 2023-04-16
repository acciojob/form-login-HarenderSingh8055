function getFormvalue() {
    //Write your code here
    // e.preventDefault();
	let firstName = document.querySelector("[name=fname]").value;
	let lastName = document.querySelector("[name=lname]").value;
    alert(`${firstName} ${lastName}`)
}