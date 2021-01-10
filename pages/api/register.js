import admin from "firebase-admin";

const serviceAccount = require("../../secrets.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://technovanza-3e853.firebaseio.com",
  });
}

const firestore = admin.firestore();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const {
        uid,
        phone,
        participants,
        solo,
        event,
        teamName,
        numOfTeam,
      } = req.body;

      // Primary User Validation
      if (uid === "") {
        throw "TechnoID Empty";
      } else {
        const user1Ref = firestore.collection("users").doc(uid);
        const doc = await user1Ref.get();
        if (!doc.exists) {
          throw "TechnoID Invalid";
        } else {
          if (phone !== "" || phone !== doc.data().phone) {
            await user1Ref.set({ phone: phone }, { merge: true });
          }
        }
      }

      const eventRef = firestore
        .collection(`events/${event}/Registration`)
        .doc(uid);
      const eventRegDoc = await eventRef.get();

      if (eventRegDoc.exists) {
        throw "Already Registered";
      }

      // Partner Validation
      const eventSnapshot = await firestore
        .collection(`events/${event}/Registration`)
        .get();

      eventSnapshot.docs.map((doc) => {
        doc.data().participants.forEach((participant) => {
          if (participant !== "") {
            if (uid === participant) {
              throw "Already registered as a partner";
            }
            if (!solo) {
              participants.map((p) => {
                if (p.pid !== "") {
                  if (p.pid === participant) {
                    throw "Partner Already Registered";
                  }
                } else {
                  return;
                }
              });
            }
          }
        });
      });

      if (solo) {
        await eventRef.update(
          {
            uid: uid,
            teamName: teamName,
            solo: solo,
          },
          { merge: true }
        );
      } else {
        const partArr = [];

        participants.forEach((element) => {
          if (element.pid !== "") {
            if (element.pid !== uid) {
              partArr.push(element.pid);
            } else {
              throw "User itself cannot be Teammate";
            }
          }
        });

        // Check if participants user exist
        const partRef = firestore.collection("users");

        if (numOfTeam >= 1) {
          const doc = await partRef.doc(participants[0].pid).get();
          if (!doc.exists) {
            throw "Teammate TechnoID Invalid: " + participants[0].pid;
          } else {
            if (
              participants[0].pnum !== "" ||
              participants[0].pnum !== doc.data().phone
            ) {
              await partRef
                .doc(participants[0].pid)
                .set({ phone: participants[0].pnum }, { merge: true });
            }
          }
        }

        if (numOfTeam >= 2) {
          const doc = await partRef.doc(participants[1].pid).get();
          if (!doc.exists) {
            throw "Teammate TechnoID Invalid: " + participants[1].pid;
          } else {
            if (
              participants[1].pnum !== "" ||
              participants[1].pnum !== doc.data().phone
            ) {
              await partRef
                .doc(participants[1].pid)
                .set({ phone: participants[1].pnum }, { merge: true });
            }
          }
        }

        if (numOfTeam >= 3) {
          const doc = await partRef.doc(participants[2].pid).get();
          if (!doc.exists) {
            throw "Teammate TechnoID Invalid: " + participants[2].pid;
          } else {
            if (
              participants[2].pnum !== "" ||
              participants[2].pnum !== doc.data().phone
            ) {
              await partRef
                .doc(participants[2].pid)
                .set({ phone: participants[3].pnum }, { merge: true });
            }
          }
        }

        if (numOfTeam >= 4) {
          const doc = await partRef.doc(participants[3].pid).get();
          if (!doc.exists) {
            throw "Teammate TechnoID Invalid: " + participants[3].pid;
          } else {
            if (
              participants[3].pnum !== "" ||
              participants[3].pnum !== doc.data().phone
            ) {
              await partRef
                .doc(participants[3].pid)
                .set({ phone: participants[4].pnum }, { merge: true });
            }
          }
        }

        if (numOfTeam >= 5) {
          const doc = await partRef.doc(participants[4].pid).get();
          if (!doc.exists) {
            throw "Teammate TechnoID Invalid: " + participants[4].pid;
          } else {
            if (
              participants[4].pnum !== "" ||
              participants[4].pnum !== doc.data().phone
            ) {
              await partRef
                .doc(participants[4].pid)
                .set({ phone: phone }, { merge: true });
            }
          }
        }

        await eventRef.update(
          {
            uid: uid,
            teamName: teamName,
            solo: solo,
            participants: partArr,
          },
          { merge: true }
        );
      }

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify({ message: "Registration Successful" }));
    } catch (error) {
      console.log(error);
      res.statusCode = 208;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify({ error: error }));
    }
  } else {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify({ error: "Bad Request" }));
  }
}
