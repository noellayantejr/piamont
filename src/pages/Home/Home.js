import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./Home.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <div className="item" key="1">
    <img src={require("../../assets/images/news_3.png")} className="media" />
  </div>,
  <div className="item" key="2">
    <img src={require("../../assets/images/news_1.png")} className="media" />
  </div>,
  <div className="item" key="3">
    <img src={require("../../assets/images/news_2.png")} className="media" />
  </div>,
];

function Home(props) {
  const [mainIndex, setMainIndex] = useState(0);

  useEffect(() => {
    document.title = "Piamont School - Home";
    window.scrollTo(0, 0);
  }, []);

  const slideNext = () => {
    setMainIndex((prevIndex) => (prevIndex + 1) % items.length);
  };
  
  const slidePrev = () => {
    setMainIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };
  
  const programRef = useRef(null);

  const scrollToPrograms = () => {
    const yOffset = -100;
    const element = programRef.current;
  
    if (element) {
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="header-section">
        <p className="title">Empowering Futures, Embracing Thinking Hearts and Loving Minds
          <span className="sub-caption">
            - The Piamont Way
          </span>
        </p>
        <p className="subtitle">Enrollment is ongoing !</p>
        <p className="classes-start">Classes start on August 8, 2024</p>

        <button className="program-offered-btn animate" onClick={scrollToPrograms}>
          Programs Offered
        </button>
      </div>

      <div className="container">
        <p className="section-title">Latest News</p>

        <div className="carousel">
          <AliceCarousel
            activeIndex={mainIndex}
            disableButtonsControls
            items={items}
            autoPlay={true}
            autoPlayInterval={3000}
            infinite={true}
            disableSlideInfo={true}
            disableDotsControls
          />
          <p className="index">{`${mainIndex + 1}/${items.length}`}</p>

          <div className="btn-prev" onClick={slidePrev}>
            &lang;
          </div>
          <div className="btn-next" onClick={slideNext}>
            &rang;
          </div>
        </div>
      </div>

      <div className="container be-a-piamont-section">
        <div className="be-a-piamont-card">
          <p className="be-a-piamont-header">
            What is it like to be a{" "}
            <span style={{ fontWeight: "bold", color: "#ab3b40" }}>
              Piamontian?
            </span>
          </p>
          <p className="be-a-piamont-details">
          We are delighted to have you join the PiaMont community—a place where learning goes beyond books and classrooms. At PiaMont, we cherish Christian values, holistic development, and academic excellence, guiding each student to become a respectful, responsible, and compassionate individual.
          Our approach combines technological innovation, creative learning methods, and a strong sense of community commitment, ensuring that students grow into culturally grounded global contributors. We aim to equip every learner with the skills, knowledge, and character to thrive in a fast-changing world while staying connected to their roots and purpose.
          Together, let’s inspire curiosity, foster creativity, and build a future filled with promise and possibilities. Welcome to PiaMont—where every child’s potential is nurtured, dreams take flight, and success becomes a shared journey. 🌟
          </p>

          <p className="be-a-piamont-name">MARIA AVELINE P. AVERILLA, PH.D</p>
          <p className="be-a-piamont-major">FOUNDER</p>

          <button className="be-a-piamont-btn">Be a Piamontian!</button>
        </div>
        <div className="be-a-piamont-card">
          <img
            src={require("../../assets/images/image_1.jpg")}
            width={"100%"}
          />
        </div>
      </div>

      <div className="container">
        <p className="section-title">School Events</p>

        <div className="event-card-section">
          <div className="event-card">
            <div>
              <img
                src={require("../../assets/images/image_2.jpg")}
                width={"100%"}
                className="event-image"
              />

              <div>
                <p className="event-card-header">
                  Hearth Day (Heart’s Day and Earth Day)
                </p>
                {/* <p className="event-card-date">March 27, 2024 • By Forbes Scribe</p> */}
                <p className="event-card-details">
                  Hearth Day combines Heart’s Day and Earth Day to teach students compassion and environmental responsibility. It emphasizes caring for both people and the environment.
                </p>
              </div>
            </div>
          </div>

          <div className="event-card">
            <img
              src={require("../../assets/images/intrams/image_2.jpg")}
              width={"100%"}
              className="event-image"
            />
            <div>
              <p className="event-card-header">
                Get Involved: Intramurals at Piamont
              </p>
              {/* <p className="event-card-date">March 27, 2024 • By Forbes Scribe</p> */}
              <p className="event-card-details">
                The intramurals highlight sportsmanship, cooperation, and discipline. It provides opportunities for students to showcase their athletic skills while learning teamwork and camaraderie.
              </p>
            </div>
          </div>

          <div className="event-card">
            <img
              src={require("../../assets/images/nutrition-month.jpg")}
              width={"100%"}
              className="event-image"
            />
            <div>
              <p className="event-card-header">
                Welcoming Activity with Nutrition Month
              </p>
              {/* <p className="event-card-date">March 27, 2024 • By Forbes Scribe</p> */}
              <p className="event-card-details">
              This activity sets the stage for a healthy and collaborative school year. It focuses on building teamwork, promoting wellness, and encouraging students to embrace nutritious habits.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="program-container" ref={programRef}>
        <p className="section-title">Offered Programs</p>
        
        <div className="program-section">
          <div className="program-card animate">
            <div className="circle">
            <img
              src={require("../../assets/images/nursery.png")}
              width={'100px'}
              height={"100px"}
              className="offered-icon-image"
            />
            </div>
            <p className="program-title">Nursery</p>
          </div>

          <div className="program-card animate">
            <div className="circle">
            <img
              src={require("../../assets/images/prekindergarten.png")}
              width={'100px'}
              height={"100px"}
              className="offered-icon-image"
            />
            </div>
            <p className="program-title">Prekindergarten</p>
          </div>

          <div className="program-card animate">
            <div className="circle">
            <img
              src={require("../../assets/images/kindergarten.png")}
              width={'100px'}
              height={"100px"}
              className="offered-icon-image"
            />
            </div>
            <p className="program-title">Kindergarten</p>
          </div>

          <div className="program-card animate">
            <div className="circle">
            <img
              src={require("../../assets/images/primaryschool.png")}
              width={'100px'}
              height={"100px"}
              className="offered-icon-image"
            />
            </div>
            <p className="program-title">Primary School</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  window: PropTypes.func,
};

export default Home;
