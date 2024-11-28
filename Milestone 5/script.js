var _a;
//listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get references to form elements using their ID
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var usernameElement = document.getElementById("username");
    if (nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement && usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        var uniquepath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        // Create resume output
        var resumeOutput = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\">  ".concat(name_1, " </span> </p>\n        <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span> </p>\n        <p><strong>Phone Number:</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span> </p>\n        <p><strong>Address:</strong> <span id=\"edit-address\" class=\"editable\"> ").concat(address, " </span> </p>\n\n        <h3>Education</h3>\n        <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n        <h3>Work Experience</h3>\n        <p id=\"exprience\" class=\"editable\">").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p id=\"skills\" class=\"editable\">").concat(skills, "</p>\n        ");
        var downlaodLink = document.createElement('a');
        downlaodLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downlaodLink.download = uniquepath;
        downlaodLink.textContent = 'Download Your 2024 Resume';
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downlaodLink);
            makeeditable();
        }
    }
    else {
        console.error('One or more form elements are missing');
    }
});
function makeeditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentvalue = currentElement.textContent || "";
            //replace content
            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentvalue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
