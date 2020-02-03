import React, { useContext } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { OurWeddingContext } from "../context/ourweddingservice";
import style from "./ourwedding.module.css";
import RsvpToast from "../components/rsvpToast";
import HeaderContent from "../components/headercontent";
import EventDetailsContent from "../components/eventdetailscontent";
import OurStoryContent from "../components/ourstorycontent";
import WelcomeContent from "../components/welcomecontent";
import RsvpContent from "../components/rsvpcontent";

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
              <HeaderContent />
            </header>
          </Col>
        </Row>
        <Row>
          <Col>
            <section>
              <div className={style.mainTabs}>
                <Tabs
                  activeKey={weddingContext.activeTab}
                  onSelect={eventKey => {
                    weddingContext.changeActiveTab(eventKey);
                  }}>
                  <Tab eventKey="welcome" title="Welcome">
                    <div className={style.tabHeader}>
                      <h3 className={style.leadIn}>
                        Yes, we're getting married!
                      </h3>
                      <p className={style.leadIn}>...again.</p>
                    </div>
                    <hr />
                    <WelcomeContent />
                  </Tab>
                  <Tab eventKey="ourStory" title="Our Story">
                    <div className={style.tabHeader}>
                      <h3 className={style.leadIn}>
                        What do you know about us?
                      </h3>
                      <p className={style.carryOn}>Well...</p>
                    </div>
                    <hr />
                    <OurStoryContent />
                  </Tab>
                  <Tab eventKey="eventDetails" title="Event Details">
                    <div className={style.tabHeader}>
                      <h3 className={style.leadIn}>The Big Day</h3>
                      <p className={style.carryOn}>It's decided!</p>
                    </div>
                    <hr />
                    <EventDetailsContent />
                  </Tab>
                  <Tab eventKey="rsvp" title="RSVP">
                    <div className={style.tabHeader}>
                      <h3 className={style.leadIn}>Can you make it?</h3>
                      <p className={style.carryOn}>Let us know below.</p>
                    </div>
                    <hr />
                    <RsvpContent />
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
