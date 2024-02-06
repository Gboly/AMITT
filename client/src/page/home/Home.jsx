import AnimatedPage from "../../components/animated/AnimatedPage";
import "./home.css";
import CustomSection from "../../components/customSection/CustomSection";
import { useRef, useState } from "react";
import { actions, ourValues } from "../../util/content";
import ActionCameo from "../../components/action-cameo/ActionCameo";
import Article from "../../components/article/Article";
import community from "../../assets/community.png";
import communityMd from "../../assets/community-md.png";
import { useNavigate } from "react-router-dom";
import femaleUser from "../../assets/user-female.png";

const Home = () => {
  const introRef = useRef();
  const valuesRef = useRef();
  const testimonialsRef = useRef();

  const navigate = useNavigate();

  const [isMore, setIsMore] = useState(false);

  const showMore = () => setIsMore(true);

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
      <CustomSection
        header={"Testimonials"}
        ref={testimonialsRef}
        className={"shaded-section testimonials"}
      >
        <div>
          <img src={femaleUser} alt="" />
          <h3>Oluwaseun</h3>
          {isMore ? testimony : testimonySnippet(showMore)}
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
            <button onClick={() => navigate("/application")}>Apply Now</button>
          </div>
        </CustomSection>
        <img src={community} alt="" className={"community-1"} />
        <img src={communityMd} alt="" className={"community-2"} />
      </section>
    </AnimatedPage>
  );
};

const testimony = (
  <>
    <p>
      {`"I am someone who has benefited from this great training programme I just
  want to say thank you for helping me to change and shape my career path in
  life. I want to encourage you that if you are still doubting and
  procrastinating with my short testimony.`}
    </p>
    <p>
      Few years ago I was lost, bored, with no direction and a clear path to my
      career. So I wanted a change and get a grips before all falls apart for
      me. . I always wanted to work in Financial Service Industry where it is
      challenging, possibility is endless and I can fulfill my potentials but
      finding it difficult to get in. The training program has giving me the
      break through, thanks to God; Specifically the collateral management
      world. Here things are very volatile, where no day is the same and you
      face different challenges in a fast pace environment that is only
      guaranteed to build you and let you grow with enormous opportunities.
    </p>
    <p>
      With no experience in the banking world at the time, I remember I embarked
      on a 3 months weekend training programme in the collateral world and the
      rest is history. Thanks to this training programme, I got my first offer
      within the three months of the training and years still counting, I have
      worked and still working in some of the biggest banks in the city, earning
      great, being comfortable and fulfilling my dreams and my life changed
      positively forever. Not bad for someone who looked lost with so direction
      and almost ready to pack it all up.
    </p>
    <p>
      Thank you AMITT Consulting, <br />
      {`Oluwaseun."`}
    </p>
  </>
);

const testimonySnippet = (showMore) => (
  <p>
    {`"I am someone who has benefited from this great training programme I just
want to say thank you for helping me to change and shape my career path in
life. I want to encourage you that if you are still doubting and
procrastinating with my short testimony... `}
    <span onClick={showMore}>Read more</span>
  </p>
);

export default Home;
