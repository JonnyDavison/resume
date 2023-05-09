function sendMail(contactForm){
    emailjs.send("service_jfcl0wd", "Project Requests - JD R", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error)
        }
    )
    return false;
}

function submitDisappear(){
    let submitDiv = document.getElementById("submitDiv");
    submitDiv.style.display = "none";
}


function thanksAppear() {
    let thanksDiv = document.getElementById("thanksDiv");
    thanksDiv.style.display = 'block';
}


function resetPage() {
    window.location.reload();
}
