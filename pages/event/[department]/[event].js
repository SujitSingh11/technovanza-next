import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";

import Styles from "../../../styles/EventDesc.module.css";
import {
  Grid,
  Container,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@material-ui/core";

import Header from "../../../components/header";
import Footer from "../../../components/footer";
import ScrollUp from "../../../components/scrollUp";

import { useAuthState } from "react-firebase-hooks/auth";
import firebaseClient from "../../../firebaseClient";

const auth = firebaseClient.auth();

const api = axios.create({
  baseURL: `${process.env.domain}/api/`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const EventDesc = ({ res }) => {
  const [user] = useAuthState(auth);
  const [event, setEvent] = useState({});
  const [teamName, setTeamName] = useState("");
  const [phone, setPhone] = useState("");
  const [participation, setParticipation] = useState("individual");
  const [numOfTeam, setNumOfTeam] = useState(1);
  const [pid1, setPid1] = useState("");
  const [pid2, setPid2] = useState("");
  const [pid3, setPid3] = useState("");
  const [pid4, setPid4] = useState("");
  const [pid5, setPid5] = useState("");
  const [pnum1, setPnum1] = useState("");
  const [pnum2, setPnum2] = useState("");
  const [pnum3, setPnum3] = useState("");
  const [pnum4, setPnum4] = useState("");
  const [pnum5, setPnum5] = useState("");
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    res.map((data) => {
      if (data.Department !== router.query.department) {
        return;
      }
      data.Events.map((e) => {
        if (e.Event !== router.query.event) {
          return;
        }
        setEvent(e);
        setLoading(false);
      });
    });
  }, [res]);

  const handleTeamName = (e) => {
    setTeamName(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value > 9999999999 ? phone : e.target.value);
  };
  const handleParticipation = (e) => {
    setParticipation(e.target.value);
  };
  const handleNumOfTeam = (e) => {
    setNumOfTeam(e.target.value);
  };

  const handleClear = () => {
    setPhone("");
    setPartnerTechnoIDs([]);
    setPartPhone([]);
  };

  const handleRegistration = async () => {
    const data = {
      event: event.Event,
      uid: user.uid,
      teamName,
      solo: participation == "individual" ? true : false,
      phone,
      numOfTeam,
      participants: [
        { pid: pid1, pnum: pnum1 },
        { pid: pid2, pnum: pnum2 },
        { pid: pid3, pnum: pnum3 },
        { pid: pid4, pnum: pnum4 },
        { pid: pid5, pnum: pnum5 },
      ],
    };

    try {
      const res = await api.post("/register", data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(user ? true : false);

  return (
    <>
      <Head>
        <title>Technovanza | {router.query.event}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ScrollUp />
      <main>
        <Container maxWidth="md" className={Styles.headerRoot}>
          <Grid container>
            <Grid item lg={6} className={Styles.headerImgRoot}>
              <img alt="event" src={event.LogoI} className={Styles.headerImg} />
            </Grid>
            <Grid item lg={6}>
              <Container maxWidth="xs" className={Styles.headerMetaRoot}>
                <div>
                  <h1 className={Styles.headerTitle}>{event.Event}</h1>
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
              <h1 className={Styles.eventIntroHeader}>{event.Event}</h1>
            </div>
            <div>
              <p className={Styles.eventIntro}>{event.Description}</p>
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
                    <Button
                      href="/events/problem/E-Portfolio2020.pdf"
                      className={Styles.problemButton}
                      download
                    >
                      Download
                    </Button>
                  </div>
                </Container>
              </Grid>
              <Grid lg={6} xs={12} className={Styles.contact} item>
                <Container maxWidth="xs">
                  <div className={Styles.marginBottom}>
                    <h1 className={Styles.headerTitleProblem}>Contact</h1>
                  </div>
                  <div>
                    {loading ? (
                      <></>
                    ) : (
                      event.Contact.map((contact, index) => {
                        return (
                          <p key={index} className={Styles.contactText}>
                            {contact.Name} : +91-{contact.Number}
                          </p>
                        );
                      })
                    )}
                  </div>
                </Container>
              </Grid>
            </Grid>
          </div>
        </section>
        <section className={Styles.regSection}>
          <Container className={Styles.regCont} maxWidth="md">
            <form className={Styles.regRoot}>
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
                  <label htmlFor="teamname" className={Styles.regItem}>
                    Team Name :
                  </label>
                  <input
                    type="text"
                    id="teamname"
                    name="teamname"
                    className={Styles.regInputTeam}
                    onChange={(e) => handleTeamName(e)}
                    value={teamName}
                  />
                </div>
                <div className={Styles.reg}>
                  <label htmlFor="contact" className={Styles.regItem}>
                    Contact Number :
                  </label>
                  <input
                    type="number"
                    id="contact"
                    name="contact"
                    className={Styles.regInput}
                    onChange={(e) => handlePhone(e)}
                    value={phone}
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
                        className={Styles.regRadioSublabel}
                      />
                      <FormControlLabel
                        value="partner"
                        control={<Radio className={Styles.regRadioRadio} />}
                        label="With Teammates"
                        className={Styles.regRadioSublabel}
                      />
                    </RadioGroup>
                  </FormControl>
                </div>

                {participation === "partner" ? (
                  <>
                    <div className={Styles.reg}>
                      <label htmlFor="contact" className={Styles.regItem}>
                        Number of teammates :
                      </label>
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

                    {numOfTeam >= 1 ? (
                      <>
                        <div className={Styles.regTeamTitleDiv}>
                          <p className={Styles.regTeamLabel}>Teammate 1</p>
                        </div>
                        <div className={Styles.reg}>
                          <label htmlFor="technoid1" className={Styles.regItem}>
                            Techno ID :
                          </label>
                          <input
                            type="text"
                            id="technoid1"
                            name="technoid1"
                            onChange={(e) => {
                              setPid1(e.target.value);
                            }}
                            className={Styles.regInputPT}
                            value={pid1}
                          />
                        </div>
                        <div className={Styles.reg}>
                          <label htmlFor="pcontact1" className={Styles.regItem}>
                            Contact Number :
                          </label>
                          <input
                            id="pcontact1"
                            name="pcontact1"
                            className={Styles.regInputPN}
                            onChange={(e) =>
                              setPnum1(
                                e.target.value > 9999999999
                                  ? pnum1
                                  : e.target.value
                              )
                            }
                            value={pnum1}
                            type="number"
                          />
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    {numOfTeam >= 2 ? (
                      <>
                        <div className={Styles.regTeamTitleDiv}>
                          <p className={Styles.regTeamLabel}>Teammate 2</p>
                        </div>
                        <div className={Styles.reg}>
                          <label htmlFor="technoid2" className={Styles.regItem}>
                            Techno ID :
                          </label>
                          <input
                            type="text"
                            id="technoid2"
                            name="technoid2"
                            onChange={(e) => {
                              setPid2(e.target.value);
                            }}
                            className={Styles.regInputPT}
                            value={pid2}
                          />
                        </div>
                        <div className={Styles.reg}>
                          <label htmlFor="pcontact2" className={Styles.regItem}>
                            Contact Number :
                          </label>
                          <input
                            id="pcontact2"
                            name="pcontact2"
                            className={Styles.regInputPN}
                            onChange={(e) =>
                              setPnum2(
                                e.target.value > 9999999999
                                  ? pnum2
                                  : e.target.value
                              )
                            }
                            value={pnum2}
                            type="number"
                          />
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    {numOfTeam >= 3 ? (
                      <>
                        <div className={Styles.regTeamTitleDiv}>
                          <p className={Styles.regTeamLabel}>Teammate 3</p>
                        </div>
                        <div className={Styles.reg}>
                          <label htmlFor="technoid3" className={Styles.regItem}>
                            Techno ID :
                          </label>
                          <input
                            type="text"
                            id="technoid3"
                            name="technoid3"
                            onChange={(e) => {
                              setPid3(e.target.value);
                            }}
                            className={Styles.regInputPT}
                            value={pid3}
                          />
                        </div>
                        <div className={Styles.reg}>
                          <label htmlFor="pcontact3" className={Styles.regItem}>
                            Contact Number :
                          </label>
                          <input
                            id="pcontact3"
                            name="pcontact3"
                            className={Styles.regInputPN}
                            onChange={(e) =>
                              setPnum3(
                                e.target.value > 9999999999
                                  ? pnum3
                                  : e.target.value
                              )
                            }
                            value={pnum3}
                            type="number"
                          />
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    {numOfTeam >= 4 ? (
                      <>
                        <div className={Styles.regTeamTitleDiv}>
                          <p className={Styles.regTeamLabel}>Teammate 4</p>
                        </div>
                        <div className={Styles.reg}>
                          <label htmlFor="technoid4" className={Styles.regItem}>
                            Techno ID :
                          </label>
                          <input
                            type="text"
                            id="technoid4"
                            name="technoid4"
                            onChange={(e) => {
                              setPid4(e.target.value);
                            }}
                            className={Styles.regInputPT}
                            value={pid4}
                          />
                        </div>
                        <div className={Styles.reg}>
                          <label htmlFor="pcontact4" className={Styles.regItem}>
                            Contact Number :
                          </label>
                          <input
                            id="pcontact4"
                            name="pcontact4"
                            className={Styles.regInputPN}
                            onChange={(e) =>
                              setPnum4(
                                e.target.value > 9999999999
                                  ? pnum4
                                  : e.target.value
                              )
                            }
                            value={pnum4}
                            type="number"
                          />
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    {numOfTeam >= 5 ? (
                      <>
                        <div className={Styles.regTeamTitleDiv}>
                          <p className={Styles.regTeamLabel}>Teammate 5</p>
                        </div>
                        <div className={Styles.reg}>
                          <label htmlFor="technoid5" className={Styles.regItem}>
                            Techno ID :
                          </label>
                          <input
                            type="text"
                            id="technoid5"
                            name="technoid5"
                            onChange={(e) => {
                              setPid5(e.target.value);
                            }}
                            className={Styles.regInputPT}
                            value={pid5}
                          />
                        </div>
                        <div className={Styles.reg}>
                          <label htmlFor="pcontact5" className={Styles.regItem}>
                            Contact Number :
                          </label>
                          <input
                            id="pcontact5"
                            name="pcontact5"
                            className={Styles.regInputPN}
                            onChange={(e) =>
                              setPnum5(
                                e.target.value > 9999999999
                                  ? pnum5
                                  : e.target.value
                              )
                            }
                            value={pnum5}
                            type="number"
                          />
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
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
            </form>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default EventDesc;

EventDesc.getInitialProps = async (ctx) => {
  const eventData = fetch(`${process.env.domain}/data/eventData.json`);
  const res = await (await eventData).json();
  return {
    res,
  };
};
