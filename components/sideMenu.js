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

import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIFlrAHUb_xrR4SadMIXkC2oTJ4gLi23I",
  authDomain: "technovanza-3e853.firebaseapp.com",
  databaseURL: "https://technovanza-3e853.firebaseio.com",
  projectId: "technovanza-3e853",
  storageBucket: "technovanza-3e853.appspot.com",
  messagingSenderId: "163729170268",
  appId: "1:163729170268:web:e60535731c1c2aebebeb99",
  measurementId: "G-6T8LTS2VJT",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

function SideMenu() {
  const [user] = useAuthState(auth);

  const [name, setname] = useState("");
  const [photoUrl, setphotoUrl] = useState("");
  const [uid, setuid] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (user) {
      const authUser = firebase.auth().currentUser;
      setname(authUser.displayName);
      setphotoUrl(authUser.photoURL);
      setuid(authUser.uid);
    }
  }, [user]);

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
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
                <Link href="/previousGLS">
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
