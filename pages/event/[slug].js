import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";

import Styles from "../../styles/EventDesc.module.css";
import {
  Grid,
  Container,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@material-ui/core";

import Header from "../../components/header";
import Footer from "../../components/footer";
import ScrollUp from "../../components/scrollUp";

import { useAuthState } from "react-firebase-hooks/auth";
import firebaseClient from "../../firebaseClient";

const auth = firebaseClient.auth();

const api = axios.create({
  baseURL: "http://localhost:3000/api/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const EventDesc = () => {
  const [user] = useAuthState(auth);
  const [phone, setPhone] = useState("");
  const [participation, setParticipation] = useState("individual");
  const [numOfTeam, setNumOfTeam] = useState("1");
  const [technoID, setTechnoID] = useState("");
  const [partPhone, setPartPhone] = useState("");

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleParticipation = (event) => {
    setParticipation(event.target.value);
  };
  const handleNumOfTeam = (event) => {
    setNumOfTeam(event.target.value);
  };
  const handleTechnoID = (event) => {
    setTechnoID(event.target.value);
  };
  const handlePartPhone = (event) => {
    setPartPhone(event.target.value);
  };

  const handleClear = () => {
    setPhone("");
    setTechnoID("");
    setPartPhone("");
  };

  const handleRegistration = async (data) => {
    try {
      const res = await api.post("/register", data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const TeamMates = () => {
    let partners = [];
    for (let i = 1; i <= numOfTeam; i++) {
      partners.push(
        <div key={i}>
          <div className={Styles.regTeamTitleDiv}>
            <p className={Styles.regTeamTitle}>Partner {i}</p>
          </div>
          <div className={Styles.reg}>
            <lable htmlFor="technoid" className={Styles.regItem}>
              TechnoID :
            </lable>
            <input
              type="text"
              id="technoid"
              name="technoid"
              className={Styles.regInputPT}
            />
          </div>
          <div className={Styles.reg}>
            <lable htmlFor="pcontact" className={Styles.regItem}>
              Number :
            </lable>
            <input
              type="text"
              id="pcontact"
              name="pcontact"
              className={Styles.regInputPN}
              onChange={() => handlePartPhone(e)}
              value={partPhone}
            />
          </div>
        </div>
      );
    }
    return partners;
  };

  return (
    <>
      <Head>
        <title>Technovanza | Ultimate Coder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ScrollUp />
      <main>
        <Container maxWidth="md" className={Styles.headerRoot}>
          <Grid container>
            <Grid item lg={6} className={Styles.headerImgRoot}>
              <img
                alt="event"
                src="/assets/UltimateCoder19.png"
                className={Styles.headerImg}
              />
            </Grid>
            <Grid item lg={6}>
              <Container maxWidth="xs" className={Styles.headerMetaRoot}>
                <div>
                  <h1 className={Styles.headerTitle}>Ultimate Coder</h1>
                </div>
                <div className={Styles.headerMeta}>
                  <img
                    src="https://img.icons8.com/ultraviolet/80/000000/trophy.png"
                    width="60"
                  />
                  <span className={Styles.headerMetaDesc}>&#x20B9; 5,000</span>
                </div>
                <div className={Styles.headerMeta}>
                  <img
                    src="https://img.icons8.com/fluent/96/000000/planner.png"
                    width="60"
                  />
                  <span className={Styles.headerMetaDesc}>2020-12-29</span>
                </div>
                <div className={Styles.headerMeta}>
                  <img
                    src="https://img.icons8.com/cotton/64/000000/worldwide-location--v2.png"
                    width="60"
                  />
                  <span className={Styles.headerMetaDesc}>Online</span>
                </div>
                <Button className={Styles.registerButton}>Register</Button>
              </Container>
            </Grid>
          </Grid>
        </Container>
        <section className={Styles.eventIntroRoot}>
          <Container maxWidth="lg">
            <div className={Styles.eventIntroHeaderRoot}>
              <h1 className={Styles.eventIntroHeader}>Ultimate Coder</h1>
            </div>
            <div>
              <p className={Styles.eventIntro}>
                Ultimate Coder is the biggest and grandest I-Code event that is
                help by Technovanza. It's not tough to become a coder, being an
                ultimate coder, on the other hand, is a different story. You
                will have the option of using languages like C, C++, Java and
                Python, but will you know how? We test not only your coding
                skills, but how you cope with the pressure of the challenges and
                tasks.
              </p>
            </div>
          </Container>
        </section>
        <section>
          <div className={Styles.problemCont}>
            <Grid
              justify="space-between"
              container
              className={Styles.problemRoot}
            >
              <Grid lg={6} xs={12} className={Styles.problem} item>
                <Container maxWidth="xs">
                  <div className={Styles.marginBottom}>
                    <h1 className={Styles.headerTitleProblem}>
                      Problem Statement
                    </h1>
                  </div>
                  <div>
                    <Button className={Styles.problemButton}>Download</Button>
                  </div>
                </Container>
              </Grid>
              <Grid lg={6} xs={12} className={Styles.contact} item>
                <div className={Styles.marginBottom}>
                  <h1 className={Styles.headerTitleProblem}>Contact</h1>
                </div>
                <div>
                  <p className={Styles.contactText}>
                    Event Manager : +919999999999
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>
        </section>
        <section className={Styles.regSection}>
          <Container className={Styles.regCont} maxWidth="md">
            <div className={Styles.regRoot}>
              <div className={Styles.regHead}>
                <div className={Styles.regHeadItems}>
                  <div className={Styles.regCircle} />
                  <div className={Styles.regCircle} />
                  <div className={Styles.regCircle} />
                </div>
              </div>
              <div className={Styles.regBody}>
                <h1 className={Styles.regTitle}>REGISTRATION</h1>
                <div className={Styles.reg}>
                  <lable htmlFor="teamname" className={Styles.regItem}>
                    Team Name :
                  </lable>
                  <input
                    type="text"
                    id="teamname"
                    name="teamname"
                    className={Styles.regInputTeam}
                  />
                </div>
                <div className={Styles.reg}>
                  <lable htmlFor="contact" className={Styles.regItem}>
                    Contact Number :
                  </lable>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    className={Styles.regInput}
                  />
                </div>
                <div className={Styles.reg}>
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="participation"
                      name="participation"
                      value={participation}
                      onChange={handleParticipation}
                      className={Styles.regRadioRoot}
                    >
                      <FormControlLabel
                        value="individual"
                        control={<Radio className={Styles.regRadioRadio} />}
                        label="Individual"
                        className={Styles.regRadioSubLable}
                      />
                      <FormControlLabel
                        value="partner"
                        control={<Radio className={Styles.regRadioRadio} />}
                        label="With Partners"
                        className={Styles.regRadioSubLable}
                      />
                    </RadioGroup>
                  </FormControl>
                </div>

                {participation === "partner" ? (
                  <>
                    <div className={Styles.reg}>
                      <lable htmlFor="contact" className={Styles.regItem}>
                        Number of teammates :
                      </lable>
                      <select
                        className={Styles.regTeamSelect}
                        name="numTeam"
                        id="numTeam"
                        value={numOfTeam}
                        onChange={handleNumOfTeam}
                      >
                        <option
                          className={Styles.regTeamSelectOption}
                          value="1"
                        >
                          1
                        </option>
                        <option
                          className={Styles.regTeamSelectOption}
                          value="2"
                        >
                          2
                        </option>
                        <option
                          className={Styles.regTeamSelectOption}
                          value="3"
                        >
                          3
                        </option>
                        <option
                          className={Styles.regTeamSelectOption}
                          value="4"
                        >
                          4
                        </option>
                        <option
                          className={Styles.regTeamSelectOption}
                          value="5"
                        >
                          5
                        </option>
                      </select>
                    </div>
                    <TeamMates />
                  </>
                ) : (
                  <></>
                )}

                <div className={Styles.regButton}>
                  <Button
                    onClick={() => handleRegistration({})}
                    className={Styles.registerButton2}
                  >
                    Register
                  </Button>
                  <Button
                    onClick={handleClear}
                    className={Styles.registerButton2}
                  >
                    Clear
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default EventDesc;
