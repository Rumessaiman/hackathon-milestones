// get refrences to the form and display area
const form = document.getElementById("resume.form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLFormElement;
// handle form submission
form.addEventListener("submit", (event:Event) =>{
    event.preventDefault();
    //collect input values
    const Name= (document.getElementById('Name') as HTMLInputElement).value
    const Email= (document.getElementById('Email') as HTMLInputElement).value
    const Phone= (document.getElementById('Phone') as HTMLInputElement).value
    const Education= (document.getElementById('Education') as HTMLInputElement).value
    const Experience= (document.getElementById('Experience') as HTMLInputElement).value
    const Skills= (document.getElementById('Skills') as HTMLInputElement).value

    //Generate the resume content dynamically
    const resumeHTML = ` 
    <h2><b>Editable Resume</b></h2>
     <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${Name}</span><p>
    <p><b>Email:</b><span contenteditable="true">${Email}</span><p>
    <p><b>Phone:</b><span contenteditable="true">${Phone}</span><p>

    <h3>Education</h3>
    <p contenteditable="true">${Education}</p>

    <h3>Experience</h3>
    <p contenteditable="true">${Experience}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${Skills}</p>
    `;


    //display the generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }
   else{
    console.error('the resume displayelement is missing.')
   }
    
});