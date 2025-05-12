const mongoose = require('mongoose');

// 사용자 스키마
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },  // 실제로는 해싱해서 저장
});

// 사용자 모델
const User = mongoose.model('User', userSchema);

module.exports = User;
