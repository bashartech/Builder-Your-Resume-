declare const html2pdf: any;


let education = document.querySelector(".education")
let formCheck = document.getElementById("resumeForm") as HTMLFormElement;

let icon = document.querySelector(".education span img") as HTMLElement
let sec1 = document.querySelector(".sec1") as HTMLElement
let resume = document.querySelector(".resume") as HTMLElement
let form = document.querySelector(".form") as HTMLElement

let skills = document.querySelector(".skills")
let icon2 = document.querySelector(".skills span img") as HTMLElement
let sec2 = document.querySelector(".sec2") as HTMLElement

let contact = document.querySelector(".contact")
let icon4 = document.querySelector(".contact span img") as HTMLElement
let sec4 = document.querySelector(".sec4") as HTMLElement

let workExperience = document.querySelector(".workExperience")
let sec3 = document.querySelector(".sec3") as HTMLElement
let icon3 = document.querySelector(".workExperience span img") as HTMLElement

let button = document.querySelector(".btn")as HTMLButtonElement

let conName = document.getElementById("ConName") as HTMLInputElement
let resName = document.getElementById("resName") as HTMLElement

let conEdu = document.getElementById("ConEdu") as HTMLInputElement
let resEdu = document.getElementById("resEdu") as HTMLElement

let conSkills = document.getElementById("ConSkills") as HTMLInputElement
let resSkills = document.getElementById("resSkills") as HTMLElement

let conExp = document.getElementById("ConExp") as HTMLInputElement
let resExp = document.getElementById("resExp") as HTMLElement

let conGmail = document.getElementById("ConGmail") as HTMLInputElement
let resGmail = document.getElementById("resGmail") as HTMLElement

let downloadBtn = document.getElementById("downloadBtn") as HTMLButtonElement
let resumeLink = document.querySelector(".uniqueUrl") as HTMLParagraphElement;
let buildForm = document.querySelector("#buildForm") as HTMLElement


form.addEventListener('submit', (event: Event) => {
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

conName.addEventListener("keyup",()=>{
    let formName = conName.value
    resName.textContent = formName  
})

conEdu.addEventListener("keyup",()=>{
    let formEdu = conEdu.value
    resEdu.textContent = formEdu  
})

conSkills.addEventListener("keyup",()=>{
    let formSkills = conSkills.value
    resSkills.textContent = formSkills  
})

conGmail.addEventListener("keyup",()=>{
    let formGmail = conGmail.value
    resGmail.textContent = formGmail  
})

conExp.addEventListener("keyup",()=>{
    let formExp = conExp.value
    resExp.textContent = formExp  
})



icon.addEventListener("click",()=>{
    if(sec1.style.display === "none"){
        sec1.style.display = "block"
        icon.textContent = "Hide"
    }else {
        sec1.style.display = "none";
        icon.textContent = "Show"; // Change button text to 'Show'

    }
}
)
icon2.addEventListener("click",()=>{
    if(sec2.style.display === "none"){
        sec2.style.display = "block"
        icon2.textContent = "Hide"
    }else {
        sec2.style.display = "none";
        icon2.textContent = "Show"; // Change button text to 'Show'

    }
}
)
icon3.addEventListener("click",()=>{
    if(sec3.style.display === "none"){
        sec3.style.display = "block"
        icon3.textContent = "Hide"
    }else {
        sec3.style.display = "none";
        icon3.textContent = "Show"; // Change button text to 'Show'

    }
}
)
icon4.addEventListener("click",()=>{
    if(sec4.style.display === "none"){
        sec4.style.display = "block"
        icon4.textContent = "Hide"
    }else {
        sec4.style.display = "none";
        icon4.textContent = "Show"; // Change button text to 'Show'

    }
}
)



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
  
