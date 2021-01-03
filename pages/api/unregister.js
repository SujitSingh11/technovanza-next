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
      const { uid1, event } = req.body;
      const eventRef = firestore.collection("events").doc(event);
      const eventDoc = await (await eventRef.get()).data();

      if (uid1 === "") {
        throw "TechnoID Empty";
      } else {
        const user1Ref = firestore.collection("users").doc(uid1);
        const doc = await user1Ref.get();
        if (!doc.exists) {
          throw "TechnoID Invalid";
        }
      }

      let userReg = {};

      eventDoc.registration.map((data) => {
        if (data.solo) {
          if (data.hasOwnProperty("uid1") && data.uid1 === uid1) {
            userReg["uid1"] = data.uid1;
            userReg["solo"] = data.solo;
            userReg["team"] = data.team;
          }
        } else {
          if (
            data.hasOwnProperty("uid1") &&
            data.hasOwnProperty("uid2") &&
            data.uid2 !== "" &&
            data.uid1 === uid1
          ) {
            userReg["uid1"] = data.uid1;
            userReg["uid2"] = data.uid2;
            userReg["solo"] = data.solo;
            userReg["team"] = data.team;
          }
        }
      });

      if (
        userReg.hasOwnProperty("uid1") &&
        userReg.hasOwnProperty("team") &&
        userReg.hasOwnProperty("solo")
      ) {
        if (userReg.solo) {
          await eventRef.update({
            registration: admin.firestore.FieldValue.arrayRemove({
              uid1: userReg.uid1,
              solo: userReg.solo,
              team: userReg.team,
            }),
          });
        } else {
          await eventRef.update({
            registration: admin.firestore.FieldValue.arrayRemove({
              uid1: userReg.uid1,
              uid2: userReg.uid2,
              solo: userReg.solo,
              team: userReg.team,
            }),
          });
        }

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        return res.end(
          JSON.stringify({ message: "Unregistered Successfully" })
        );
      } else {
        throw "Registration not found";
      }
    } catch (error) {
      console.log(error);
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify({ error: error }));
    }
  } else {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify({ error: "Bad Request" }));
  }
}
