// src/data/schools.js
import shewadiHero from "../assets/schools/shewadi/hero.jpg";
import shewadi1 from "../assets/schools/shewadi/1.jpeg";
import shewadi2 from "../assets/schools/shewadi/2.jpeg";
import shewadi3 from "../assets/schools/shewadi/3.jpeg";

import ruihero from "../assets/schools/rui/hero.jpg";
import rui1 from "../assets/schools/shewadi/1.jpeg";
import rui2 from "../assets/schools/shewadi/2.jpeg";
import rui3 from "../assets/schools/shewadi/3.jpeg";

import nandedHero from "../assets/schools/nanded/hero.jpg";
import nanded1 from "../assets/schools/shewadi/1.jpeg";
import nanded2 from "../assets/schools/shewadi/2.jpeg";
import nanded3 from "../assets/schools/shewadi/3.jpeg";

import risangaoHero from "../assets/schools/risangao/hero.jpg";
import risangao1 from "../assets/schools/shewadi/1.jpeg";
import risangao2 from "../assets/schools/shewadi/2.jpeg";
import risangao3 from "../assets/schools/shewadi/3.jpeg";

import jalnaHero from "../assets/schools/jalna/hero.jpg";
import jalna1 from "../assets/schools/shewadi/1.jpeg";
import jalna2 from "../assets/schools/shewadi/2.jpeg";
import jalna3 from "../assets/schools/shewadi/3.jpeg";


const schools = [
  {
    id: 1,
    slug: "babaraoji-dhonde-ashram-shewadi",
    name: "Babaraoji Dhonde Kendriya Ashram Shala",
    location: "Shewadi, Dist. Nanded",
    intakeLabel: "Std. 1–10",
    about:
      "Babaraoji Dhonde Kendriya Ashram Shala serves rural students with a focus on holistic education, discipline, and character building. The school offers academic excellence along with sports, arts and co-curricular activities.",
    features: [
      "Residential hostel facilities",
      "Smart classrooms & digital learning",
      "Library & science labs",
      "Sports & cultural programs",
    ],
     sports: [
    "Cricket",
    "Badminton",
    "Volleyball",
    "Kho Kho",
    "Football",
  ],
    events: [
      { year: 2024, title: "Annual Day & Awards", note: "Celebrated excellence and talent." },
      { year: 2023, title: "Science Exhibition", note: "Student-led innovation showcase." },
    ],
    alumni: [
      { name: "Rahul Patil", highlight: "SSC Topper 2023 – 92%" },
      { name: "Sneha Jadhav", highlight: "State-level Kho-Kho player" },
    ],
    contact: {
      address: "Shewadi, Nanded, Maharashtra, India",
      phone: "+91 98765 00001",
      email: "ashram.shewadi@santngo.org",
      mapEmbed:
        "https://www.google.com/maps?q=Shewadi,Nanded&output=embed",
    },
    heroImage: shewadiHero,
    gallery: [
      shewadi1, shewadi2, shewadi3
    ],
  },
  {
    id: 2,
    slug: "minatai-thackeray-school-risangao",
    name: "Minatai Thackeray School",
    location: "Risangao, Dist. Nanded",
    intakeLabel: "Std. 1–8",
    about:
      "Minatai Thackeray School focuses on foundational learning, values education, and early exposure to technology for young learners.",
    features: [
      "Activity-based learning",
      "Computer awareness from early grades",
      "Safe campus with caring staff",
      "Co-curricular clubs",
    ],
     sports: [
    "Cricket",
    "Badminton",
    "Volleyball",
    "Kho Kho",
    "Football",
  ],
    events: [
      { year: 2024, title: "Reading Week", note: "Daily reading circles and contests." },
      { year: 2023, title: "Sports Day", note: "Fun races and parent participation." },
    ],
    alumni: [{ name: "—", highlight: "Primary section (alumni tracking minimal)" }],
    contact: {
      address: "Risangao, Nanded, Maharashtra, India",
      phone: "+91 98765 00002",
      email: "minatai.risangao@santngo.org",
      mapEmbed:
        "https://www.google.com/maps?q=Risangao,Nanded&output=embed",
    },
    heroImage: risangaoHero,
    gallery: [
      risangao1,risangao2,risangao3
    ],
  },
  {
    id: 3,
    slug: "shivam-public-school-rui",
    name: "Shivam Public School",
    location: "Rui, Dist. Nanded",
    intakeLabel: "Std. 1–10",
    about:
      "Shivam Public School blends academics with experiential learning and strong mentorship to nurture confident communicators and problem solvers.",
    features: [
      "English medium instruction",
      "STEM & project-based learning",
      "Career guidance & counseling",
      "Arts, music, and theatre",
    ],
     sports: [
    "Cricket",
    "Badminton",
    "Volleyball",
    "Kho Kho",
    "Football",
  ],
    events: [
      { year: 2024, title: "STEM Fair", note: "Robotics and model-making." },
      { year: 2023, title: "Cultural Fest", note: "Music, drama and folk arts." },
    ],
    alumni: [
      { name: "Aarti Deshmukh", highlight: "District-level Science Olympiad winner" },
    ],
    contact: {
      address: "Rui, Nanded, Maharashtra, India",
      phone: "+91 98765 00003",
      email: "shivam.rui@santngo.org",
      mapEmbed:
        "https://www.google.com/maps?q=Rui,Nanded&output=embed",
    },
    heroImage: ruihero,
    gallery: [
      rui1,rui2,rui3
    ],
  },
  {
    id: 4,
    slug: "tehra-nagar-school-nanded",
    name: "Tehra Nagar School",
    location: "Nanded",
    intakeLabel: "Std. 1–10",
    about:
      "Tehra Nagar School emphasizes inclusive education with a caring environment and a strong focus on foundational literacy & numeracy.",
    features: [
      "Foundational literacy program",
      "Health & hygiene initiatives",
      "Community engagement",
      "Teacher development workshops",
    ],
     sports: [
    "Cricket",
    "Badminton",
    "Volleyball",
    "Kho Kho",
    "Football",
  ],
    events: [
      { year: 2024, title: "Health Camp", note: "Annual medical check-up for students." },
    ],
    alumni: [{ name: "—", highlight: "Upcoming alumni highlights." }],
    contact: {
      address: "Tehra Nagar, Nanded, Maharashtra, India",
      phone: "+91 98765 00004",
      email: "tehra.nanded@santngo.org",
      mapEmbed:
        "https://www.google.com/maps?q=Tehra+Nagar,Nanded&output=embed",
    },
    heroImage:nandedHero,
    gallery: [
     nanded1,nanded2,nanded3
    ],
  },
  {
    id: 5,
    slug: "jalna-public-school-nanded",
    name: "Jalna Public School",
    location: "Nanded",
    intakeLabel: "Std. 1–10",
    about:
      "Jalna Public School delivers high-quality academics complemented by leadership-building and sports excellence.",
    features: [
      "Leadership & life-skills modules",
      "Well-equipped playgrounds",
      "Competitive exam support",
      "Parents engagement programs",
    ],
     sports: [
    "Cricket",
    "Badminton",
    "Volleyball",
    "Kho Kho",
    "Football",
  ],
    events: [
      { year: 2024, title: "Leadership Conclave", note: "Talks by role models." },
    ],
    alumni: [{ name: "Shivam Dhonde", highlight: "Alumni updates coming soon." }],
    contact: {
      address: "Nanded, Maharashtra, India",
      phone: "+91 98765 00005",
      email: "jalna.public@nanded@santngo.org",
      mapEmbed:
        "https://www.google.com/maps?q=Nanded&output=embed",
    },
    heroImage: jalnaHero,
    gallery: [
     jalna1,jalna2,jalna3
    ],
  },
];

export default schools;
