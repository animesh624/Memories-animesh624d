import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
const LandingPage = () => {
  const history = useHistory();
  console.log("2...");
  useEffect(() => {
    console.log("1...");
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history]);
  return (
    <div className="main">
      {console.log("3...")}
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Memories-App</h1>
              <p className="subtitle">One safe place for all your memories</p>
              <div className="buttonContainer">
                <a href="/login">
                  <Button size="lg" className="landingbutton">
                    Login
                  </Button>
                </a>
                <a href="/register">
                  <Button
                    size="lg"
                    className="landingbutton"
                    variant="outline-primary"
                  >
                    Sign Up
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
