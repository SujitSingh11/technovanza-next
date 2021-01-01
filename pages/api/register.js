import firebaseClient from "../../firebaseClient";

const firestore = firebaseClient.firestore();

export default function handler(req, res) {
  if (req.method === "POST") {
    const { uid1, uid2 } = req.body;

    const user1Ref = firestore.collection("events").doc(uid1);
    const user2Ref = firestore.collection("events").doc(uid2);

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Success" }));
  } else {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Bad Request" }));
  }
}
