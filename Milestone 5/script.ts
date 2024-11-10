// Get references to the form and display area
const form = document.getElementById('resume.form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;

const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;
// Handle form submission
form.addEventListener('submit', (event: Event) => {
event.preventDefault(); // prevent page reload
// Collect input values
const Username = (document.getElementById('Username') as HTMLInputElement).value;
const Name = (document.getElementById('Name') as HTMLInputElement).value;
const Email = (document.getElementById('Email') as HTMLInputElement).value;
const Phone = (document.getElementById('Phone') as HTMLInputElement).value;
const Education = (document.getElementById('Education') as HTMLTextAreaElement).value;
const Experience = (document.getElementById('Experience') as HTMLTextAreaElement).value;
const Skills = (document.getElementById('Skills') as HTMLTextAreaElement).value;
// Save form data in localStorage with the username as the key
const resumeData = {
Name,
Email,
Phone,
Education,
Experience,
Skills
};
localStorage.setItem(Username, JSON.stringify(resumeData)); // Saving the data locally
// Generate the resume content dynamically

const resumeHTML = `
<h2>Editable Resume</h2>
<h3>Personal Information</h3>
<p><b>Name:</b> <span contenteditable="true">${Name}</span></p>
<p><b>Email:</b> <span contenteditable="true">${Email}</span></p>
<p><b>Phone:</b> <span contenteditable="true">${Phone}</span></p>
<h3>Education</h3>
<p contenteditable="true">${Education}</p>
<h3>Experience</h3>
<p contenteditable="true">${Experience}</p>
<h3>Skills</h3>
<p contenteditable="true">${Skills}</p>
`;
// Display the generated resume
resumeDisplayElement.innerHTML = resumeHTML;
// Generate a shareable URL with the username only
const shareableURL =
`${window.location.origin}?Username=${encodeURIComponent(Username)}`;
// Display the shareable link
shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const Username = urlParams.get('Username');
if (Username) {

// Autofill form if data is found in localStorage
const savedResumeData = localStorage.getItem(Username);
if (savedResumeData) {
const resumeData = JSON.parse(savedResumeData);
(document.getElementById('Username') as HTMLInputElement).value =
Username;
(document.getElementById('Name') as HTMLInputElement).value =
resumeData.name;
(document.getElementById('Email') as HTMLInputElement).value =
resumeData.email;
(document.getElementById('Phone') as HTMLInputElement).value =
resumeData.phone;
(document.getElementById('Education') as HTMLTextAreaElement).value =
resumeData.education;
(document.getElementById('Experience') as HTMLTextAreaElement).value
= resumeData.experience;
(document.getElementById('Skills') as HTMLTextAreaElement).value =
resumeData.skills;
}
}
});