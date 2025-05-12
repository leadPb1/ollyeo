// express 서버 기본 설정
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

// 환경변수 설정
dotenv.config();

// CORS 설정
app.use(cors({
  origin: 'https://ollyeo.onrender.com',
  credentials: true
}));

// JSON 데이터 파싱
app.use(express.json());

// MongoDB 연결
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// 서버 포트
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
