import mongoose from 'mongoose';

// 定义消息模式
const messageSchema = new mongoose.Schema({
  chat_id: {
    type: String,
    required: true
  },
  p1: {
    type: Object,
    required: true
  },
  p2: {
    type: Object,
    required: true
  },
  message: {
    type: Array,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

// 创建消息模型
const Message = mongoose.model('Message', messageSchema);

// 导出消息模型
export default Message;