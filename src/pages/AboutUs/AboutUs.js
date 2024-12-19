import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./AboutUs.css";
import Card from "./component/Card/Card";

function AboutUs(props) {
  useEffect(() => {
    document.title = "Piamont School - Requirements";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="header-section about-us-header-section">
        <p className="title about-us-title ">About Us</p>
      </div>

      <div className="about-us-container">
        <p className="about-us-section-title">The Meaning of Piamont</p>
        <div className="about-u-header-section">
          <div className="about-us-header-text">
            <p>
              The name PiaMont, symbolically defined by Msgr. Cris Bernarte,
              stands for Holy Mountain—Pia for Holy, and Mont for Mountain. This
              reflects the institution's mission to provide not only academic
              excellence but a nurturing environment where each student’s moral
              and spiritual growth is prioritized. "Providence of nature is the
              child's brighter future." This concept emphasizes that a
              connection with nature and a strong foundation in discipline,
              resilience, and learning create a path toward success. The journey
              to PiaMont's current location on a hill was a result of
              circumstance and faith. After the destructive impact of Super
              Typhoon Reming in 2006, the school had to relocate to a higher and
              safer terrain. By faith, PiaMont found itself on a hill, a
              decision that was later understood as a divine providence. It was
              then that the providence of nature touched the essence of PiaMont
              more deeply, reinforcing the idea that nature's guidance and
              resilience are fundamental in shaping a brighter future for every
              PiaMont student.
            </p>
          </div>
        </div>
      </div>

      <div className="about-us-container">
        <p className="about-us-section-title">Piamont History</p>
        <div className="about-u-header-section">
          <div className="about-us-header-text">
            <p>
              The story of PiaMont and what it stands for is a testament to a
              dream nurtured by passion, commitment, and resilience—a foundation
              that has withstood the test of time. In the late 1970s, Drs.
              Ernestina Averilla and Dr. Anicia Habitan, co-founders of the
              School of the Infant Jesus, saw the potential of offering
              preschool education. Utilizing the basement of Dr. Averilla's
              residence, they launched a school that quickly filled with eager
              students. However, due to their subsequent promotions within the
              Department of Education, Culture, and Sports (DECS), the school
              eventually had to close. Despite this setback, the eight-year-old
              Ma. Aveline P. Averilla—now known as Teacher Bey or Doc Bey—was
              inspired by her mother’s dedication. She harbored a dream of
              becoming a teacher and building her own school. But first, she had
              to sharpen her skills and gain knowledge. Ma. Aveline pursued her
              education and earned a B.S. in Education, Major in Natural Science
              at St. Scholastica’s College in Manila in 1987. She began her
              teaching journey at St. Agnes Academy in Legazpi City, where she
              spent three years giving back to her high school alma mater while
              receiving scholarships from the St. Scholastica’s College Research
              and Development Foundation and the International College Women
              Association. Her passion for teaching continued to grow during her
              time at La Salle Ayala Zobel in Alabang, where she earned the
              title of Most Creative Teacher of the Year, even as a first-year
              teacher.
            </p>
          </div>
        </div>
      </div>

      <div className="about-us-container">
        <p className="about-us-section-title">Mission and Vision</p>
        <div className="about-u-header-section mission-vission-container">
          <div className="mission-vision-card">
            <img
              src={require("../../assets/images/mission.png")}
              width={"120px"}
              height={"120px"}
              alt="Mission"
              className="mission-and-vision-image"
            />
            <p className="mission-vision-title">Our Mission</p>
            <p className="mission-vision-details">
              In pursuit of 21st Century lifelong learning and cognizant of the
              uniqueness of every child, their giftedness, and multiple
              intelligences, PiaMont Peñafrancia Science Oriented School
              Foundation, Inc. commits to provide holistic formation that
              adheres to their empowerment through competent, dynamic, and
              innovative curriculum development systems and processes attuned to
              the future and other precognition of circumstances of the time.
              PiaMont strives to continually build alliances and close
              collaboration with various stakeholders in promotion of timeless
              Christian values integral to developing habits of mind, happy
              hearts, and hardworking hands that will enable them to become
              caring, effective, and responsible citizens of our country,
              ultimately pleasing the Holiness of Our Great Creator.
            </p>
          </div>

          <div className="mission-vision-card vision-card">
            <img
              src={require("../../assets/images/vision.png")}
              width={"120px"}
              height={"120px"}
              className="mission-and-vision-image"
              alt="Vision"
            />
            <p className="mission-vision-title">Our Vision</p>
            <p className="mission-vision-details">
              Piamont envisions itself to be a leading institution with its
              ultimate goal of multiplying holistically developed learners that
              are of service to God, humanity, and the environment.
            </p>
          </div>
        </div>
      </div>

      <div className="about-us-container" style={{ marginBottom: "100px" }}>
        <p className="about-us-section-title">Board of Trustees</p>
        <div className="about-u-header-section">
          <div className="about-us-header-text">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card
                imageUrl={
                  "https://drive.google.com/thumbnail?id=1BGCz4bHGIL_zL1x-CEo27RHttRJT83yF"
                }
                name={"Maria Aveline P. Averilla, Ph.D."}
                position={"Founder/Chairman"}
                details={
                  "Dr. Maria Aveline P. Averilla, Founder and Chairman of the Board, is a distinguished educator with a Ph.D. in Educational Psychology. Her unwavering leadership, strategic vision, and commitment to academic excellence have been pivotal in shaping the institution's success, ensuring a strong foundation for future generations."
                }
              />
            </div>

            <div className="bord-of-trustees-members">
              <Card
                imageUrl={
                  "https://drive.google.com/thumbnail?id=1LLpVkzS99Pxj_q4A1uTbqNr6Ve86Psn3"
                }
                name={"Jou Sung A. Jung"}
                position={"Corporate Treasurer"}
                child={true}
                details={
                  "Mr. Jou Sung A. Jung, serving as the Corporate Treasurer, brings invaluable financial expertise and strategic insight to the Board. As a graduate of Information Technology from Bicol University, Legaspi City, he combines technical acumen with financial knowledge. His commitment to fiscal responsibility and sustainable growth ensures the institution's stability and continued progress, while safeguarding the interests of all stakeholders."
                }
              />
              <Card
                imageUrl={
                  "https://drive.google.com/thumbnail?id=1E0W2wgz9w5GbeLp3bhozuVg91EfrKI2Z"
                }
                name={"Atty. Joseph L. Bartolata"}
                position={"Corporate Secretary"}
                child={true}
                details={
                  "Atty. Joseph L. Bartolata, the Corporate Secretary, plays a crucial role in the governance and integrity of the institution. As the current Dean of the College of Law at Bicol University, Legaspi City, he brings unparalleled legal expertise and leadership. His commitment to transparency, compliance, and accountability upholds the highest ethical standards, ensuring the Board’s operations remain transparent, compliant, and effective."
                }
              />
              <Card
                imageUrl={
                  "https://drive.google.com/thumbnail?id=1GS94j_I7mI3oDg-4i2SzGNpRSKPYhYMf"
                }
                name={"Jeanoel G. Endaya, FSC"}
                position={"Member"}
                child={true}
                details={
                  "Br. Jeanoel G. Endaya, FSC, a dedicated member of the Board, brings deep experience and commitment to advancing the institution’s mission. As the Director of the Vocations Ministry Office of the De La Salle Brothers in the Philippines, he embodies the foundational values of the Lasallian tradition. Br. Jeanoel’s leadership infuses the school with a distinct Lasallian spiritual touch, fostering a culture of faith, service, and educational excellence while prioritizing compassion, community, and the holistic development of every student."
                }
              />
              <Card
                imageUrl={
                  "https://drive.google.com/thumbnail?id=15ZeQJEa--iDr_qd_lPxQeIakBh6V6h8t"
                }
                name={"Amelia A. Dorosan, Ph.D."}
                position={"Member"}
                child={true}
                details={
                  "Dr. Amelia A. Dorosan, Ph.D., a respected and insightful member of the Board, brings her extensive expertise in education and leadership. As a retired Vice President for Academic Affairs at Bicol University, Legaspi City, she continues to support the institution’s academic initiatives, strategic planning, and commitment to holistic development. Dr. Dorosan’s guidance ensures that all endeavors align with the institution's pursuit of academic excellence and purpose-driven educational growth."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

AboutUs.propTypes = {
  window: PropTypes.func,
};

export default AboutUs;
