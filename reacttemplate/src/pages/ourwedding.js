import React, { useContext } from "react";
import { OurWeddingContext } from "../context/ourweddingservice";
import {
  Container,
  Row,
  Col,
  Image,
  Tabs,
  Tab,
  CardColumns
} from "react-bootstrap";
import RSVP from "../components/rsvp";
import Reply from "../components/reply";
import RsvpToast from "../components/rsvpToast";
import style from "./ourwedding.module.css";
import WedPhoto from "../assets/wed1.jfif";
import WedLocation from "../assets/hsw1.png";

function OurWedding() {
  const weddingContext = useContext(OurWeddingContext);

  return (
    <div className={style.pageWrapper}>
      {/* Toast */}
      <RsvpToast
        name={weddingContext.rsvpd[weddingContext.rsvpd.length - 1].name}
        show={weddingContext.isShowToast}
        onClose={() => weddingContext.changeShowToast(false)}
        dissmissable
      />
      {/* Toast */}
      <Container fluid>
        <Row>
          <Col>{/* empty for now */}</Col>
        </Row>
        <Row>
          <Col>
            <header>
              <br />
              <div className={style.wedTitle}>
                <h1>
                  Nick<span className={style.letterAccent}>&</span>Tomo
                </h1>
                <h5>Wedding Invite</h5>
              </div>
              <img className={style.jumboImage} src={WedPhoto} alt="Us" />
            </header>
          </Col>
        </Row>
        <Row>
          <Col>
            <section>
              <div className={style.mainTabs}>
                <Tabs
                  activeKey={weddingContext.activeTab}
                  onSelect={tab => weddingContext.changeActiveTab(tab)}>
                  <Tab eventKey="welcome" title="Welcome">
                    <div className={style.leadIn}>
                      <h3>Yes, we're getting married again!</h3>
                    </div>
                    <div className={style.carryOn}>
                      <p>
                        Hi everyone, this is your <u>official invitation</u> to
                        our 2020 wedding.
                      </p>
                      <p>
                        Please have a read through, and then let us know if you
                        are attending by RSVP-ing.
                      </p>
                    </div>
                    <hr />
                    <div>
                      <code>RVSP'd grid here...</code>
                      <CardColumns>
                        {weddingContext.rsvpd.map((value, index) => (
                          <Reply
                            key={index}
                            name={value.name}
                            phone={value.phone}
                            message={value.message}
                            diet={value.diet}
                          />
                        ))}
                      </CardColumns>
                    </div>
                  </Tab>
                  <Tab eventKey="ourStory" title="Our Story">
                    <h3 className={style.leadIn}>What do you know about us?</h3>
                    <div className={style.carryOn}>
                      <p>Well...</p>
                    </div>
                  </Tab>
                  <Tab eventKey="eventDetails" title="Event Details">
                    <div className={style.leadIn}>
                      <h3>Howard Smith Wharves</h3>
                    </div>
                    <div className={style.carryOn}>
                      <p>Facility: the Greenhouse</p>
                      <p>When: 21st September, 2020 @ 3pm</p>
                      <p>Where: 5 Boundary St, Brisbane City QLD 4000</p>
                      <p>Contacts: Nick (0467 235 640) & Tomo (0412 940 569)</p>
                    </div>
                    <Image
                      src={WedLocation}
                      alt="Howard Smith Wharves"
                      thumbnail
                    />
                    <p>
                      Further Info:{" "}
                      <a href="https://howardsmithwharves.com/">
                        howardsmithsharves.com
                      </a>
                    </p>
                  </Tab>
                  <Tab eventKey="rsvp" title="RSVP">
                    <div className={style.leadIn}>
                      <h3>Can you make it?</h3>
                    </div>
                    <div className={style.carryOn}>
                      <p>Let us know below...</p>
                    </div>
                    <Row>
                      <Col md={{ span: 6, offset: 3 }}>
                        <RSVP />
                      </Col>
                    </Row>
                  </Tab>
                </Tabs>
              </div>
            </section>
          </Col>
        </Row>
        <Row>
          <Col>
            <footer>
              <div className={style.wedFooter}></div>
            </footer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OurWedding;
