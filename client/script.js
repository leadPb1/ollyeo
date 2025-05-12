// 로그인 처리
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  console.log('로그인 시도', username, password);
  // 로그인 API 호출 (백엔드와 연결 필요)
});

// 회원가입 처리
document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  console.log('회원가입 시도', username, password);
  // 회원가입 API 호출 (백엔드와 연결 필요)
});

// 작품 올리기 처리
document.getElementById('upload-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const content = document.getElementById('post-content').value;
  const file = document.getElementById('file-upload').files[0];
  console.log('작품 올리기:', content, file);
  // 작품 업로드 API 호출 (백엔드와 연결 필요)
  // 아 뭐하지
});
