emailjs.init("gzEjAtO_jJrOfcq2k");

const form = document.getElementById("contact-form");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        emailjs.sendForm(
            "service_3l55y9j",
            "template_wbys0tl",
            this
        )

        .then(() => {

            alert("Message Sent Successfully!");

            form.reset();

        })

        .catch((error) => {

            alert("Failed To Send Message");

            console.log(error);

        });

    });

}