// Get references to the form and display area
var form = document.getElementById('resume.form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var Username = document.getElementById('Username').value;
    var Name = document.getElementById('Name').value;
    var Email = document.getElementById('Email').value;
    var Phone = document.getElementById('Phone').value;
    var Education = document.getElementById('Education').value;
    var Experience = document.getElementById('Experience').value;
    var Skills = document.getElementById('Skills').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        Name: Name,
        Email: Email,
        Phone: Phone,
        Education: Education,
        Experience: Experience,
        Skills: Skills
    };
    localStorage.setItem(Username, JSON.stringify(resumeData)); // Saving the data locally
    // Generate the resume content dynamically
    var resumeHTML = "\n<h2>Editable Resume</h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b> <span contenteditable=\"true\">".concat(Name, "</span></p>\n<p><b>Email:</b> <span contenteditable=\"true\">").concat(Email, "</span></p>\n<p><b>Phone:</b> <span contenteditable=\"true\">").concat(Phone, "</span></p>\n<h3>Education</h3>\n<p contenteditable=\"true\">").concat(Education, "</p>\n<h3>Experience</h3>\n<p contenteditable=\"true\">").concat(Experience, "</p>\n<h3>Skills</h3>\n<p contenteditable=\"true\">").concat(Skills, "</p>\n");
    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?Username=").concat(encodeURIComponent(Username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var Username = urlParams.get('Username');
    if (Username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(Username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('Username').value =
                Username;
            document.getElementById('Name').value =
                resumeData.name;
            document.getElementById('Email').value =
                resumeData.email;
            document.getElementById('Phone').value =
                resumeData.phone;
            document.getElementById('Education').value =
                resumeData.education;
            document.getElementById('Experience').value
                = resumeData.experience;
            document.getElementById('Skills').value =
                resumeData.skills;
        }
    }
});
