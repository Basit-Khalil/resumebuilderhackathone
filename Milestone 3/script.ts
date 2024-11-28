
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get references to form elements using their ID
 // Get references to form elements using their ID
 const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
 const nameElement = document.getElementById('name') as HTMLInputElement;
 const emailElement = document.getElementById('email') as HTMLInputElement;
 const phoneElement = document.getElementById('phone') as HTMLInputElement;
 const addressElement = document.getElementById('address') as HTMLInputElement;
 const educationElement = document.getElementById('education') as HTMLTextAreaElement;
 const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
 const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

 // Check if all required form elements exist
 if (profilePictureInput && nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement) {
    
     // Get values from the form
     const name = nameElement.value;
     const email = emailElement.value;
     const phone = phoneElement.value;
     const address = addressElement.value;
     const education = educationElement.value;
     const experience = experienceElement.value;
     const skills = skillsElement.value;

        //profile picture
        const profilePictureFile = profilePictureInput.files?.[0]
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

       
        // Create resume output
        const resumeHTML = `
        <h2>Resume</h2>
        ${profilePictureURL ? `<img src=${profilePictureURL} alt="Profile Picture" Class="profilrPicture"> ` :"" }
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Work Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
        `;
        // Display the resume in the output container
        const resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTML;
            resumeOutputElement.classList.remove("hidden");
        }

        // Create container for buttons
        const buttonsContainer = document.createElement("div");
        buttonsContainer.id = "buttonsContainer";
        resumeOutputElement?.appendChild(buttonsContainer);

        // Create PDF download button
        const downloadButton = document.createElement("button");
        downloadButton.textContent = "Download as PDF";
        downloadButton.addEventListener("click", () => {
            window.print();  // This will trigger the print dialog, not exactly PDF but a common way to print as PDF
        });
        buttonsContainer.appendChild(downloadButton);

        // Add shareable link button
        const shareLinkButton = document.createElement("button");
        shareLinkButton.textContent = "Copy Shareable Link";
        shareLinkButton.addEventListener("click", async () => {
            try {
                // Create a unique shareable link
                const shareableLink = `https://yourdomain.com/resume/${name.replace(/\s+/g, "_")}_cv.html`;
                // Use clipboard API to copy the shareable link
                await navigator.clipboard.writeText(shareableLink);
                alert("Shareable link copied to clipboard!");
            } catch (err) {
                console.error("Failed to copy link:", err);
                alert("Failed to copy link to clipboard. Please try again.");
            }
        });
        buttonsContainer.appendChild(shareLinkButton);
    }
});



        //const resumeOutputElement = document.getElementById('resumeOutput');
        //if (resumeOutputElement) {
          //  resumeOutputElement.innerHTML = resumeOutput;
        //} else {
         //   console.error('The resume output element is missing');
        //}
    //} else {
      //  console.error('One or more form elements are missing');
    //}
//});
