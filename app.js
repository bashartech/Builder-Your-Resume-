"use strict";
let education = document.querySelector(".education");
let formCheck = document.getElementById("resumeForm");
let icon = document.querySelector(".education span img");
let sec1 = document.querySelector(".sec1");
let resume = document.querySelector(".resume");
let form = document.querySelector(".form");
let skills = document.querySelector(".skills");
let icon2 = document.querySelector(".skills span img");
let sec2 = document.querySelector(".sec2");
let contact = document.querySelector(".contact");
let icon4 = document.querySelector(".contact span img");
let sec4 = document.querySelector(".sec4");
let workExperience = document.querySelector(".workExperience");
let sec3 = document.querySelector(".sec3");
let icon3 = document.querySelector(".workExperience span img");
let button = document.querySelector(".btn");
let conName = document.getElementById("ConName");
let resName = document.getElementById("resName");
let conEdu = document.getElementById("ConEdu");
let resEdu = document.getElementById("resEdu");
let conSkills = document.getElementById("ConSkills");
let resSkills = document.getElementById("resSkills");
let conExp = document.getElementById("ConExp");
let resExp = document.getElementById("resExp");
let conGmail = document.getElementById("ConGmail");
let resGmail = document.getElementById("resGmail");
let downloadBtn = document.getElementById("downloadBtn");
let resumeLink = document.querySelector(".uniqueUrl");
let buildForm = document.querySelector("#buildForm");
// button.addEventListener("click", (event)=>{
//     event.preventDefault(); // Prevents the form from submitting and reloading the page
//     // Scroll smoothly to the resume section
//   resume.scrollIntoView({ behavior: "smooth" });
//   const username = (document.getElementById('ConName') as HTMLInputElement).value;
//   const uniqueUrl = `https://${username}.vercel.app/resume`;
//   resumeLink.innerHTML = `Share your resume: <a href="${uniqueUrl}" target="_blank">${uniqueUrl}</a>`;
// })
// form.addEventListener('submit', (event: Event) => {
//     event.preventDefault();
//   // Scroll smoothly to the resume section
//   resume.scrollIntoView({ behavior: "smooth" });
//   const username = (document.getElementById('ConName') as HTMLInputElement).value;
//   const uniqueUrl = `https://${username}.vercel.app/resume`;
//   resumeLink.innerHTML = `Share your resume: <a href="${uniqueUrl}" target="_blank">${uniqueUrl}</a>`;
//     if (!conName || !conEdu || !conExp || !conGmail || !conSkills || !skills) {
//         alert("Please fill out all fields.");
//         return;
//     }
// });
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Scroll smoothly to the resume section
    resume.scrollIntoView({ behavior: "smooth" });
    // Get form values
    const name = conName.value;
    const education = conEdu.value;
    const skills = conSkills.value;
    const experience = conExp.value;
    const email = conGmail.value;
    // Update resume preview
    resName.textContent = name;
    resEdu.textContent = education;
    resSkills.textContent = skills;
    resExp.textContent = experience;
    resGmail.textContent = email;
    // Create sharable URL with query parameters
    const urlParams = new URLSearchParams({
        name,
        education,
        skills,
        experience,
        email,
    });
    const sharableUrl = `${window.location.origin}${window.location.pathname}?${urlParams.toString()}`;
    resumeLink.innerHTML = `Share your resume: <a href="${sharableUrl}" target="_blank">${sharableUrl}</a>`;
    if (!conName || !conEdu || !conExp || !conGmail || !conSkills || !skills) {
        alert("Please fill out all fields.");
        return;
    }
});
// On page load, populate form with query parameters if available
window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name') || '';
    const education = urlParams.get('education') || '';
    const skills = urlParams.get('skills') || '';
    const experience = urlParams.get('experience') || '';
    const email = urlParams.get('email') || '';
    // Populate form
    conName.value = name;
    conEdu.value = education;
    conSkills.value = skills;
    conExp.value = experience;
    conGmail.value = email;
    // Populate resume preview
    resName.textContent = name;
    resEdu.textContent = education;
    resSkills.textContent = skills;
    resExp.textContent = experience;
    resGmail.textContent = email;
});
conName.addEventListener("keyup", () => {
    let formName = conName.value;
    resName.textContent = formName;
});
conEdu.addEventListener("keyup", () => {
    let formEdu = conEdu.value;
    resEdu.textContent = formEdu;
});
conSkills.addEventListener("keyup", () => {
    let formSkills = conSkills.value;
    resSkills.textContent = formSkills;
});
conGmail.addEventListener("keyup", () => {
    let formGmail = conGmail.value;
    resGmail.textContent = formGmail;
});
conExp.addEventListener("keyup", () => {
    let formExp = conExp.value;
    resExp.textContent = formExp;
});
icon.addEventListener("click", () => {
    if (sec1.style.display === "none") {
        sec1.style.display = "block";
        icon.textContent = "Hide";
    }
    else {
        sec1.style.display = "none";
        icon.textContent = "Show"; // Change button text to 'Show'
    }
});
icon2.addEventListener("click", () => {
    if (sec2.style.display === "none") {
        sec2.style.display = "block";
        icon2.textContent = "Hide";
    }
    else {
        sec2.style.display = "none";
        icon2.textContent = "Show"; // Change button text to 'Show'
    }
});
icon3.addEventListener("click", () => {
    if (sec3.style.display === "none") {
        sec3.style.display = "block";
        icon3.textContent = "Hide";
    }
    else {
        sec3.style.display = "none";
        icon3.textContent = "Show"; // Change button text to 'Show'
    }
});
icon4.addEventListener("click", () => {
    if (sec4.style.display === "none") {
        sec4.style.display = "block";
        icon4.textContent = "Hide";
    }
    else {
        sec4.style.display = "none";
        icon4.textContent = "Show"; // Change button text to 'Show'
    }
});
downloadBtn.addEventListener('click', () => {
    if (typeof html2pdf === 'undefined') {
        alert('Error: html2pdf library is not loaded.');
        return;
    }
    const resumeOptions = {
        margin: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(resume).set(resumeOptions).save();
});

