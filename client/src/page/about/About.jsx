import AnimatedPage from "../../components/animated/AnimatedPage";
import "./about.css";
import recruitment from "../../assets/recruitment.jpg";
import ceo from "../../assets/ceo.jpeg";
import CustomSection from "../../components/customSection/CustomSection";
import { useRef } from "react";

const About = () => {
  const aboutUsRef = useRef(null);
  const teamRef = useRef(null);

  return (
    <AnimatedPage className={"about"}>
      <img src={recruitment} alt="" />
      <p>Connecting Talent, Building Futures...</p>
      <CustomSection className="about-us" header={"About Us"} ref={aboutUsRef}>
        <p>
          As a company we recruit, train and deploy financial professionals to
          work with our worldwide clients - we strive to mould people into
          professionals ready to begin their career. We aim to close the gap
          that exists with representation for skilled minorities, within the
          financial workspace. All of our candidates are selected upon merit -
          which reflects the work that they have put in. It is often not the
          fact that people lack the skill or capacity to perform well but rather
          that the opportunities simply do not exist. What does exist are
          barriers, wether overt or covert, they are in place through various
          forms. We contribute to breaking down such barriers - there is no
          place for hindered talent.
        </p>
      </CustomSection>
      <CustomSection className="team" header={"Meet The Team"} ref={teamRef}>
        <img src={ceo} alt="" />
        <h3>Monsurat ‘Lape’ Adeoti</h3>
        <h5>Chief Excexutive Officer</h5>
        <p>
          As the CEO, Monsurat ‘Lape’ is responsible for making major corporate
          decisions, overseeing and co-ordinating the overall operations and
          resources of the company.
        </p>
        <p>
          Monsurat ‘Lape’ is a seasoned and dynamic Financial services expert
          with skills in Derivatives, Business Analysis, Change Management,
          Collateral Management and Project Management. A Patient and creative
          problem-solver who is known for organizational skills, commitment to
          excellence and a track record of delivering on projects.
        </p>
      </CustomSection>
    </AnimatedPage>
  );
};

export default About;
