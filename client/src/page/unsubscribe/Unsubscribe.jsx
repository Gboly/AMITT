import { useLayoutEffect, useState } from "react";
import AnimatedPage from "../../components/animated/AnimatedPage";
import "./unsubscribe.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUnsubscribeFromNewsletterMutation } from "../../app/api/contactApiSlice";
import Spinner from "../../components/spinner/Spinner";

const Unsubscribe = () => {
  const navigate = useNavigate();
  const [query] = useSearchParams();

  useLayoutEffect(() => {
    document.body.style.overflow = "hidden";
    !query.get("id") && (window.location.href = "/nopage");
  }, [query, navigate]);

  const [unsubscribe, { data, isLoading }] =
    useUnsubscribeFromNewsletterMutation();
  const [isCancel, setIsCancel] = useState(false);

  const confirm = (
    <>
      <p>
        {
          "We're sorry to see you go. Your email has been successfully unsubscribed from our newsletter."
        }
      </p>
      <p>
        If you change your mind and want to resubscribe in the future, you are
        always welcome to do so
      </p>
      <button className="go-home-button" onClick={() => navigate("/")}>
        Go to Home page
      </button>
    </>
  );

  const cancel = (
    <>
      <p>
        Your unsubscription request has been canceled. You will continue to
        receive our newsletter.
      </p>
      <p>
        If you have any concerns or feedback, please feel free to reach out to
        us.
      </p>
      <button className="go-home-button" onClick={() => navigate("/")}>
        Go to Home page
      </button>
    </>
  );

  return (
    <>
      {query.get("id") && (
        <AnimatedPage className={"unsubscribe-page"}>
          <main>
            <section>
              {isLoading ? (
                <Spinner />
              ) : data ? (
                confirm
              ) : isCancel ? (
                cancel
              ) : (
                <>
                  <p>
                    Are you you want to stop recieving periodic updates from
                    AMITT?
                  </p>
                  <div>
                    <button onClick={() => setIsCancel(true)}>Cancel</button>
                    <button
                      onClick={() => unsubscribe({ id: query.get("id") })}
                    >
                      Unscubscribe
                    </button>
                  </div>
                </>
              )}
            </section>
          </main>
        </AnimatedPage>
      )}
    </>
  );
};

export default Unsubscribe;
