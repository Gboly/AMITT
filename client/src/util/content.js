import recruit from "../assets/recruit.png";
import train from "../assets/train.png";
import deploy from "../assets/deploy.png";
import GAQ from "../assets/GAQ.png";
import TRQ from "../assets/TRQ.png";
import PTQ from "../assets/PTQ.png";
import { prepareOptions } from "./function";

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
    label: "First Name *",
  },
  {
    name: "lastName",
    label: "Last Name",
  },
  {
    name: "email",
    label: "Email *",
  },
  {
    name: "phone",
    label: "Phone Number",
  },
  {
    name: "message",
    label: "Your Message To Us *",
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
  // {
  //   id: 2,
  //   label: "Eligibilty",
  //   zIndex: 0.9,
  // },
  {
    id: 2,
    label: "Education",
    zIndex: 0.8,
  },
  {
    id: 3,
    label: "Skills / Qualifications",
    zIndex: 0.7,
  },
  {
    id: 4,
    label: "Previous Employment",
    zIndex: 0.8,
  },
  {
    id: 5,
    label: "References",
    zIndex: 0.8,
  },
  {
    id: 6,
    label: "Cover letter & Resume",
    zIndex: 0.8,
  },
  {
    id: 7,
    label: "Send Application",
    zIndex: 0.8,
  },
];

export const raceOptions = [
  "American Indian / Alaska Native",
  "Asian",
  "Black or African American",
  "Native Hawaiian",
  "White",
];

const yesOrNo = `Reply with a "Yes" or "No"`;

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
    name: "country",
    label: "Country",
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
    options: prepareOptions(raceOptions),
  },
];

export const educationContent = [
  {
    name: "highSchool",
    label: "Name of High School Attended",
  },
  {
    name: "highSchoolDuration",
    label: "Number of Years Attended",
  },
  {
    name: "highSchoolGraduate",
    label: `Did you graduate? (${yesOrNo})`,
  },
  {
    name: "university",
    label: "Name of College / Univeristy Attended",
  },
  {
    name: "univeristyDuration",
    label: "Number of Years Attended",
  },
  {
    name: "univeristyCourse",
    label: "Area of Study/ Degree",
  },
  {
    name: "universityGraduate",
    label: `Did you graduate? (${yesOrNo})`,
  },
];

export const skillsContent = [
  {
    name: "skills",
    label: "Skills (List any relevant skill you possess)",
  },
  {
    name: "qualifications",
    label:
      "Qualifications (List any relevant certifications / qualifications you possess)",
  },
];

export const previousJobContent = [
  {
    name: "prevOrganization",
    label: "Organization's Name",
  },
  {
    name: "prevPosition",
    label: "What Position Did You Hold?",
  },
  {
    name: "reasonForLeaving",
    label: "Reason For Leaving",
  },
];

export const referenceContent = [
  {
    name: "referenceName",
    label: "Name Of Reference",
  },
  {
    name: "refRelationship",
    label: "Relationship With Reference",
  },
  {
    name: "refRelDuration",
    label: "Years Acquainted",
  },
  {
    name: "refPhone",
    label: "Phone Number",
  },
  {
    name: "refEmail",
    label: "Email",
  },
];

export const resumeContent = [
  {
    name: "resume",
    label: "Resume",
  },
  {
    name: "coverLetter",
    label: "Cover Letter (Optional)",
  },
];

// const

export const selectTypes = ["race"];
export const fileTypes = ["resume", "coverLetter"];

export const appStagesContent = [
  personalContent,
  educationContent,
  skillsContent,
  previousJobContent,
  referenceContent,
  resumeContent,
];

export const headers = [
  "Tell Us About Yourself",
  "We Require Information About Your Educational Background",
  "Show Off Your Skills",
  "Tell Us About Your Previous Job (Skip if not applicable)",
  "Provide Us With A Reference Details",
  "Upload Your Resume and Optionally Upload a Cover Letter",
  "Terms And Agreement",
];

export const notRequiredFields = {
  1: ["middleName"],
  2: [],
  3: ["qualifications"],
  4: ["prevOrganization", "prevPosition", "reasonForLeaving"],
  5: [],
  6: ["coverLetter"],
  7: [],
};

export const terms1 =
  "By clicking the submit button below, I certify that all of the information provided by me on this application is true and complete, and I understand that if any false information, ommissions, or misrepresentations are discovered, my application may be rejected, if I am accepted to be trained, the offer could be terminated, and if I am employed, the offer could also be terminated at any time.";

export const terms2 = `In consideration of my employment, I agree to conform to the company's rules and regulations, and I agree that my employment can be terminated, with or without cause, and with or without notice, at any time, at either my or the company's option.
I also understand and agree that the terms and conditions of my employment may be changed, with or without cause, and with or without notice, at any time by the company.`;

export const testimony = [
  `"I am someone who has benefited from this great training programme I just
      want to say thank you for helping me to change and shape my career path in
      life. I want to encourage you that if you are still doubting and
      procrastinating with my short testimony.`,
  `Few years ago I was lost, bored, with no direction and a clear path to my
      career. So I wanted a change and get a grips before all falls apart for
      me. . I always wanted to work in Financial Service Industry where it is
      challenging, possibility is endless and I can fulfill my potentials but
      finding it difficult to get in. The training program has giving me the
      break through, thanks to God; Specifically the collateral management
      world. Here things are very volatile, where no day is the same and you
      face different challenges in a fast pace environment that is only
      guaranteed to build you and let you grow with enormous opportunities.`,
  `With no experience in the banking world at the time, I remember I embarked
      on a 3 months weekend training programme in the collateral world and the
      rest is history. Thanks to this training programme, I got my first offer
      within the three months of the training and years still counting, I have
      worked and still working in some of the biggest banks in the city, earning
      great, being comfortable and fulfilling my dreams and my life changed
      positively forever. Not bad for someone who looked lost with so direction
      and almost ready to pack it all up.`,
];
