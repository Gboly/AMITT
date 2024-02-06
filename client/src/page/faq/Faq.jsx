import AnimatedPage from "../../components/animated/AnimatedPage";
import "./faq.css";
import faq from "../../assets/faq.png";
import CustomSection from "../../components/customSection/CustomSection";
import { useRef, useState } from "react";
import { faqHeaders, faqTopics, questions } from "../../util/content";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Faq = () => {
  const navigate = useNavigate();
  const faqTopicsRef = useRef(null);
  const faqTopicRef = useRef(null);

  const [activeTopic, setActiveTopic] = useState("General");
  const [activeQuestion, setActiveQuestion] = useState("");

  const changeTopic = (e) => {
    setActiveTopic(e.currentTarget.id);
    scroller.scrollTo("questions", { smooth: true });
  };

  return (
    <AnimatedPage className={"faq"}>
      <section className="intro">
        <img src={faq} alt="" />
        <div>
          <div>
            <header>Frequently Asked Questions</header>
            <p>
              We understand that clarity is key, and this page is designed to
              provide you with quick and comprehensive information.
            </p>
            <button onClick={() => navigate("/contact?question=true")}>
              Ask a question
            </button>
          </div>
        </div>
      </section>
      <CustomSection
        header={"View FAQ By Topic"}
        ref={faqTopicsRef}
        className={"faq-topics"}
      >
        <p>
          {
            "Explore a range of topics, from our recruitment process to training initiatives and deployment strategies. If you don't find what you're looking for, feel free to reach out – we're here to assist you on your journey to success."
          }
        </p>
        <div className="topics">
          {faqTopics.map(({ img, topic }) => (
            <article
              key={topic}
              id={topic}
              className={activeTopic === topic ? "active-topic" : ""}
              onClick={changeTopic}
            >
              <div>
                <img src={img} alt="" />
              </div>
              <p>{topic}</p>
            </article>
          ))}
        </div>
      </CustomSection>
      <CustomSection
        ref={faqTopicRef}
        header={faqHeaders[activeTopic]}
        className={"questions"}
        name="questions"
      >
        <div>
          {questions[activeTopic].map(({ summary, details }) => (
            <Accordion
              key={summary}
              sx={{
                backgroundColor: "inherit",
                marginBottom: "1.5rem",
              }}
              expanded={summary === activeQuestion}
              id={summary}
              onChange={() => setActiveQuestion(summary)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ height: "5rem", fontWeight: "700", fontSize: "1.15rem" }}
              >
                {summary}
              </AccordionSummary>
              <AccordionDetails>{details}</AccordionDetails>
            </Accordion>
          ))}
        </div>
      </CustomSection>
    </AnimatedPage>
  );
};

export default Faq;
