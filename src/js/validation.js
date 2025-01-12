function validateForm() {
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const message = document.getElementById("message").value.trim();
    if (!fname) {
        alert("Please enter your first name.");
        return false;
    }
    if (!lname) {
        alert("Please enter your last name.");
        return false;
    }
    if (!message) {
        alert("Please enter your message.");
        return false;
    }
    if (message.length < 10) {
        alert("Your message must be at least 10 characters long.");
        return false;
    }
    return true; 
}
