//db-server.js
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const nodemailer = require('nodemailer'); // nodemailer 모듈 추가
const bcrypt = require('bcrypt'); // bcrypt 모듈 추가

const app = express();
const port = process.env.PORT || 5000; // PORT 환경 변수 사용
const url = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017';
const dbName = 'local';
const collectionName = 'localRecord';
const collectionNameUsers = 'users';

const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY || 'd1234567890'; // .env에서 불러온 비밀키 사용

app.use(cors());
app.use(express.json()); // JSON 파싱 미들웨어 추가

// 4자리 임시 비밀번호 생성 함수
function generateTempPassword() {
  return Math.random().toString(36).slice(-4);
}

// Nodemailer 설정 (SMTP 서버 정보 입력)
const transporter = nodemailer.createTransport({
  service: 'gmail', // Gmail을 사용하는 경우
  auth: {
    user: 'kdi6033@gmail.com', // 본인의 이메일 주소
    pass: 'khnmrfwymenpqxsf',  // 이메일 비밀번호
  },
});

app.post('/api/records', async (req, res) => {
  const client = new MongoClient(url);
  console.log("1");

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB try');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const records = await collection.find({}).toArray();
    console.log('Records retrieved:', records);

    res.json(records);
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
    res.status(500).send('Error connecting to MongoDB');
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
});

app.post('/api/findArray', async (req, res) => {
  const client = new MongoClient(url);
  const { email } = req.body; // `mac` 삭제
  console.log(`Received email: ${email}`); // 이메일 데이터 확인 로그

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected post findArray');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // `email` 필드와 일치하는 모든 문서 찾기
    const records = await collection.find({ email }).toArray();
    console.log('Records retrieved:', records);

    res.json(records);
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
    res.status(500).send('Error connecting to MongoDB');
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
});

app.post('/api/record', async (req, res) => {
  const client = new MongoClient(url);
  const { mac } = req.body; // email 제거하고 mac만 받음
  console.log("2");

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected post record findOne');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // mac으로만 검색
    const record = await collection.findOne({ mac });
    console.log('Record retrieved:', record);

    res.json(record);
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
    res.status(500).send('Error connecting to MongoDB');
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
});

app.post('/api/upsert', async (req, res) => {
  const client = new MongoClient(url);
  const { mac, ...rest } = req.body; // mac을 제외한 나머지 필드 (rest)

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected post updateOne');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // mac 정보를 기반으로 해당 문서가 있으면 업데이트, 없으면 삽입
    const result = await collection.updateOne(
      { mac },  // mac을 기준으로 문서 검색
      { $set: { ...rest, mac } },  // 들어온 모든 데이터와 mac 정보 업데이트 또는 삽입
      { upsert: true }  // 문서가 없으면 삽입
    );
    console.log('업데이트 또는 삽입된 데이터:', result);

    res.json(result);
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
    res.status(500).send('Error connecting to MongoDB');
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
});

// /api/checkUser: 특정 email이 존재하는지 확인
app.post('/api/checkUser', async (req, res) => {
  const client = new MongoClient(url);
  const { email } = req.body;

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionNameUsers);

    const userExists = await collection.findOne({ email });
    res.json({ exists: Boolean(userExists) });
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
    res.status(500).send('Error connecting to MongoDB');
  } finally {
    await client.close();
  }
});

// /api/checkPassword: email과 pw가 일치하는지 확인
// 예: `/api/checkPassword`에서 비밀번호 확인 후 토큰 발행
app.post('/api/checkPassword', async (req, res) => {
  const client = new MongoClient(url);
  const { email, pw } = req.body;

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionNameUsers);

    const user = await collection.findOne({ email });

    if (!user) {
      res.json({ valid: false });
      return;
    }

    // bcrypt로 비밀번호 비교
    const isPasswordValid = await bcrypt.compare(pw, user.pw);

    if (isPasswordValid) {
      // 비밀번호가 맞으면 토큰 발행
      const token = jwt.sign({ email, time: new Date().toISOString() }, SECRET_KEY, { expiresIn: '1h' });
      const issuedAt = new Date().toISOString();
      // token을 콘솔에 출력
      console.log('Generated Token:', token);

      // DB에 토큰과 발행 시간 저장
      await collection.updateOne(
        { email },
        { $set: { token, time: issuedAt } }
      );

      res.json({ valid: true, token });
    } else {
      res.json({ valid: false });
    }
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
    res.status(500).send('Error connecting to MongoDB');
  } finally {
    await client.close();
  }
});


app.post('/api/upsertUser', async (req, res) => {
  const client = new MongoClient(url);
  const { email, pw } = req.body;

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected post updateOne');

    const db = client.db(dbName);
    const collection = db.collection(collectionNameUsers);

    // email을 기준으로 사용자 문서가 있으면 업데이트, 없으면 삽입
    const result = await collection.updateOne(
      { email },  // email을 기준으로 문서 검색
      { $set: { pw } },  // email과 pw로 업데이트 또는 삽입
      //{ upsert: true }  // 문서가 없으면 삽입
    );
    console.log('업데이트 또는 삽입된 사용자 데이터:', result);

    res.json(result);
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
    res.status(500).send('Error connecting to MongoDB');
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
});

// /api/signup: 회원가입 API - 임시 비밀번호 생성 후 이메일로 전송
app.post('/api/signup', async (req, res) => {
  const client = new MongoClient(url);
  const { email } = req.body;

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionNameUsers);

    // 임시 비밀번호 생성 및 이메일로 전송
    const tempPassword = generateTempPassword();
    // 임시 비밀번호를 해시 처리
    const hashedPassword = await bcrypt.hash(tempPassword, 10); // 해시 처리, 10은 saltRounds

    const mailOptions = {
      from: 'kdi6033@gmail.com',
      to: email,
      subject: '회원가입 임시 비밀번호',
      text: `i2r IoT PLC 임시 비밀번호: ${tempPassword}`,
    };

    await transporter.sendMail(mailOptions);
    //console.log('임시 비밀번호 이메일 전송 완료:', tempPassword);

    // 한국 현재 시간으로 time 필드 추가
    const currentTime = new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });

    // 임시 비밀번호와 현재 시간(time)을 DB에 저장
    const result = await collection.updateOne(
      { email },
      { $set: { email, pw: hashedPassword, time: currentTime } },
      { upsert: true }
    );

    res.json({ message: '임시 비밀번호가 이메일로 전송되었습니다.' });
  } catch (err) {
    console.error('Error during signup process', err);
    res.status(500).send('회원가입 중 오류가 발생했습니다.');
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
});

app.post('/api/changePassword', async (req, res) => {
  const client = new MongoClient(url);
  const { newPassword } = req.body;
  const token = req.headers.authorization?.split(' ')[1]; // 'Bearer <token>'에서 토큰 부분만 추출

  if (!token) {
    return res.status(401).send('토큰이 없습니다. 로그인이 필요합니다.');
  }

  try {
    // 토큰에서 이메일 정보 추출
    const decoded = jwt.verify(token, SECRET_KEY);
    const email = decoded.email;

    console.log(`변경할 사용자 이메일: ${email}`);

    // 새로운 비밀번호를 해시하여 저장
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection(collectionNameUsers);

    // email을 기준으로 pw 업데이트
    const result = await collection.updateOne(
      { email },
      { $set: { pw: hashedPassword } }
    );

    if (result.modifiedCount > 0) {
      res.send('비밀번호가 성공적으로 변경되었습니다.');
    } else {
      res.status(400).send('비밀번호 변경에 실패했습니다.');
    }
  } catch (err) {
    console.error('Error changing password:', err);
    if (err.name === 'JsonWebTokenError') {
      res.status(401).send('유효하지 않은 토큰입니다.');
    } else {
      res.status(500).send('서버 오류로 인해 비밀번호를 변경할 수 없습니다.');
    }
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
});

// Token 유효성 확인 엔드포인트
app.post('/api/checkToken', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.json({ isValid: false });
  }

  try {
    // 토큰 검증
    const decoded = jwt.verify(token, SECRET_KEY);
    const client = new MongoClient(url);
    await client.connect();
    
    const db = client.db(dbName);
    const collection = db.collection(collectionNameUsers);
    
    // DB에서 토큰 일치 여부 확인
    const user = await collection.findOne({ email: decoded.email, token });
    
    res.json({ isValid: Boolean(user) });
  } catch (err) {
    console.error('Error checking token:', err);
    res.json({ isValid: false });
  }
});

// Token 삭제 엔드포인트 (로그아웃 시 사용)
app.post('/api/deleteToken', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send('이메일이 없습니다.');
  }

  try {
    const client = new MongoClient(url);
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionNameUsers);

    // 해당 이메일의 토큰 삭제
    const result = await collection.updateOne(
      { email },
      { $unset: { token: '' } } // 토큰 필드 제거
    );

    if (result.modifiedCount > 0) {
      res.send('로그아웃되었습니다.');
    } else {
      res.status(400).send('로그아웃에 실패했습니다.');
    }
  } catch (err) {
    console.error('Error deleting token:', err);
    res.status(500).send('서버 오류로 인해 로그아웃할 수 없습니다.');
  }
});


// Token 저장 엔드포인트 (로그인 시 호출)
app.post('/api/saveToken', async (req, res) => {
  const { email, token } = req.body;

  if (!email || !token) {
    return res.status(400).send('이메일과 토큰이 필요합니다.');
  }

  try {
    const client = new MongoClient(url);
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionNameUsers);

    const issuedAt = new Date().toISOString();

    // email을 기준으로 토큰과 발행 시간 저장
    const result = await collection.updateOne(
      { email },
      { $set: { token, time: issuedAt } }
    );

    if (result.modifiedCount > 0 || result.upsertedCount > 0) {
      res.send('토큰이 성공적으로 저장되었습니다.');
    } else {
      res.status(400).send('토큰 저장에 실패했습니다.');
    }
  } catch (err) {
    console.error('Error saving token:', err);
    res.status(500).send('서버 오류로 인해 토큰을 저장할 수 없습니다.');
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
