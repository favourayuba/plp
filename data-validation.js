document.addEventListener("DOMContentLoaded", () => {
 const form = document.getElementById("userForm");
 const formSummary = document.getElementById("formSummary");
 const emailError = document.getElementById("emailError");

 form.addEventListener("submit", function(event) {
   event.preventDefault();

   // Capture form data
   const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   const contactMethod = document.querySelector('input[name="contact"]:checked');
   const termsAccepted = document.getElementById("terms").checked;

   // Validation checks
   if (!name || !email || !contactMethod || !termsAccepted) {
     alert("Please fill all required fields and accept terms and conditions.");
     return;
   }

   // Email format validation
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(email)) {
     emailError.textContent = "Please enter a valid email address.";
     return;
   } else {
     emailError.textContent = "";
   }

   // If validation passes, process the form data
   const formData = {
     name: name,
     email: email,
     contactMethod: contactMethod.value,
     termsAccepted: termsAccepted
   };

   // Display the form data
   displayFormData(formData);
 });

 // Real-time validation for email
 document.getElementById("email").addEventListener("input", function() {
   const email = this.value;
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(email)) {
     emailError.textContent = "Invalid email format";
   } else {
     emailError.textContent = "";
   }
 });
});

// Display the captured data dynamically
function displayFormData(formData) {
 const formSummary = document.getElementById("formSummary");
 formSummary.innerHTML = `
   <p><strong>Name:</strong> ${formData.name}</p>
   <p><strong>Email:</strong> ${formData.email}</p>
   <p><strong>Preferred Contact Method:</strong> ${formData.contactMethod}</p>
   <p><strong>Terms Accepted:</strong> ${formData.termsAccepted ? "Yes" : "No"}</p>
   <p class="success">Form submitted successfully!</p>
 `;
}
