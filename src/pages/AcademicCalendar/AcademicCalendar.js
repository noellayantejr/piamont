import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./AcademicCalendar.css";
import ReactPlayer from "react-player";

function AcademicCalendar(props) {
  useEffect(() => {
    document.title = "Piamont School - academic-calendar";
    window.scrollTo(0, 0);
  }, []);

  const [isPortrait, setIsPortrait] = useState(false);

  const handleReady = (player) => {
    const videoWidth = player.getInternalPlayer().videoWidth;
    const videoHeight = player.getInternalPlayer().videoHeight;

    setIsPortrait(videoHeight > videoWidth);
  };

  return (
    <div>
      <div className="header-section">
        <p className="title">Academic Calendar</p>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "Roboto",
            color: "#812e2e",
          }}
        >
          Events Calendar / Photos of Past Events / Event Details PiaMont School
          Events Overview
        </p>
      </div>

      <div className="academic-calendar-container">
        <p className="section-title-academic-calendar">
          1. Welcoming Activity with Nutrition Month
        </p>
        <div className="academic-calendar-header-section">
          <div className="academic-calendar-header-text">
            <p>
              This activity sets the stage for a healthy and collaborative
              school year. It focuses on building teamwork, promoting wellness,
              and encouraging students to embrace nutritious habits.
            </p>
          </div>

          <div className="images-container">
            <div className="images-section">
              <div style={{width: '32%'}}>
              <img
                  src={require("../../assets/images/nutrition_month/image_1.jpg")}
                  width={"100%"}
                  height={"277px"}
                  className="event-image"
                />
              </div>
              <div style={{width: '32%'}}>
                <img
                  src={require("../../assets/images/nutrition_month/image_2.jpg")}
                  width={"100%"}
                  height={"277px"}
                  className="event-image"
                />
              </div>
              <div style={{width: '32%'}}>
                <img
                  src={require("../../assets/images/nutrition_month/image_3.jpg")}
                  width={"100%"}
                  height={"277px"}
                  className="event-image"
                />
              </div>
            </div>

            <div className="images-section" style={{marginTop: '30px'}}>
              <div style={{width: '32%'}}>
              <img
                  src={require("../../assets/images/nutrition_month/image_4.jpg")}
                  width={"100%"}
                  height={"277px"}
                  className="event-image"
                />
              </div>
              <div style={{width: '32%'}}>
                <img
                  src={require("../../assets/images/nutrition_month/image_5.jpg")}
                  width={"100%"}
                  height={"277px"}
                  className="event-image"
                />
              </div>
              <div style={{width: '32%'}}>
                <img
                  src={require("../../assets/images/nutrition_month/image_6.jpg")}
                  width={"100%"}
                  height={"277px"}
                  className="event-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="academic-calendar-container">
        <p className="section-title-academic-calendar">2. Intramurals</p>
        <div className="academic-calendar-header-section">
          <div className="academic-calendar-header-text">
            <p>
              The intramurals highlight sportsmanship, cooperation, and
              discipline. It provides opportunities for students to showcase
              their athletic skills while learning teamwork and camaraderie.
            </p>
          </div>

          <div className="images-container">
            <div className="images-section">
              <div style={{width: '32%'}}>
                <img
                  src={require("../../assets/images/intrams/image_1.jpg")}
                  width={"100%"}
                  height={"277px"}
                  className="event-image"
                />
              </div>
              <div style={{width: '32%'}}>
                <img
                  src={require("../../assets/images/intrams/image_2.jpg")}
                  width={"100%"}
                  height={"277px"}
                  className="event-image"
                />
              </div>
              <div style={{width: '32%'}}>
                <img
                  src={require("../../assets/images/intrams/image_3.jpg")}
                  width={"100%"}
                  height={"277px"}
                  className="event-image"
                />
              </div>
            </div>

            <div className="images-section" style={{marginTop: '30px'}}>
              <div style={{width: '32%'}}>
                <img
                  src={require("../../assets/images/intrams/image_4.jpg")}
                  width={"100%"}
                  height={"277px"}
                  className="event-image"
                />
              </div>
              <div style={{width: '32%'}}>
                <img
                  src={require("../../assets/images/intrams/image_5.jpg")}
                  width={"100%"}
                  height={"277px"}
                  className="event-image"
                />
              </div>
              <div style={{width: '32%'}}>
                <img
                  src={require("../../assets/images/intrams/image_6.jpg")}
                  width={"100%"}
                  height={"277px"}
                  className="event-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="academic-calendar-container">
        <p className="section-title-academic-calendar">
          3. Leadership Training (Campfire’s Burning and Fire Dance)
        </p>
        <div className="academic-calendar-header-section">
          <div className="academic-calendar-header-text">
            <p>
              The leadership training activities instill confidence, resilience,
              and decision-making skills. Through Campfire and Fire Dance,
              students develop leadership qualities and a stronger sense of
              responsibility.
            </p>
          </div>
          <iframe
            src="https://drive.google.com/file/d/1Wxzd7KV6IDJ7cXlRriy5HaBKxzPp1X0N/preview"
            width="90%"
            height="600px"
          />
        </div>
      </div>

      <div className="academic-calendar-container">
        <p className="section-title-academic-calendar">4. Literacy Day</p>
        <div className="academic-calendar-header-section">
          <div className="academic-calendar-header-text">
            <p>
              Literacy Day strengthens students’ reading, writing, and
              communication skills. It celebrates language as a tool for
              expression and self-confidence.
            </p>
          </div>
        </div>
      </div>

      <div className="academic-calendar-container">
        <p className="section-title-academic-calendar">5. Alamat ng PiaMont</p>
        <div className="academic-calendar-header-section">
          <div className="academic-calendar-header-text">
            <p>
              Alamat ng PiaMont tells the fictional story of a girl with a
              learning difficulty in reading who prayed to the anitos (gods) for
              the ability to become a useful teacher. Her prayer was heard by
              the spirits of the gods, and with the help of the diwatas
              (fairies), her wish came true. She eventually passed away but left
              a powerful legacy to her team of lakambini (teacher successors), a
              tradition that continues to inspire generations up to the present
              day.
            </p>
          </div>

          <iframe
            src="https://drive.google.com/file/d/1uB5QmS6DA_45_2dOhPMOT03gEApusdDb/preview"
            width="90%"
            height="600px"
          />
        </div>
      </div>

      <div className="academic-calendar-container">
        <p className="section-title-academic-calendar">
          6. Christmas Caroling and PiaMont Station ID
        </p>
        <div className="academic-calendar-header-section">
          <div className="academic-calendar-header-text">
            <p>
              Through caroling and station IDs, students showcase artistic
              talents and collaborative effort. It builds school spirit and a
              sense of unity among students and teachers.
            </p>
          </div>
          <iframe
            src="https://drive.google.com/file/d/1f15-2VETaGIldzTsiv2ypc5Q6E7WnGXn/preview"
            width="90%"
            height="600px"
          />
        </div>
      </div>

      <div className="academic-calendar-container">
        <p className="section-title-academic-calendar">7. PiaMont’s First Robotics Expo</p>
        <div className="academic-calendar-header-section">
          <div className="academic-calendar-header-text">
            <p>
              Through caroling and station IDs, students showcase artistic
              talents and collaborative effort. It builds school spirit and a
              sense of unity among students and teachers.
            </p>
          </div>

          <iframe
            src="https://drive.google.com/file/d/1gq5AWLavAbwg1cTlCsxnxxNQ1bm5imhL/preview"
            width="90%"
            height="600px"
          />
        </div>
      </div>

      <div className="academic-calendar-container">
        <p className="section-title-academic-calendar">
          8. Hearth Day (Heart’s Day and Earth Day)
        </p>
        <div className="academic-calendar-header-section">
          <div className="academic-calendar-header-text">
            <p>
              The robotics expo introduces students to STEM concepts and
              problem-solving. It cultivates innovation, teamwork, and practical
              engineering skills.
            </p>
          </div>

          <div className="images-container">
            <div className="images-section">
              <div style={{width: '32%'}}>
              <img
                  src={require("../../assets/images/hearth_day/image_1.jpg")}
                  width={"100%"}
                  height={"277px"}
                  className="event-image"
                />
              </div>
              <div style={{width: '32%'}}>
                <img
                  src={require("../../assets/images/hearth_day/image_2.jpg")}
                  width={"100%"}
                  height={"auto"}
                  className="event-image"
                />
              </div>
              <div style={{width: '32%'}}>
                <img
                  src={require("../../assets/images/hearth_day/image_3.jpg")}
                  width={"100%"}
                  height={"277px"}
                  className="event-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="academic-calendar-container">
        <p className="section-title-academic-calendar">9. Christmas Nativity</p>
        <div className="academic-calendar-header-section">
          <div className="academic-calendar-header-text">
            <p>
              The Christmas Nativity fosters teamwork, discipline, and
              appreciation for tradition. It highlights the importance of
              community cooperation and celebrating shared values.
            </p>
          </div>

          <iframe
            src="https://drive.google.com/file/d/1psr9Ly91eDfd6vKd2wXZEZnN4Qe9w9I7/preview"
            width="90%"
            height="600px"
          />
        </div>
      </div>

      <div className="academic-calendar-container">
        <p className="section-title-academic-calendar">10. PiaMont Big Box Giving</p>
        <div className="academic-calendar-header-section">
          <div className="academic-calendar-header-text">
            <p>
              This activity strengthens community ties by promoting social
              responsibility and generosity. It encourages students to
              contribute and support others, showcasing teamwork and empathy.
            </p>
          </div>

          <iframe
            src="https://drive.google.com/file/d/1KjvheWGIn7__jn-P1n7tWIwnJRZ4w7RB/preview"
            width="90%"
            height="600px"
          />
        </div>
      </div>

      <div className="academic-calendar-container" style={{marginBottom: '100px'}}>
        <p className="section-title-academic-calendar">
          11. School Adaptation of Hamilton and The Little Prince
        </p>
        <div className="academic-calendar-header-section">
          <div className="academic-calendar-header-text">
            <p>
              Adapting these popular stories allows students to express
              creativity and collaborate on performance projects. It enhances
              teamwork, creativity, and an appreciation for literature and the
              arts.
            </p>
          </div>

          <iframe
            src="https://drive.google.com/file/d/1REoH5BI8wR7M2qruE4j1j5LP5AsEV6VV/preview"
            width="90%"
            height="600px"
          />
        </div>
      </div>
    </div>
  );
}

AcademicCalendar.propTypes = {
  window: PropTypes.func,
};

export default AcademicCalendar;
