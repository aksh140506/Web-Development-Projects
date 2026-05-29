function generateResume() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const education = document.getElementById("education").value.split(',');
  const experience = document.getElementById("experience").value;
  const skills = document.getElementById("skills").value.split(',');

  const resumeDiv = document.getElementById("resume");

  resumeDiv.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Email ID:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phone}</p>
    <h3>Education</h3>
    <ul>${education.map(education => `<li>${education.trim()}</li>`).join('')}</ul>
    <h3>Experience</h3>
    <p>${experience}</p>
    <h3>Skills</h3>
    <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
  `;
}