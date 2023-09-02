
import express from "express";

const app = express();
const express = require("express");
// config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "server/config/.env",
    });
  }
  
  module.exports = app;