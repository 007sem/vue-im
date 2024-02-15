import mongoose from "mongoose";

// 定义用户模式
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  chat_list:{
    type: Array,
    default: [],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

/*
  {
    name: "user2"
    type:  "normal" | "groups"
    avatar:
    chat_id: ""
    last_message:{
      content:
      time:
      type:
    }
  }


*/ 


// 创建用户模型
const User = mongoose.model("User", userSchema);

// 导出用户模型
export default User;
