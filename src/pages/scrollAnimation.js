// document.addEventListener("DOMContentLoaded", () => {
//     const academicSection = document.querySelector(".academic-section");
  
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             academicSection.classList.add("h2-visible");
//           } else {
//             academicSection.classList.remove("h2-visible"); // Optional: Remove class when out of view
//           }
//         });
//       },
//       { threshold: 0.5 } // Trigger when 50% of the section is visible
//     );
  
//     observer.observe(academicSection);
//   });