import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import usersRouter from "./api/user.js";
import { getToken, verifyToken } from "./utils/index.js";



// import

const app = express();
const PORT = 3000;

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

app.use(cors());

// // 响应拦截中间件
app.use((req, res, next) => {
  // 获取请求头中的 Authorization 字段
  let token = req.headers.authorization;

  const whitelist = ["/user/login", "/public"];

  if (whitelist.includes(req.path)) {
    next();
  } else {
    token = token.split(" ")[1];
    const user = verifyToken(token);
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(401).json({ code: 401, msg: "token不合法" });
    }
    
  }
});

app.use("/user", usersRouter);

app.all("*", function (req, res, next) {
  res.json("hello");
});

app.listen(PORT, () => {
  console.log("App listening on port " + PORT + "!");
});
