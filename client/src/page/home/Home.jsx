import AnimatedPage from "../../components/animated/AnimatedPage";
import "./home.css";
import CustomSection from "../../components/customSection/CustomSection";
import { useRef } from "react";
import { actions, ourValues } from "../../util/content";
import ActionCameo from "../../components/action-cameo/ActionCameo";
import Article from "../../components/article/Article";
import community from "../../assets/community.png";
import communityMd from "../../assets/community-md.png";

const Home = () => {
  const introRef = useRef();
  const valuesRef = useRef();

  return (
    <AnimatedPage className={"home"}>
      <section id="intro" ref={introRef}>
        <CustomSection header={"unlock a world of talents"} ref={introRef}>
          <p className="intro-desc">
            Discover talented individuals with a desire to learn and advance
            their skills. We equip them accordingly so that they develop both
            personally and professionally. This allows them to be deployed into
            the workforce, carrying an edge about them.
          </p>
        </CustomSection>
        <div className="intro-img-wrap"></div>
      </section>
      <section className="shaded-section">
        <CustomSection>
          <p className="statement">
            We place our focus on the minority group in the UK - The black
            community especially.
          </p>
        </CustomSection>
      </section>
      <CustomSection>
        {actions.map(({ img, header, desc }) => (
          <ActionCameo key={header} {...{ img, header, desc }} />
        ))}
      </CustomSection>
      <CustomSection
        header={"our core values"}
        ref={valuesRef}
        className={"shaded-section our-values-wrap"}
      >
        <div className="our-values">
          {ourValues.map(({ header, desc }) => (
            <Article key={header} {...{ header, desc }} />
          ))}
        </div>
      </CustomSection>
      <section className="community">
        <CustomSection>
          <div className="community-article">
            <header>{"It's More Than Just A Job"}</header>
            <p>
              {
                "This is more than just a workplace for a job — it's a platform for constructing a lifelong career that instills pride and motivation"
              }
            </p>
            <p>
              At AMITT, everyone commences their journey in the same role,
              acquiring a comprehensive understanding of the business from its
              foundations. From day one, a team of mentors stands by you,
              offering support, guidance, and the tools you need at every stage.
              The possibilities are limitless from there, and we collaborate
              with you to map out a personalized journey based on your distinct
              potential and passion.
            </p>
            <button>Apply Now</button>
          </div>
        </CustomSection>
        <img src={community} alt="" className={"community-1"} />
        <img src={communityMd} alt="" className={"community-2"} />
      </section>
    </AnimatedPage>
  );
};

export default Home;
