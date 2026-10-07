const student = {
  id: "BBU-2026-2027",
  khmerName: "វេត ឆវ័ន្ត",
  latinName: "Vet Chhorvorn",
  birthYear: 2008,
  baseTuitionStr: "700",
  scholarshipPercent: 80,
  isEnrolled: true,

  skills: [
    "HTML5",
    "CSS3 Flexbox",
    "Modern JS (ES6+)"
  ]
};


// Calculate age

const CURRENT_YEAR = 2026;

const calculatedAge =
  CURRENT_YEAR - student.birthYear;


// Convert String to Number

const originalTuition =
  Number(student.baseTuitionStr);


// Calculate discount

const discountAmount =
  originalTuition *
  (student.scholarshipPercent / 100);


// Calculate final tuition

const finalPayableTuition =
  originalTuition - discountAmount;


// Display information

document.getElementById("student-kh-name").textContent =
  student.khmerName;

document.getElementById("student-en-name").textContent =
  student.latinName;

document.getElementById("student-id-display").textContent =
  `ID: ${student.id}`;

document.getElementById("val-birth-year").textContent =
  student.birthYear;

document.getElementById("val-calculated-age").textContent =
  `${calculatedAge} ឆ្នាំ`;

document.getElementById("val-base-tuition").textContent =
  `$${originalTuition}`;

document.getElementById("val-final-tuition").textContent =
  `$${finalPayableTuition} (-${student.scholarshipPercent}%)`;


// Skills

const skillsContainer =
  document.getElementById("skills-container");


student.skills.forEach((skill) => {

  const badge = document.createElement("span");

  badge.className = "tag-badge";

  badge.textContent = skill;

  skillsContainer.appendChild(badge);

});


// Enrollment Status

const statusBar =
  document.getElementById("enrollment-status");


statusBar.textContent =
  `ស្ថានភាព៖ ${
    student.isEnrolled
      ? "✓ បានចុះឈ្មោះសិក្សារួចរាល់"
      : "✗ មិនទាន់ចុះឈ្មោះ"
  }`;