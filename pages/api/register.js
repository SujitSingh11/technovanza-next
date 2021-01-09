import admin from "firebase-admin";

const serviceAccount = require( "../../secrets.json" );

if ( !admin.apps.length )
{
  admin.initializeApp( {
    credential: admin.credential.cert( serviceAccount ),
    databaseURL: "https://technovanza-3e853.firebaseio.com",
  } );
}

const firestore = admin.firestore();

export default async function handler ( req, res )
{
  if ( req.method === "POST" )
  {
    try
    {
      // const { uid1, uid2, solo, event, team } = req.body;
      const { participants, event, teamName } = req.body;
      const eventRef = firestore.collection( "events" ).doc( event );
      const eventDoc = await ( await eventRef.get() ).data();


      participants.forEach( user =>
      {
        if ( user === "" )
        {
          throw "TechnoID Empty";
        } else
        {
          const user1Ref = firestore.collection( "users" ).doc( user );
          const doc = await user1Ref.get();
          if ( !doc.exists )
          {
            throw "TechnoID Invalid";
          }
          else
          {
            eventDoc.registration.map( data =>
            {
              let index = data.participants.indexOf( user );
              if ( index !== -1 )
              {
                if ( index === 0 )
                {
                  throw "Already Registered";
                }
                else
                {
                  throw "Partner Already Registered";
                }
              }
            } )
          }
        }
      } );

      await eventRef.update( {
        registration: admin.firestore.FieldValue.arrayUnion( {
          participants: participants,
          team: teamName,
        } ),
      } );

      res.statusCode = 200;
      res.setHeader( "Content-Type", "application/json" );
      return res.end(
        JSON.stringify( { message: "Registration Successful" } )
      );
    }

    catch ( error )
    {
      console.log( error );
      res.statusCode = 208;
      res.setHeader( "Content-Type", "application/json" );
      return res.end( JSON.stringify( { error: error } ) );
    }
  } else
  {
    res.statusCode = 400;
    res.setHeader( "Content-Type", "application/json" );
    return res.end( JSON.stringify( { error: "Bad Request" } ) );
  }
}
