window.onload = function() {
    displaySavedEmails();
};

function displaySavedEmails() {
    var savedEmails = JSON.parse(localStorage.getItem("SavedEmails")) || [];
    var display = '';

    if (savedEmails.length > 0) {
        display += '<h2>Saved Emails:</h2>';
        savedEmails.forEach(function(emailObj) {
            display += '<p>Name: ' + emailObj.name + ', Email: ' + emailObj.email + '</p>';
        });
    } else {
        display = '<p>No saved emails found.</p>';
    }

    document.getElementById("displayEmail").innerHTML = display;
}

function SaveEmail() {
    var name = document.getElementById("NameEmail").value;
    var email = document.getElementById("EmailInput").value;

    if (name && email) {
        var savedEmails = JSON.parse(localStorage.getItem("SavedEmails")) || [];
        savedEmails.push({name: name, email: email});
        localStorage.setItem("SavedEmails", JSON.stringify(savedEmails));

        alert('Email saved successfully.');

        displaySavedEmails();
    } else {
        alert('Please enter both name and email.');
    }
}
function deleteEmail(index) {
    var savedEmails = JSON.parse(localStorage.getItem("SavedEmails")) || [];
    savedEmails.splice(index, 1); // Entfernt den Eintrag aus dem Array
    localStorage.setItem("SavedEmails", JSON.stringify(savedEmails));
    displaySavedEmails(); // Aktualisiert die Anzeige
}