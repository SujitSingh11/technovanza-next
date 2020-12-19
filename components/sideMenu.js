import React, { useState, useEffect } from "react";
import Link from "next/link";
import Styles from "../styles/SideMenu.module.css";

import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import {
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
  Avatar,
} from "@material-ui/core";

import { useAuthState } from "react-firebase-hooks/auth";
import firebaseClient from "../firebaseClient";

const auth = firebaseClient.auth();

function SideMenu() {
  const [user] = useAuthState(auth);

  const [name, setname] = useState("");
  const [photoUrl, setphotoUrl] = useState("");
  const [uid, setuid] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (user) {
      const authUser = firebaseClient.auth().currentUser;
      setname(authUser.displayName);
      setphotoUrl(authUser.photoURL);
      setuid(authUser.uid);
      checkFirestore(authUser);
    }
  }, [user]);

  const checkFirestore = async (authUser) => {
    const firestore = firebaseClient.firestore();
    const usersRef = firestore.collection("users").doc(authUser.uid);
    const doc = await usersRef.get();
    if (!doc.exists) {
      const data = {
        uid: authUser.uid,
        displayName: authUser.displayName,
        photoURL: authUser.photoURL,
        email: authUser.email,
      };
      await usersRef.set(data, { merge: true });
    }
  };

  const signInWithGoogle = async () => {
    const provider = new firebaseClient.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
    setOpen(true);
  };

  const signOut = () => {
    auth.signOut();
  };

  const toggleDrawer = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(!open);
  };

  return (
    <>
      <IconButton
        edge="end"
        className={Styles.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
      >
        <MenuIcon className={Styles.menuButtonIcon} />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <div
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
          className={Styles.sideMenuRoot}
        >
          <div>
            <Divider />
            <IconButton>
              <KeyboardArrowRightIcon className={Styles.menuOpen} />
            </IconButton>
            <Divider />
          </div>
          {user ? (
            <div className={Styles.sideMenuProfileRoot}>
              <div className={Styles.menuItemDiv}>
                <Avatar
                  alt={name}
                  src={photoUrl}
                  className={Styles.profilePhotoMenu}
                  variant="rounded"
                />
                <p className={Styles.menuUIDTitle}>{name}</p>
              </div>
              <Divider />
              <div className={Styles.menuItemDivUID}>
                <p className={Styles.menuUIDTitle}>Techno ID</p>
                <p className={Styles.menuUID}>{uid.slice(0, 10)}</p>
              </div>
            </div>
          ) : (
            <></>
          )}

          <div>
            <Divider />
            <List className={Styles.sideMenuListRoot}>
              <ListItem button className={Styles.sideMenuListItem}>
                <Link href="/">
                  <ListItemText
                    primary="Home"
                    className={Styles.sideMenuListItemText}
                  />
                </Link>
              </ListItem>
              <ListItem button className={Styles.sideMenuListItem}>
                <Link href="/events">
                  <ListItemText
                    primary="Events"
                    className={Styles.sideMenuListItemText}
                  />
                </Link>
              </ListItem>
              <ListItem button className={Styles.sideMenuListItem}>
                <Link href="/gls">
                  <ListItemText
                    primary="GLS 2020"
                    className={Styles.sideMenuListItemText}
                  />
                </Link>
              </ListItem>
              <ListItem button className={Styles.sideMenuListItem}>
                <Link href="/previousgls/previousGLS">
                  <ListItemText
                    primary="Previous GLS"
                    className={Styles.sideMenuListItemText}
                  />
                </Link>
              </ListItem>
            </List>
            <Divider />
          </div>

          <div className={Styles.menuLogout}>
            {user ? (
              <Button onClick={signOut} className={Styles.cardButtonsLogout}>
                Logout
              </Button>
            ) : (
              <Button
                onClick={signInWithGoogle}
                className={Styles.cardButtonsLogout}
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default SideMenu;
