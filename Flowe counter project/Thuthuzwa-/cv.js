const firebaseConfig = {
    apiKey: "AIzaSyDM5Md-k0x6Naz4bs36tMVLQR4nFoliAZQ",
    authDomain: "contactform-f1037.firebaseapp.com",
    databaseURL: "https://contactform-f1037-default-rtdb.firebaseio.com",
    projectId: "contactform-f1037",
    storageBucket: "contactform-f1037.appspot.com",
    messagingSenderId: "110244259612",
    appId: "1:110244259612:web:2d45bb6dc7e52d4359fcd9",
};

// Initialise Firebase
firebase.initializeApp(firebaseConfig);

// Reference database
const contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    const name = getElementVal("name");
    const emailid = getElementVal('emailid');
    const message = getElementVal('message');
    saveMessages(name, emailid, message);

    // Alerts that message is sent
    document.querySelector(".alert").style.display = "block";

    // Set time for the display of alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    // Reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, message) => {
    const newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        message: message,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};


