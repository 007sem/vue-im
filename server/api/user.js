import express from "express";
import { getToken, verifyToken } from "../utils/index.js";
import UserModel from "../model/user.js";
import { faker } from "@faker-js/faker";

const router = express.Router();

async function newUser(username, password) {
  const user = {
    username,
    password,
    avatar: faker.image.avatarLegacy(),
  };
  const isFind = await UserModel.findOne({ username });
  if (isFind) {
    return false;
  } else {
    (await UserModel.create(user)).save();
    return user;
  }
}

router.get("/rejest", async (req, res) => {
  const { password, username } = req.query;
  const isNotExist = await newUser(username, password);
  console.log(isNotExist);
  if (isNotExist) {
    res.send({
      token: getToken(isNotExist),
    });
  } else {
    res.send({
      message: "user is exist",
    });
  }

  console.log();
});

router.post("/login", async (req, res) => {
  const { password, username } = req.body;

  const isFind = await UserModel.findOne({ username });

  if (isFind) {
    if (isFind.password === password) {
      const { avatar } = isFind;
      res.send({
        token: getToken({
          username,
          avatar,
        }),
      });
    } else {
      res.send({
        message: "password is wrong",
      });
    }
  } else {
    res.send({
      data: username,
      message: "user is not exist",
    });
  }
});

router.get("/auth", async (req, res) => {
  const { token } = req.query;
  const isAuth = verifyToken(token);
  if (isAuth) {
    res.send({
      data: isAuth,
      message: "auth is success",
    });
  } else {
    res.send({
      message: "auth is fail",
    });
  }
});

export default router;
