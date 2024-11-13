const express = require("express"); //import express
const router = express.Router(); //khai bao router
const {
  getHomePage,
  getUserPage,
  postCreateUser,
  putUpdateUser,
  deleteUser,
  getUsersById,
} = require("../controllers/homeController");

router.get("/", getHomePage);

router.get("/users", getUserPage);

router.get("/users/:id", getUsersById);

router.post("/create-user", postCreateUser);

router.put("/update-user/:id", putUpdateUser);

router.delete("/delete-user/:id", deleteUser);

module.exports = router;
