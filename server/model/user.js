import mongoose from 'mongoose';

// 定义用户模式
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  avatar: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

// 创建用户模型
const User = mongoose.model('User', userSchema);

// 导出用户模型
export default User;