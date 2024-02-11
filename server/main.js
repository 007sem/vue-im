import express from "express";
import mongoose from "mongoose";

import usersRouter from "./api/user.js";

import MessageModel from "./model/message.js";

// import

const app = express();

// body解析
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://localhost/vue-im", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("数据库连接成功");
  });

// 跨域中间件
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // 允许所有来源的跨域请求
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // 允许的 HTTP 方法
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // 允许的请求头
  next();
});

app.use("/user", usersRouter);

app.all("*", function (req, res, next) {
  res.json("hello");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
