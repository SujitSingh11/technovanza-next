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
      const { uid1, uid2, solo, event, team } = req.body;
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

      if (!solo) {
        if (uid2 === "") {
          throw "Partner TechnoID Empty";
        } else {
          const user2Ref = firestore.collection("users").doc(uid2);
          const doc = await user2Ref.get();

          if (!doc.exists) {
            throw "Partner TechnoID Invalid";
          } else {
            // Validation
            eventDoc.registration.map((data) => {
              if (data.hasOwnProperty("uid1") && data.uid1 === uid1) {
                throw "Already Registered";
              } else if (data.hasOwnProperty("uid2") && data.uid2 === uid1) {
                throw "Already registered with TechnoID: " + data.uid2;
              } else if (data.hasOwnProperty("uid1") && data.uid1 === uid2) {
                throw "Partner Already Registered";
              } else if (data.hasOwnProperty("uid2") && data.uid2 === uid2) {
                throw "Partner Already registered with TechnoID: " + data.uid2;
              }
            });

            await eventRef.update({
              registration: admin.firestore.FieldValue.arrayUnion({
                uid1: uid1,
                uid2: uid2,
                solo: solo,
                team: team,
              }),
            });

            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            return res.end(
              JSON.stringify({ message: "Registration Successful" })
            );
          }
        }
      } else {
        // Validation
        eventDoc.registration.map((data) => {
          if (data.hasOwnProperty("uid1") && data.uid1 === uid1) {
            throw "Already Registered";
          } else if (data.hasOwnProperty("uid2") && data.uid2 === uid1) {
            throw "Already registered with TechnoID: " + data.uid2;
          }
        });

        await eventRef.update({
          registration: admin.firestore.FieldValue.arrayUnion({
            uid1: uid1,
            solo: solo,
            team: team,
          }),
        });

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify({ message: "Registration Successful" }));
      }
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
