import admin from "firebase-admin";

const firestore = admin.firestore();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { uid1, uid2, solo, event } = req.body;
      const eventRef = firestore.collection("events").doc(event);

      if (uid1 === "") {
        throw "TechnoID Empty";
      }

      if (!solo) {
        if (uid2 === "") {
          throw "Partner TechnoID Empty";
        } else {
          const user1Ref = firestore.collection("users").doc(uid1);
          const user2Ref = firestore.collection("users").doc(uid2);
          const doc = await user2Ref.get();

          if (!doc.exists) {
            throw "Partner TechnoID Invalid";
          } else {
            await eventRef.update({
              registration: admin.firestore.FieldValue.arrayUnion({
                uid1: user1Ref,
                uid2: user2Ref,
              }),
            });

            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            return res.end(JSON.stringify({ message: "Success" }));
          }
        }
      } else {
        const user1Ref = firestore.collection("users").doc(uid1);

        await eventRef.update({
          registration: admin.firestore.FieldValue.arrayUnion({
            uid1: user1Ref,
          }),
        });

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify({ message: "Success" }));
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
