function validateForm() {
    let isValid = true;

    let fname = document.forms["myForm"]["fname"].value;
    if (fname.trim() == "") {
        alert("Full name must be filled out.");
        isValid = false;
}

    let email = document.forms["myForm"]["email"].value;
    if (email.trim() == "") {
        alert("Email address must be filled out.");
        isValid = false;
    } else if (!isValidEmail(email)) {
        alert("please enter a valid email address.");
        isValid = false;
    }

    let phone = document.forms["myForm"]["phone"].value;
    if (phone.trim() !== "" && !/^\d+$/.test(phone)) {
        alert("Phone number should only contail digits.");
        isValid = false;
    }

    let position = document.forms["myForm"]["position"].value;
    if (position == "") {
        alert("Please select a psoition.");
        isValid = false;
    }

    let cvInput = document.forms["myForm"]["cv"];
    if (cvInput.files.length === 0){
        alert("Please upload your cv.");
        isValid = fasle;
    } else {
        let cvFile = cvInput.files[0];
        let allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (!allowedTypes.include(cvFile.type)) {
            alert("Only PDF, DOC, or DOCX files are allowed for CV.");
            isValid = false;
        }
    }

    if (!isValid) {
        return false;
    }

    return true;

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}