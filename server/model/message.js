import mongoose from 'mongoose';

// 定义消息模式
const messageSchema = new mongoose.Schema({
  sender_id: {
    type: String,
    required: true
  },
  recipient_id: {
    type: String,
    required: true
  },
  message: {
    type: String,
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