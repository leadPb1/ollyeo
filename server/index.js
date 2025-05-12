const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();

// 미들웨어 설정
app.use(cors());
app.use(express.json());  // JSON 바디 파싱
app.use(express.static('client')); // 클라이언트 정적 파일 제공

// Multer 설정 (파일 업로드)
const upload = multer({ dest: 'uploads/' });

// API: 회원가입
app.post('/signup', (req, res) => {
  // 회원가입 처리
  const { username, password } = req.body;
  console.log('회원가입:', username, password);
  res.send('회원가입 성공');
});

// API: 로그인
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log('로그인:', username, password);
  res.send('로그인 성공');
});

// API: 작품 올리기 (파일 업로드 포함)
app.post('/upload', upload.single('file'), (req, res) => {
  const { content } = req.body;
  const file = req.file;
  console.log('작품 업로드:', content, file);
  res.send('작품 올리기 성공');
});

// 서버 실행
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번 포트에서 실행 중...`);
});
