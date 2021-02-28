import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Styles from "../styles/Login.module.css";

import { Button } from "@material-ui/core";

import Header from "../components/header";
import Footer from "../components/footer";

import { useAuthState } from "react-firebase-hooks/auth";
import firebaseClient from "../firebaseClient";

const auth = firebaseClient.auth();

const Login = () => {
  const [college, setCollege] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("First Year");
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState("");

  const router = useRouter();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  const handleclear = () => {
    setCollege("");
    setCourse("");
    setYear("First Year");
    setGender("Male");
    setAge("");
  };

  const handleReg = async (e) => {
    try {
      e.preventDefault();
      const firestore = firebaseClient.firestore();
      const usersRef = firestore.collection("users").doc(user.uid);
      const data = {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
        college,
        course,
        year,
        gender,
        age,
      };
      await usersRef.set(data, { merge: true });
      router.back();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Technovanza | Login</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"
          defer
        />
      </Head>
      <Header />
      <div className={Styles.root}>
        <div className={Styles.regRoot}>
          <div className={Styles.regHead}>
            <div className={Styles.regHeadItems}>
              <div className={Styles.regCircle} />
              <div className={Styles.regCircle} />
              <div className={Styles.regCircle} />
            </div>
            <form onSubmit={(e) => handleReg(e)} className={Styles.regBody}>
              <h1 className={Styles.regTitle}>Registration</h1>
              <div className={Styles.reg}>
                <label htmlFor="college" className={Styles.regItem}>
                  College Name :
                </label>
                <input
                  type="text"
                  id="college"
                  name="college"
                  className={Styles.regInput}
                  onChange={(e) => setCollege(e.target.value)}
                  value={college}
                  required
                />
              </div>
              <div className={Styles.reg}>
                <label htmlFor="course" className={Styles.regItem}>
                  Course Name :
                </label>
                <input
                  type="text"
                  id="course"
                  name="course"
                  className={Styles.regInputInline}
                  onChange={(e) => setCourse(e.target.value)}
                  value={course}
                  required
                />
              </div>
              <div className={Styles.reg}>
                <label htmlFor="year" className={Styles.regItem}>
                  Year :
                </label>
                <select
                  className={Styles.regTeamSelectYear}
                  name="year"
                  id="year"
                  onChange={(e) => setYear(e.target.value)}
                  value={year}
                >
                  <option
                    className={Styles.regTeamSelectOption}
                    value="First Year"
                  >
                    First Year
                  </option>
                  <option
                    className={Styles.regTeamSelectOption}
                    value="Second Year"
                  >
                    Second Year
                  </option>
                  <option
                    className={Styles.regTeamSelectOption}
                    value="Third Year"
                  >
                    Third Year
                  </option>
                  <option
                    className={Styles.regTeamSelectOption}
                    value="Fourth Year"
                  >
                    Fourth Year
                  </option>
                </select>
              </div>
              <div className={Styles.reg}>
                <label htmlFor="gender" className={Styles.regItem}>
                  Gender :
                </label>
                <select
                  className={Styles.regTeamSelect}
                  name="gender"
                  id="gender"
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}
                >
                  <option className={Styles.regTeamSelectOption} value="Male">
                    Male
                  </option>
                  <option className={Styles.regTeamSelectOption} value="Female">
                    Female
                  </option>
                  <option className={Styles.regTeamSelectOption} value="Other">
                    Other
                  </option>
                </select>
              </div>
              <div className={Styles.reg}>
                <label htmlFor="age" className={Styles.regItem}>
                  Age :
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  className={Styles.regInputInlineAge}
                  onChange={(e) => setAge(e.target.value)}
                  value={age}
                  required
                />
              </div>
              <div className={Styles.regButton}>
                <Button type="submit" className={Styles.registerButton2}>
                  Register
                </Button>
                <Button
                  onClick={handleclear}
                  className={Styles.registerButton2}
                >
                  Clear
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
