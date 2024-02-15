import express from "express";
import { getToken, verifyToken } from "../utils/index.js";
import UserModel from "../model/user.js";
import MessageModel from "../model/message.js";

import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";


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
async function CreatChat(name1, name2, avatar1, avatar2) {
  let user = await UserModel.findOne({ username: name1 });
  let isExist = user.chat_list.some((item) => {
    return item.name === name2;
  })
  if (isExist) {
    return false;
  }

  const chat_id = uuidv4();
  // 创建聊天项
  const item = {
    name: name2,
    type: "normal",
    avatar: avatar2,
    chat_id,
    unread_num: 0,
    last_message: {
      content: "",
      time: "",
      type: "",
    },
  };
  user.chat_list.push(item);
  user.save();


  const chart_message = {
    chat_id,
    p1:{
      name: name1,
      avatar: avatar1,
    },
    p2:{
      name: name2,
      avatar: avatar2,
    },
    messages: []
  }

  await MessageModel.create(chart_message);


  return chat_id
}

router.post("/register", async (req, res) => {
  const { password, username } = req.body;
  const isNotExist = await newUser(username, password);
  console.log(isNotExist);
  if (isNotExist) {
    res.send({
      message: "register success.",
    });
  } else {
    res.send({
      message: "user is exist",
    });
  }
});

router.post("/login", async (req, res) => {
  const { password, username } = req.body;
  const isFind = await UserModel.findOne({ username });

  if (isFind) {
    if (isFind.password === password) {
      const { avatar, chat_list } = isFind;
      const token = getToken({
        username,
        avatar,
        chat_list,
      });
      res.send({
        token,
        message: "login success",
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
  const user = req.user;

  const find = await UserModel.findOne({ username: user.username })
  if(find){
    res.send({
      user:{
        username: find.username,
        avatar: find.avatar,
        chat_list: find.chat_list
      }
    });
  } else{
    res.status(401).send({ message: "user is not exist" })
  }
});



router.post("/create_chat", async (req, res) => {
  const { name } = req.body;
  const user = req.user;
  const isFind = await UserModel.findOne({ username: name });
  if (isFind) {
    const { avatar } = isFind
    const chat_id =  await CreatChat(user.username, name, user.avatar, avatar)
    if (chat_id) {
      res.send({
        code: 200,
        chat_id
      })
    }else {
      res.send({
        code: 400,
        message: "chat is exist",
      })
    }

  } else {
    res.send({
      code: 400,
      message: "user is not exist",
    });
  }
});

export default router;
