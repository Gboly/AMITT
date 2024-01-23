import recruit from "../assets/recruit.png";
import train from "../assets/train.png";
import deploy from "../assets/deploy.png";
import GAQ from "../assets/GAQ.png";
import TRQ from "../assets/TRQ.png";
import PTQ from "../assets/PTQ.png";

export const navOptions = [
  {
    desc: "About",
    content: [],
    columnType: "single-column",
    url: "/about-us",
  },
  {
    desc: "FAQ",
    content: [],
    columnType: "single-column",
    url: "/faq",
  },
  {
    desc: "Contact",
    content: [],
    columnType: "single-column",
    url: "/contact",
  },
];

export const actions = [
  {
    img: recruit,
    header: "Recruit",
    desc: "Individuals interested in joining our talent pool simply fill out our application form. Once submitted, our dedicated team meticulously reviews each application, considering skills, experience, and cultural fit. We understand the significance of effective communication, and that's why we reach out to promising applicants via email. This personalized approach ensures a transparent and efficient recruitment process, where each candidate is valued, considered, and guided through the next steps in their career journey.",
  },
  {
    img: train,
    header: "Train",
    desc: "In our training programs, we focus specifically on middle-level operations. We go beyond basic skills, providing comprehensive professional development tailored to the needs of this crucial operational tier. Our dynamic learning environment is designed for individuals in mid-level roles to flourish, offering targeted training in technical expertise, soft skills, and industry-specific knowledge. We believe that continuous learning is essential for unlocking the full potential of professionals in middle operations.",
  },
  {
    img: deploy,
    header: "Deploy",
    desc: "This stage is the culmination of our efforts, where talent meets opportunity. We strategically match trained individuals with roles that align with their strengths and ambitions. By ensuring a seamless transition from training to the professional arena, we enable our candidates to bring a distinctive edge to their new workplace.",
  },
];

export const ourValues = [
  {
    header: "Stay Bold",
    desc: "At AMITT, we embrace the spirit of staying bold in everything we do. This value is the driving force behind our innovative approach to challenges and opportunities alike. We encourage our team to think beyond conventional boundaries, to take risks, and to boldly pursue new ideas.",
  },
  {
    header: "Consistently Learning",
    desc: "Consistently learning is the heartbeat of our organization. We believe that knowledge is the foundation of growth, and we are dedicated to fostering a culture of continuous learning. Whether it's staying abreast of industry trends, acquiring new skills, or seeking innovative solutions, we encourage our team to be perpetual learners.",
  },
  {
    header: "Upholding Excellence",
    desc: "Upholding excellence is not just a goal; it's a standard that permeates every aspect of our company. We set high expectations for ourselves and hold each other accountable to deliver outstanding quality in our work. Excellence is not a one-time achievement but a continuous pursuit. From our recruitment processes to training methodologies and deployment strategies, we strive for nothing short of excellence. ",
  },
];

export const learnMore = [
  {
    desc: "About Us",
    url: "/about-us",
  },
  {
    desc: "Contact Us",
    url: "/contact",
  },
  {
    desc: "FAQ",
    url: "/faq",
  },
  {
    desc: "Apply Now",
    url: "/application",
  },
];

export const customMessageDetails = [
  {
    name: "firstName",
    label: "First Name",
  },
  {
    name: "lastName",
    label: "Last Name",
  },
  {
    name: "email",
    label: "Email",
  },
  {
    name: "phone",
    label: "Phone Number",
  },
  {
    name: "message",
    label: "Your Message To Us",
  },
];

export const faqTopics = [
  {
    img: GAQ,
    topic: "General",
  },
  {
    img: TRQ,
    topic: "Training",
  },
  {
    img: PTQ,
    topic: "Post Training",
  },
];

export const faqHeaders = {
  General: "Generally Asked Questions",
  Training: "Training Related Questions",
  ["Post Training"]: "Post Training Related Questions",
};

export const questions = {
  General: [
    {
      summary: "How do I apply for a position with your company?",
      details: `To apply, simply click on the "Apply Now" button at the top right corner and submit your application through the online form. Our team will review your application promptly.`,
    },
    {
      summary:
        "What industries does your company specialize in for recruitment?",
      details:
        "We specifically in a diverse range of industries but more specifically in the middle office operations industry.",
    },
    {
      summary: "What sets your recruitment process apart from others?",
      details:
        "Our recruitment process is distinguished by its meticulousness, ensuring a comprehensive assessment of skills, cultural fit, and potential. We believe in a personalized approach to match candidates with the right opportunities.",
    },
  ],
  Training: [
    {
      summary: "How are training programs structured at your company?",
      details:
        "Our training programs are carefully designed to foster both technical skills and holistic professional development. We offer a dynamic learning environment with a focus on practical, industry-relevant knowledge.",
    },
    {
      summary: "What support is provided during the training phase?",
      details:
        "From day one, candidates are supported by a team of mentors who provide guidance, tools, and context. Our goal is to ensure a seamless transition from training to deployment.",
    },
  ],
  ["Post Training"]: [
    {
      summary: "What happens after the training phase?",
      details:
        "After training, candidates enter our deployment phase, where they are strategically matched with roles that align with their strengths and aspirations. Our support continues throughout their career journey.",
    },
    {
      summary:
        "What opportunities for career growth are available post-training?",
      details:
        "The sky's the limit! We partner with individuals to map out their career journey based on their unique potential and passion. Opportunities for advancement are abundant, and continuous learning is encouraged.",
    },
    {
      summary:
        "How does your company support ongoing professional development?",
      details:
        "We are committed to continuous learning. Our company offers various resources, mentorship programs, and opportunities for skill enhancement to support the ongoing professional development of our team members.",
    },
  ],
};

export const applicationStages = [
  {
    id: 1,
    label: "Personal Information",
    zIndex: 1,
  },
  {
    id: 2,
    label: "Eligibilty",
    zIndex: 0.9,
  },
  {
    id: 3,
    label: "Education",
    zIndex: 0.8,
  },
  {
    id: 4,
    label: "Skills / Qualifications",
    zIndex: 0.7,
  },
  {
    id: 5,
    label: "Previous Employment",
    zIndex: 0.8,
  },
  {
    id: 6,
    label: "References",
    zIndex: 0.8,
  },
  {
    id: 7,
    label: "Cover letter & Resume",
    zIndex: 0.8,
  },
  {
    id: 8,
    label: "Send Application",
    zIndex: 0.8,
  },
];

export const setSlideColor = (stage, id, type) =>
  (type === "thumb" ? stage > id : stage >= id)
    ? "var(--primary-color)"
    : "var(--soft-shadow-actual-color)";

export const raceOptions = [
  "American Indian / Alaska Native",
  "Asian",
  "Black or African American",
  "Native Hawaiian",
  "White",
];

export const personalContent = [
  {
    name: "firstName",
    label: "First Name",
  },
  {
    name: "middleName",
    label: "Middle Name",
  },
  {
    name: "lastName",
    label: "Last Name",
  },
  {
    name: "address",
    label: "Street Address",
  },
  {
    name: "city",
    label: "City",
  },
  {
    name: "state",
    label: "State / Province",
  },
  {
    name: "postCode",
    label: "Postal / Zip Code",
  },
  {
    name: "phone",
    label: "Phone Number",
  },
  {
    name: "email",
    label: "E-mail",
  },
  {
    name: "birthday",
    label: "Date of Birth",
  },
  {
    name: "gender",
    label: "Gender",
  },
  {
    name: "race",
    label: "Race / Ethnical Group",
    options: raceOptions,
  },
];

// const

export const selectTypes = ["race"];
export const fileTypes = [];

export const appStagesContent = [personalContent];
