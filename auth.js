import React, { useState, useEffect, useContext, createContext } from "react";

import firebaseClient from "./firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {};
