# React와 ChatGPT로 만드는 IoT PLC UI
## 1. 과정 개요
- 과정명: ChatGPT와 React UI로 배우는 IoT 서버 개발
- 대상: React, IoT, 서버 통합에 관심 있는 개발자, 학생 및 초보자
- 목표: ChatGPT와 React를 활용하여 IoT 시스템을 위한 서버 UI를 개발하고, MQTT와 MongoDB를 통해 클라우드 서버와 연동하는 기술을 습득
- 
## 2. 주요 학습 내용
1. ChatGPT 기반 React UI 개발
- ChatGPT를 활용한 React 프로젝트 가이드
- 효율적인 UI 개발을 위한 ChatGPT 활용법
- 서버 UI 컴포넌트 제작 실습
- IoT PLC 실습 도구 연동

2. IoT PLC 실습 도구 소개: 수업에서 사용할 IoT PLC 장치 및 환경 소개 (GitHub 레포지토리)
- IoT PLC를 React UI와 연결하는 방법
- 실제 IoT PLC 기기와의 데이터 송수신 실습
- MQTT 통신을 통한 데이터 송수신

3. MQTT 통신 프로토콜의 기본 개념
- MQTT 브로커 구축
- MQTT를 사용한 IoT 장비와의 실시간 데이터 통신 구현
- React UI에서 MQTT로 실시간 데이터 표시
- MongoDB를 활용한 데이터 저장

4. MongoDB 기본 개념 및 설치 방법
- MQTT로 수신한 데이터를 MongoDB에 저장하는 방법
- 저장된 데이터를 React UI에 표시하는 실습
- 클라우드 서버 구축 및 연동

5. PC 및 아마존 클라우드를 사용한 서버 구성
- React UI 프로그램과 클라우드 서버 간 데이터 통신
- 클라우드 환경에서 IoT 데이터의 저장 및 관리    

## 3. 실습 환경
- React: UI 개발 환경 설정 및 실습
- IoT PLC: IoT PLC 기기와 연결하여 실시간 데이터 처리 (GitHub 레포지토리)
- MQTT: 실시간 데이터 통신을 위한 브로커 설정
- MongoDB: 데이터베이스 설치 및 연동
- AWS 클라우드: 서버 호스팅 및 배포 실습    

## 4. 강의 목표
- ChatGPT를 활용하여 React UI를 효율적으로 개발하는 방법을 학습
- IoT PLC, MQTT, MongoDB를 연동하여 실시간 데이터 송수신 및 저장 기술 습득
- PC  IoT 서버 시스템 구축
- 클라우드 서버와 IoT 시스템의 통합 및 관리 능력 배양
  
## 5. 과정 결과물
- React로 구현된 IoT 서버 UI
- IoT PLC 기기와의 실시간 데이터 통신을 통해 수집된 정보
- MQTT와 MongoDB를 통해 실시간으로 연동된 IoT 장비 데이터
- PC 및 아마존 클라우드 서버에서 동작하는 완성된 IoT 시스템

react 프로그램과 이를 Data Science와 AI Science에 응용합니다.    
[React Learn 공식 사이트](https://react.dev/learn)    
[React Doc 공식 사이트](https://docs.github.com/ko/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links)

# React 시작하기    
## 1. Node.js 설치    
React는 Node.js 환경에서 동작하므로 먼저 Node.js를 설치해야 합니다.    
[Node.js 공식 사이트](https://nodejs.org/en)에서 설치합니다.
설치 후, 터미널이나 명령 프롬프트에 다음 명령어를 입력해 설치가 잘 되었는지 확인합니다:
```
node -v
npm -v
```
## 2. React 프로젝트 생성    
React 프로젝트를 시작하기 위해 Facebook에서 제공하는 create-react-app 도구를 사용할 수 있습니다.    
터미널이나 명령 프롬프트에서 원하는 디렉토리로 이동합니다.    
다음 명령어로 새 React 프로젝트를 생성합니다:
```
npx create-react-app my-app
```
저는 typescript를 사용합니다. ChatGPT에게 장점을 물어보세요 자세하게 설명해주고 이를 추천 합니다. 여기서는 그 장점의 기술은 생략합니다.
타입스크립트로 프로젝트 시작하기
```
npx create-react-app my-app --template typescript
```
## 3. visual code 로 프로그램 합니다.
```
cmd
code my-app
```
## 4. 개발 서버를 시작합니다:
```
npm start
```
# React로 시작하는 IoT PLC UI의 기본 구성
## 1. 버튼, 설명문, 스타일, 데이터, 그림 만들기
이 React 프로그램은 세 가지 컴포넌트로 구성된 간단한 웹 애플리케이션입니다. App 컴포넌트는 메인 컴포넌트로, MyButton, AboutPage, Profile 컴포넌트를 렌더링합니다. 
- MyButton은 단순히 "I'm a button" 텍스트가 있는 버튼을 표시합니다.
- AboutPage는 제목과 함께 간단한 소개 텍스트를 렌더링하고,
- Profile 컴포넌트는 사용자의 이름과 원형 프로필 사진을 표시합니다. 프로필 사진은 CSS에서 border-radius: 50% 스타일을 적용해 원형으로 만들어졌습니다.   
<a href="https://youtu.be/4Dkc7G_tbng">
    <img src="https://github.com/user-attachments/assets/381c244f-c24c-4ab5-ada0-07c0701e2598" alt="버튼, 설명문, 스타일, 데이터, 그림" width="400">
</a>

[프로그램 다운로드 25-2](https://github.com/kdi6033/react/releases/tag/react-button-avatar-v1.0)   
<img src="https://github.com/user-attachments/assets/e50f3c9f-3ece-410a-8ca8-88c272f42afd" alt="메뉴" width="300">

App.tsx
```
import React from 'react';
import logo from './logo.svg';
import './App.css';
import AboutPage from './components/AboutPage'; // Add this line
import Profile from './components/Profile'; // Add this line

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyButton />
        <AboutPage />
        <Profile />
      </header>
    </div>
  );
}

export default App;
```
AboutPage.tsx
```
import React from 'react';

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

```
Profile.tsx
```
// src/components/Profile.tsx
import React from 'react';
import './Profile.css'; // CSS 파일을 불러오기


const user = {
  name: '김동일',
  imageUrl: 'http://i2r.link/images/i2r.png',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
```
Profile.css
```
/* In your CSS */
.avatar {
    border-radius: 50%;
  }
```

## 2. Conditional rendering
[프로그램 다운로드 25-3](https://github.com/kdi6033/react/releases/tag/react-rendering-lists-v1.0)    
이 프로그램은 useState를 사용해 로그인 여부를 상태로 관리하며, 로그인 상태에 따라 다른 UI를 보여주는 조건부 렌더링을 구현했습니다. 사용자가 로그인 버튼을 클릭하면 isLoggedIn 상태가 true로 변경되어 로그인 화면이 나타나고, 로그아웃 버튼을 클릭하면 false로 변경되어 로그아웃 화면이 나타납니다.    
<a href="https://youtu.be/VZIVyQeKRKg">
    <img src="https://github.com/user-attachments/assets/cbe0daaf-da91-427e-b8b8-3ad4e7181b23" alt="Conditional rendering" width="400">
</a>
[프로그램 다운로드 25-3](https://github.com/kdi6033/react/releases/tag/react-rendering-lists-v1.0)    

App.tsx
```
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // 로그인 상태를 관리하는 useState 훅
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그인 버튼을 클릭했을 때 상태를 변경하는 함수
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // 로그아웃 버튼을 클릭했을 때 상태를 변경하는 함수
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* 조건부 렌더링 */}
        {isLoggedIn ? (
          <div>
            <h2>You are logged in!</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h2>Please log in</h2>
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
```

## 3. Rendering lists
이 React 프로그램은 두 개의 컴포넌트, App과 ShoppingList로 구성됩니다. App 컴포넌트는 화면에 "Shopping List" 제목과 ShoppingList 컴포넌트를 표시합니다. ShoppingList 컴포넌트는 products 배열을 사용하여 리스트를 만들고, 각 항목의 isFruit 값에 따라 색상을 다르게 표시합니다. 과일이면 magenta, 아니면 darkgreen 색상으로 렌더링됩니다.   
유튜브 보기    
<a href="https://youtu.be/wKed2Ycv1Fc">
    <img src="https://github.com/user-attachments/assets/93b32829-9d85-4c03-bc30-586c811839fd" alt="Rendering lists" width="400">
</a>

[프로그램 다운로드 25-4](https://github.com/kdi6033/react/releases/tag/react-rendering-lists-v1.1)   

App.tsx
```
import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './ShoppingList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Shopping List</h1>
      <ShoppingList />
      </header>
    </div>
  );
}

export default App;
```
ShoppingList.tsx
```
import React from 'react';

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
```

## 4. Responding to events 
이 React 프로그램은 간단한 버튼을 생성합니다. App 컴포넌트 안에 있는 버튼을 클릭하면 handleClick 함수가 호출되어 "You clicked me!"라는 알림(alert)이 화면에 나타납니다. 이 프로그램의 핵심은 버튼에 onClick 이벤트를 설정해 클릭 시 특정 동작(여기서는 알림)을 수행하게 만든 것입니다.    
프로그램이 간단해서 소스파일은 않올립니다.
App.tsx   
```

import React from 'react';
import logo from './logo.svg';
import './App.css';

function handleClick() {
  alert('You clicked me!');
}

function App() {
  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default App;
```

## 5. Updating the screen
이 프로그램은 React로 작성된 간단한 애플리케이션으로, 두 개의 버튼이 각각 독립적으로 클릭 횟수를 카운트합니다. useState Hook을 사용해 각 버튼의 상태를 관리하며, 버튼을 클릭할 때마다 해당 버튼의 카운터가 1씩 증가합니다. 각 버튼은 독립적으로 동작해 서로의 카운터에 영향을 주지 않습니다.    

<a href="https://youtu.be/IHZnE8cBzhs">
    <img src="https://github.com/user-attachments/assets/3d2b1371-7171-4dcc-8a14-dc06a16065b8" alt="Updating the screen" width="400">
</a>

[프로그램 다운로드 25-6](https://github.com/kdi6033/react/releases/tag/react-updating-the-screen-v1.0)   

App.tsx   
```
import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counters that update separately</h1>
        <MyButton />
        <MyButton />
      </header>
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

export default App;
```
## 6. Using Hooks
이 React 프로그램은 상태 관리 훅 useState를 사용하여 두 개의 버튼에서 공유되는 카운터를 구현합니다. App 컴포넌트는 count 상태를 관리하며, MyButton 컴포넌트는 버튼을 클릭할 때마다 count 값을 1씩 증가시킵니다. 두 버튼은 동일한 count 값을 공유하여 동시에 업데이트됩니다. TypeScript를 사용해 props와 상태의 타입을 명시했습니다. 

<a href="https://youtu.be/rGYzcYTOtps">
    <img src="https://github.com/user-attachments/assets/b5d6327c-2e5f-47d5-b65f-15b9eaae36fb" alt="Using Hooks" width="400">
</a>

[프로그램 다운로드 25-7](https://github.com/kdi6033/react/releases/tag/react-using-hooks-v1.0)   

App.tsx   
```
import React, { useState } from 'react';
import './App.css';

interface MyButtonProps {
  count: number;
  onClick: () => void;
}

function App() {
  const [count, setCount] = useState<number>(0); // 상태에 타입 명시

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counters that update together</h1>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
      </header>
    </div>
  );
}

function MyButton({ count, onClick }: MyButtonProps) { // props에 타입 지정
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

export default App;
```
## 7. MQTT
이 프로그램은 MQTT 브로커에 연결하고, 주기적으로 메시지를 전송하며, 지정된 토픽에서 수신한 메시지를 화면에 출력하는 기능을 수행합니다.
- 브로커에 연결: MQTT 클라이언트가 브로커(ai.doowon.ac.kr:1803)에 연결됩니다.
- 토픽 구독: outtopic을 구독하고, 5초마다 intopic에 '김동일' 메시지를 전송합니다.
- 메시지 수신: 구독한 outtopic에서 수신된 메시지를 messages 배열에 저장하고 이를 화면에 출력합니다.
- 화면 출력: 수신된 메시지가 리스트로 출력됩니다.
<a href="https://youtu.be/hsZt9NN4e48">
    <img src="https://github.com/user-attachments/assets/63189d1d-ee99-4720-b30d-5bdf89376905" alt="Updating the screen" width="400">
</a>

[프로그램 다운로드 25-8](https://github.com/kdi6033/react/releases/tag/react-mqtt-v1.3)   

리엑트 프로그램을 새로 만들어 시작합니다.
```
npx create-react-app mqtt --template typescript
```
생성된 App.tsx 에서 아래와 같이 필요한 부분만 가지고 프로그램을 시작 합니다.    
[관련지식] 웹과 mqtt는 웹소켙으로 통신을 합니다. 보통은 1883포트로 사용하고 ai.doowon.ac.kr에서 웹소켙은 1803으로 설정 되었습니다. 그리고 프로그램을 구성하는데 필요한 서브프로그램은 /components 라는 디렉토리를 만들어 여기에 저장하는 것이 관리하기 용이 합니다.    
<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100">  [25-8]    

```
import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
mqtt 연결프로그램 만들어줘
브로커주소:ai.doowon.ac.kr 포트:1803 intopic:kdi6033@gmail.com/intopic  outtopic:kdi6033@gmail.com/outtopic
mqtt 프로그램은 components 디렉토리 만들어서 여기에 만들어줘
```

유튜브 쵤연 후에 i2r 보드와 연결하기 위해 topic을 수정 했습니다.
[생성된 프로그램] 
App.tsx
```
import React from 'react';
import './App.css';
import MQTTClient from './components/MQTTClient';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MQTT 통신 프로그램</h1>
      </header>
      <MQTTClient />
    </div>
  );
}

export default App;
```
MQTTClient.tsx
```
import React, { useEffect, useState } from 'react';
import mqtt from 'mqtt';

const MQTTClient = () => {
  const [messages, setMessages] = useState<string[]>([]); // string[] 타입으로 수정
  const brokerUrl = 'mqtt://ai.doowon.ac.kr:1803';
  const intopic = 'i2r/kdi60331@gmail.com/out';
  const outtopic = 'i2r/kdi60331@gmail.com/in';

  useEffect(() => {
    const client = mqtt.connect(brokerUrl);

    client.on('connect', () => {
      console.log('Connected to broker');
      client.subscribe(intopic, (err) => {
        if (!err) {
          console.log(`Subscribed to ${intopic}`);
        }
      });

      const interval = setInterval(() => {
        client.publish(outtopic, '김동일');
        console.log(`Message sent to ${intopic}: 김동일`);
      }, 5000);

      return () => {
        clearInterval(interval);
        client.end();
      };
    });

    client.on('message', (topic, message) => {
      if (topic === intopic) {
        const newMessage = message.toString();
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        console.log(`Received message from ${outtopic}: ${newMessage}`);
      }
    });

    client.on('error', (err) => {
      console.error('Connection error:', err);
      client.end();
    });
  }, [brokerUrl, intopic, outtopic]);

  return (
    <div>
      <h1>MQTT Client</h1>
      <div>
        <h2>Messages from {intopic}</h2>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MQTTClient;
```
다음 nodered 프로그램을 만들어 react 프로그램과 mqtt 통신을 테스트 하겠습니다.  
아래 node red 프로그램 링크를 사용해서 프로그램 하세요.    
<img src="https://github.com/user-attachments/assets/c7c7dde4-4a2a-44a8-838b-d63f9a6b3b63" alt="nodered 25-8" width="400">   
[node red 25-8 소스파일](https://github.com/kdi6033/react/blob/main/file/nodere-25-8.json)   

## 8. MQTT i2r-03 IoT PLC 연결
<a href="https://youtu.be/NTLkgPB4hpE">
    <img src="https://github.com/user-attachments/assets/10b281ca-17da-4c78-b42e-9e6b298c21f5" alt="Updating the screen" width="400">
</a>    

이제부터 i2r-03 IoT PLC 를 연결하는 과정을 설명 드리겠습니다.    
앞에서 설명한 MQTT 프로그램에서 topic을 PLC의 토픽과 일치 시키면 통신을 진행 할수 있습니다. 브로커에서 토픽이 중볻되지 않게 자신의 이메일을 입력하여 사용하세요

-브로커를 결정하새요 다음 예시는 ai.doowon.ac.kr 을 사용하는 것으로 하겠습니다.
- MQTT 브로커(mqtt://ai.doowon.ac.kr:1803)에 연결한 후, 특정 토픽에서 메시지를 구독합니다.
- 메시지가 들어오면 이를 즉시 화면에 출력합니다.
- 클라이언트가 페이지를 벗어나면 연결이 해제됩니다.    
[프로그램 다운로드 25-9](https://github.com/kdi6033/react/releases/tag/react-i2r-arduino-basic-v1.0)        
[App.tsx]
- App.js는 React 애플리케이션의 기본 구조를 정의합니다.
- MQTTClient라는 컴포넌트를 호출하여 MQTT 통신을 처리합니다.
- 주요 구조는 header와 main으로 나뉘며, main 섹션에서 MQTTClient 컴포넌트를 렌더링합니다.
```
import React from 'react';
import './App.css';
import MQTTClient from './components/MQTTClient';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        MQTT 통신 프로그램
      </header>
      <main>
        <MQTTClient />
      </main>
    </div>
  );
}

export default App;
```
[MQTTClient.tsx]
- MQTTClient.js는 실제 MQTT 통신을 처리하는 핵심 컴포넌트입니다.
- mqtt 라이브러리를 사용하여 mqtt://ai.doowon.ac.kr:1803 브로커에 연결합니다.
- 연결 후 i2r/kdi@gmail.com/out 토픽을 구독하고, 해당 토픽에서 수신한 메시지를 화면에 출력합니다.
- 수신된 메시지는 messages라는 상태 변수에 저장되며, 이 값은 화면에 리스트로 나타납니다.
- 메시지를 수신할 때마다 이전 메시지를 덮어씁니다.
- 연결 오류가 발생하면 오류 로그를 출력하고 클라이언트를 종료합니다.
```
import React, { useEffect, useState } from 'react';
import mqtt from 'mqtt';

const MQTTClient = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const brokerUrl = 'mqtt://ai.doowon.ac.kr:1803';
  const intopic = 'i2r/kdi@gmail.com/out';
  const outtopic = 'i2r/kdi@gmail.com/in';

  useEffect(() => {
    const client = mqtt.connect(brokerUrl);

    client.on('connect', () => {
      console.log('Connected to broker');
      client.subscribe(intopic, (err) => {
        if (!err) {
          console.log(`Subscribed to ${intopic}`);
        }
      });
    });

    client.on('message', (topic, message) => {
      if (topic === intopic) {
        const newMessage = message.toString();
        // 새로운 메시지로 덮어쓰기 (기존 메시지 배열은 초기화)
        setMessages([newMessage]);
        console.log(`Received message from ${intopic}: ${newMessage}`);
      }
    });

    client.on('error', (err) => {
      console.error('Connection error:', err);
      client.end();
    });

    // 클라이언트가 컴포넌트가 언마운트 될 때 정리되도록 함
    return () => {
      client.end();
    };
  }, [brokerUrl, intopic]);

  return (
    <div>
      <h1>MQTT Client</h1>
      <div>
        <h2>Messages from {intopic}</h2>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MQTTClient;
```
## 9. MQTT Hook i2r-03 IoT PLC 연결
<a href="https://youtu.be/ymZNHD4hQZE">
    <img src="https://github.com/user-attachments/assets/6fda3a19-e210-40a2-a23d-e5abb8f74e62" alt="Updating the screen" width="400">
</a>    

[프로그램 다운로드 25-10](https://github.com/kdi6033/react/releases/tag/react-25-10-MqttHookIotPlc-v1.0)   

<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100">  [25-10]    

```
이 프로그램에서 ui창을 별도의 서브 프로그램으로 만들어줘
Display라는 별도의 컴포넌트를 만들고 
mqtt로 들어온 메세지는 App.tsx 로 전달해 하위 모든 서브 프로그램이 바로 반영 할 수 있게 프로그램 해줘 그리고 이러한 것에 대해 니가 분석하고 추천해줘
들어온 정보를 하드웨어에 기록도 해야 함으로 app.tsx와 같은 상위단에 기록해서 hook을 사용하려고 해
```
- 프로그램 구조를 개선하기 위해, UI 창을 Display라는 컴포넌트로 분리하고, MQTT 메시지를 App.tsx에서 관리해 모든 하위 컴포넌트에 상태를 전달합니다. 
- 이를 통해 메시지 상태를 상위에서 관리하고, 각 컴포넌트에서 실시간으로 반영합니다.
- 이와 함께, 하드웨어에 기록하기 위해 상위에서 hook을 사용해 메시지를 처리하도록 구현합니다.

[App.tsx]
- MQTT 메시지를 처리하고 상태를 useState로 관리합니다.
- Display와 같은 하위 컴포넌트에 상태를 전달하여 UI에 메시지를 반영합니다.
- 하드웨어에 기록할 수 있는 기능을 추가합니다.
```
import React, { useState, useEffect } from 'react';
import './App.css';
import MQTTClient from './components/MQTTClient';
import Display from './components/Display';

function App() {
  const [mqttMessage, setMqttMessage] = useState<string | null>(null);

  // MQTTClient에서 메시지를 수신할 때 이 함수를 호출하여 상태 업데이트
  const handleMqttMessage = (message: string) => {
    setMqttMessage(message);
    // 하드웨어 기록 로직
    console.log("하드웨어 기록: ", message);
    // 이 부분에 하드웨어 기록 관련 함수나 로직을 추가할 수 있음
  };

  return (
    <div className="App">
      <header className="App-header">
        MQTT 통신 프로그램
      </header>
      <main>
        <MQTTClient onMessage={handleMqttMessage} />
        <Display message={mqttMessage} />
      </main>
    </div>
  );
}

export default App;
```

[MQTTClient.tsx]
- MQTT 연결 및 메시지 구독을 처리하며, 수신된 메시지를 App.tsx로 전달합니다.
```
import React, { useEffect } from 'react';
import mqtt from 'mqtt';

interface MQTTClientProps {
  onMessage: (message: string) => void; // 메시지를 전달받을 함수
}

const MQTTClient: React.FC<MQTTClientProps> = ({ onMessage }) => {
  const brokerUrl = 'mqtt://ai.doowon.ac.kr:1803';
  const intopic = 'i2r/kdi@gmail.com/out';

  useEffect(() => {
    const client = mqtt.connect(brokerUrl);

    client.on('connect', () => {
      console.log('Connected to broker');
      client.subscribe(intopic, (err) => {
        if (!err) {
          console.log(`Subscribed to ${intopic}`);
        }
      });
    });

    client.on('message', (topic, message) => {
      if (topic === intopic) {
        const newMessage = message.toString();
        onMessage(newMessage); // 수신된 메시지를 App으로 전달
        console.log(`Received message from ${intopic}: ${newMessage}`);
      }
    });

    client.on('error', (err) => {
      console.error('Connection error:', err);
      client.end();
    });

    return () => {
      client.end();
    };
  }, [brokerUrl, intopic, onMessage]);

  return <div>MQTT 연결 중...</div>;
};

export default MQTTClient;
```

[Display.tsx]
- App.tsx에서 전달된 메시지를 받아 UI에 표시하는 컴포넌트입니다.
```
import React from 'react';

interface DisplayProps {
  message: string | null; // 수신된 메시지
}

const Display: React.FC<DisplayProps> = ({ message }) => {
  return (
    <div>
      <h1>Display Component</h1>
      <div>
        <h2>Received Message</h2>
        <p>{message ? message : 'No message received yet'}</p>
      </div>
    </div>
  );
};

export default Display;
```
분석 및 추천:
- 상위에서 상태 관리:
App.tsx에서 MQTT 메시지를 상태로 관리하면, 다른 컴포넌트에서도 이 메시지를 쉽게 사용할 수 있습니다. 이를 통해 메시지가 여러 컴포넌트에 실시간으로 반영됩니다.

- 하드웨어 기록:
메시지가 상위에서 관리되므로, handleMqttMessage 함수 내에서 하드웨어 기록 관련 로직을 추가할 수 있습니다. 이 방법은 상태를 한 곳에서만 관리하므로, 데이터 일관성을 유지하면서 하드웨어 작업을 쉽게 처리할 수 있습니다.

- 컴포넌트 구조 분리:
UI와 비즈니스 로직(MQTT 통신)을 분리함으로써 유지보수성이 높아집니다. Display 컴포넌트는 UI만 담당하며, 재사용 가능성이 높습니다.

- 효율적인 상태 관리:
useState와 useEffect를 적절히 사용해 효율적으로 상태 변화를 관리하고, MQTT 메시지에 즉각적으로 대응할 수 있습니다.
이 구조는 확장성과 유지보수성 측면에서 매우 적합합니다.    

위 프로그램은 여러개의 IoT PLC가 연결되어 있으면 데이터가 혼합되어 관측하기 어려워 선택한 기기만 볼수 있게 프로그램을 수정 합니다.    

<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100">      
멕어드레스는 자신의 프로그램에 들어오는 주소로 대체하세요.    

```
Display 에서 "mac":"D8:13:2A:C3:73:58" 인것만 표시해줘
```

Display 컴포넌트에서 수신된 메시지 중 "mac":"D8:13:2A:C3:73:58"이 포함된 것만 필터링하여 표시하도록 수정할 수 있습니다. 이를 위해 메시지를 JSON 형식으로 변환한 후, mac 필드가 원하는 값과 일치하는지 확인하여 UI에 반영하면 됩니다.    
Display.tsx
```
import React from 'react';

interface DisplayProps {
  message: string | null; // 수신된 메시지
}

const Display: React.FC<DisplayProps> = ({ message }) => {
  let macMessage = null;

  if (message) {
    try {
      // 메시지를 JSON으로 파싱
      const parsedMessage = JSON.parse(message);

      // "mac" 필드가 "D8:13:2A:C3:73:58"과 일치하는지 확인
      if (parsedMessage.mac === 'D8:13:2A:C3:73:58') {
        macMessage = message; // 조건에 맞는 메시지 저장
      }
    } catch (error) {
      console.error('Invalid JSON format:', error);
    }
  }

  return (
    <div>
      <h1>Display Component</h1>
      <div>
        <h2>Received Message</h2>
        {macMessage ? <p>{macMessage}</p> : <p>No matching message</p>}
      </div>
    </div>
  );
};

export default Display;
```
설명:    
- JSON 파싱: 수신된 JSON 형식이라고 가정하고, JSON.parse로 메시지를 파싱합니다.    
- MAC 주소 확인: 파싱된 메시지의 "mac" 필드가 "D8:13:2A:C3:73:58"인지 확인합니다. 일치하는 경우에만 메시지를 macMessage 변수에 저장합니다.
- UI 표시: macMessage에 값이 있으면 해당 메시지를 화면에 표시하고, 값이 없으면 "No matching message"를 표시합니다.
이 방식으로 원하는 MAC 주소를 포함한 메시지만 필터링하여 UI에 표시할 수 있습니다.

## 10. 정보 저장과 읽기 - 이메일 맥어드레스 입력창 만들고 정보 저장하고 읽기
<a href="https://youtu.be/ebBb9uQH0dk">
    <img src="https://github.com/user-attachments/assets/56e51862-d8d2-478c-8f9b-a0ff939f2559" alt="Updating the screen" width="400">
</a>     

[프로그램 다운로드 25-11](https://github.com/kdi6033/react/releases/tag/react-25-11-v1.0)    
IoT PLC에서 mqtt로 들어오는 데이터를 4개의 Led를 만들어 연동합니다.    

<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100">   [11]    
```
Display.tsx 에 이메일 입력과 맥어드레스 입력을 만들고 저장을 누르면 컴퓨터에 저장하고 프로그램 시작할 때 이값을 읽어오게 해줘
outtopic 은 i2r/이메일/in 으로  intopic은 i2r/이메일/out 만들어줘
if (parsedMessage.mac === 'D8:13:2A:C3:73:58') {
        macMessage = message; // 조건에 맞는 메시지 저장
      }
이 부분은 입력한 맥 어드레스로 대체해줘  
저장을 누르면 입력한 정보를 프로그램에 바로 적용해줘
contexts/ConfigContext.tsx를 만들고 email, mac 을 전역 변수로 만들고 mqtt 에서는 이를 참조로 intopic outtopic 만들어서 프로그램 해줘
```

- ConfigContext.tsx에서 이메일과 MAC 주소를 전역 상태로 관리하고, 로컬 스토리지에 저장합니다.    
- MQTTClient는 이메일을 참조하여 intopic, outtopic을 설정합니다.
- Display.tsx에서는 사용자가 입력한 이메일과 MAC 주소를 저장하고, 수신한 메시지의 MAC 주소와 비교하여 메시지를 필터링합니다.
- 프로그램이 시작될 때 로컬 스토리지에서 저장된 값을 불러옵니다.

## 11. UI 만들기 - Led와 스위치를 만들어 IoT PLC와 연동한다.
<a href="https://youtu.be/SWQ7683I-hw">
    <img src="https://github.com/user-attachments/assets/4a6411aa-f9b6-4397-8843-3c0e8c4b7357" alt="Updating the screen" width="400">
</a>     

[프로그램 다운로드 25-12](https://github.com/kdi6033/react/releases/tag/react-25-12-v1.0)   
React에서 4개의 스위치를 만들어 동작 시키면 IoT PLC 가 동작하게 프로그램 합니다.   

<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100">   [12-1] Led 만들어 mqtt 데이터 연결

```
{"type":3,"email":"kdi6033@gmail.com","mac":"D8:13:2A:C3:73:58","temp":28.1,"humi":48,"in":[0,0,0,0],"out":[0,0,0,0]}
다음과 같이 메세지가 들어 옵니다. "in":[0,0,0,0] 으로 들어오는 데이터를 4개의 led를 만들어서 연결해줘
```
설명:    
- LED 상태 관리: ledStates라는 상태 변수를 추가하여 "in" 배열 값을 저장합니다.
- LED 상태 렌더링: ledStates 배열에 따라 4개의 LED가 렌더링되며, 각 값이 1이면 on, 0이면 off로 상태가 표시됩니다.
- CSS: 각 LED는 원형으로 표현되며, 상태에 따라 초록색(켜짐)과 빨간색(꺼짐)으로 표시됩니다.
- useEffect: 메시지가 들어올 때마다 MAC 주소를 확인하고, 일치하면 "in" 값으로 LED 상태를 업데이트합니다.

<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100">    [12-2] 스위치 만들어 mqtt 통신으로 데이터 보냄    

[IoT PLC 통신프로토콜 보기](https://github.com/kdi6033/i2r?tab=readme-ov-file#%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C)    
```
스위치 4개를 만들고 첫번째 스위치를 on 시키면
{"mac":"해당맥어드레스","order":2,"no":1,"value":true}
다음을 mqtt로 보내줘
두번째 스위치는 no=1, 세번째 스위치 no=2, 네번째 스위치 no=3 입니다.
led 그대로 놔두고 스위치 추가해줘
```
기능 설명:
- 스위치 상태 관리: switchStates라는 상태 변수를 사용하여 각 스위치의 상태를 관리합니다.
- 스위치 상태 변경: 사용자가 스위치를 켜거나 끌 때마다 handleSwitchChange 함수가 호출되어 스위치 상태를 토글합니다.
- MQTT 메시지 전송: 스위치가 변경될 때마다 handleSwitchChange 함수에서 해당 MAC 주소, 스위치 번호(no), 그리고 상태(value)를 포함한 MQTT 메시지를 outtopic으로 전송합니다.
- LED 상태 유지: ledStates 배열을 통해 수신한 in 값에 따라 LED 상태가 계속 유지됩니다.
- UI: 각 스위치는 체크박스로 구현되었으며, 스위치가 켜지면 해당 번호에 맞는 데이터를 MQTT로 전송하게 됩니다.

## 12. MongoDB 연결과 사용법
<a href="https://youtu.be/sDjbWRu5gB0">
    <img src="https://github.com/user-attachments/assets/a740712d-5b3c-4dad-9235-4dfd464e1e43" alt="Updating the screen" width="400">
</a>      

[프로그램 다운로드 25-13](https://github.com/kdi6033/react/releases/tag/react-25-13-mongo-v1.0)     
이 React 프로그램은 MongoDB와의 연동을 통해 데이터를 조회하고 업데이트하는 기능을 제공합니다. 사용자는 네 가지 버튼을 통해 다양한 작업을 수행할 수 있습니다.    
- 첫 번째 버튼은 "모든 데이터 가져오기"로, MongoDB에 저장된 모든 데이터를 조회하여 화면에 표시합니다. 
- 두 번째 버튼인 "1개 데이터 가져오기"는 특정 이메일과 MAC 주소로 단일 레코드를 검색해 보여줍니다. 
- 세 번째 버튼은 "Email로 데이터 검색하기"로, 특정 이메일을 기준으로 여러 개의 데이터를 검색합니다. 
- 네 번째 버튼은 "데이터 삽입 또는 업데이트" 버튼은 새로운 데이터를 삽입하거나, 기존 데이터가 있을 경우 업데이트합니다.
  
각 버튼을 클릭할 때 서버에 POST 요청을 보내고, 응답으로 받은 데이터를 화면에 표시하며, 데이터가 업데이트된 경우 자동으로 최신 데이터를 다시 가져와 반영합니다.    

1. 구성
백엔드(Node.js + Express): MongoDB와 통신하는 서버를 구축합니다.
프론트엔드(React): 백엔드 API를 통해 데이터를 주고받습니다.
프로젝트 만들기
```
npx create-react-app react-mongo --template typescript
```
2. 백엔드 구축
먼저, 백엔드에서 MongoDB와 통신하는 API 서버를 구성하겠습니다.
1) Node.js 서버 설정
db-server.js를 만듭니다.
프로젝트 초기화: 터미널에서 Node.js 프로젝트를 초기화합니다.
```
mkdir backend
cd backend
npm init -y
```
필요한 패키지 설치: Express와 MongoDB 클라이언트를 설치합니다.
```
npm install express mongodb cors body-parser
```
Express 서버 설정: 백엔드에서 MongoDB와 통신하는 API를 구축합니다. mongo-client.js 파일을 생성하고 아래와 같이 작성합니다.
[db-server.js]
```
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 5000;
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'local';
const collectionName = 'localRecord';

app.use(cors());
app.use(express.json()); // JSON 파싱 미들웨어 추가

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
  const { email, mac } = req.body;
  console.log("2");

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected post record findOne');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const record = await collection.findOne({ email, mac });
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
  const { email, mac, ...rest } = req.body; // email과 mac을 제외한 나머지 필드

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected post updateOne');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const result = await collection.updateOne(
      { email, mac },
      { $set: rest },
      { upsert: true }
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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```
2) 백앤드에서 db-server.js 실행:
서버를 실행하여 API가 정상적으로 작동하는지 확인합니다.
```
node db-server.js
```
이제 백엔드에서 MongoDB와 통신할 수 있는 API 서버가 설정되었습니다.    
3. 프론트엔드 설정 (React)    
React에서는 이 백엔드 API를 통해 데이터를 주고받습니다. MQTTClient가 수신한 메시지를 API 서버로 전송하여 MongoDB에 저장하도록 수정합니다.
1) App.tsx 수정**:
다음 코드를 추가합니다.
[App.tsx]
```
import React, { useState } from 'react';
import './App.css';

function App() {
  const [records, setRecords] = useState<any[]>([]);

  async function fetchAllData() {
    try {
      const response = await fetch('http://localhost:5000/api/records', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({}) // POST 요청에 빈 바디 전송
      });
      const data = await response.json();
      console.log('모든 데이터:', data);
      setRecords(data);
    } catch (error) {
      console.error('모든 데이터를 가져오는 중 오류 발생:', error);
    }
  }


  async function fetchSingleData() {
    try {
      const response = await fetch('http://localhost:5000/api/record', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: 'kdi6033@gmail.com', mac: 'B0:A7:32:1D:4C:B6' })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('1개 데이터:', data);
      setRecords([data]);
    } catch (error) {
      console.error('1개 데이터를 가져오는 중 오류 발생:', error);
    }
  }

  async function fetchFindArrayData() {
    try {
      const response = await fetch('http://localhost:5000/api/findArray', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: 'kdi6033@gmail.com' }) // email로만 검색
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('findArray로 가져온 데이터:', data);
      setRecords(data);
    } catch (error) {
      console.error('findArray로 데이터를 가져오는 중 오류 발생:', error);
    }
  }

  async function insertOrUpdateData() {
    try {
      const response = await fetch('http://localhost:5000/api/upsert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: 'kdi6033@gmail.com', mac: 'B0:A7:32:1D:4C:B6', temp: '50' })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('업데이트 또는 삽입된 데이터:', data);
      fetchAllData(); // 업데이트 후 모든 데이터를 다시 가져와서 화면에 표시
    } catch (error) {
      console.error('데이터를 삽입 또는 업데이트하는 중 오류 발생:', error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>MongoDB에서 가져온 레코드</h2>
        </div>
      </header>

      {/* main 태그로 감싸기 */}
      <main>
        <ul>
          {records.map((record, index) => (
            <li key={index}>{JSON.stringify(record)}</li>
          ))}
        </ul>
        <button onClick={fetchAllData}>모든 데이터 가져오기</button>
        <button onClick={fetchSingleData}>1개 데이터 가져오기</button>
        <button onClick={fetchFindArrayData}>Email로 데이터 검색하기</button>
        <button onClick={insertOrUpdateData}>데이터 삽입 또는 업데이트</button>
      </main>
    </div>
  );
}

export default App;
```
## 13. MongoDB, MQTT 서버 프로그램
<a href="https://youtu.be/TT5mNjH4skc">
    <img src="https://github.com/user-attachments/assets/6e2aba35-24c3-48ab-8027-ca3333af5845" alt="Updating the screen" width="400">
</a>     

[프로그램 다운로드 25-14](https://github.com/kdi6033/react/releases/tag/react-25-14-mqtt-mongodb-v1.0)  
- 서버 프로그램은 MQTT, mongoDB 두개의 프로그램을 연결하면 완성 됩니다.    
- MQTT 프로그램은 경량이라 react에 포함을 시키지만 mongoDB는 서버에 구축해야 합니다.     
- react 프로그램은 사용자측에서 동작함으로 보안이 누출 되기 쉬운 구조이므로 서버에 구축하여 api로 연결해서 사용 합니다.    
- 25-13 mongodb 프로그램에 25-8 mqtt 프로그램을 포합시키겠습니다. 그리고 mqtt를 install 합니다.
```
npm install mqtt
```
## [프로젝트 25-15] 단순화한 기초 서버 프로그램
[프로그램 다운로드 25-15](https://github.com/kdi6033/react/releases/tag/react-25-15-mongo-mqtt-v1.0)  
mqtt와 mongodb를 합쳐서 서버의 기초프로그램은 완성을 하였습니다. 지금부터는 서버 프로그램을 확장하기 위해서는 프로그램을 심플하고 분석하기 좋게 구조를 변경 시키겠습니다.

- App.tsx는 전체 프로그램을 한눈에 볼수 있게 간단하게 하기 위해 서브 프로그램만 보이게 하며, 여기에 구성한 프로그램은 MachineOverview.tsx 로 구성하고 DB 데티터를 다루기 위해 DataHandler.tsx를 만들어 프로그램을 이전 했습니다.ㅇ
- 데이터베이스 검색을 위해 사용한 email, mac 등의 변수로 전달 하게 수정 하였습니다. 그래야 다양한 DB를 검색 할 수 있습니다.

디스플레이에 관련된 것을 App에서 분리 합니다.    

<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100">   [15-1] App에서 디스플레이 분리
```
결과를 App.tsx 에 위치하니 프로그램이 복잡해요
App.tsx의 모든 내용을 components 에 MachineOverview.tsx 를 만들어 여기에 작성해줘
mqtt 로 들어오는 정보는 MachineOverview.tsx 에 전달하기도 하지만 db와 하드에 데이터를 저장하기도 하니 App.tsx에서 데이터를 받아 MachineOverview.tsx와 하위 클래스에 hook으로 전달해 줘요
한글로 설명하고 수정된 모든 프로그램 보여줘
```
DB에 사용하는 데이터를 변수화 하여 범용적으로 만듭니다.    

<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100">   [15-2] DB데이터 변수화
```
body: JSON.stringify({ email: 'kdi6033@gmail.com' }) // email로만 검색
const intopic = 'i2r/kdi@gmail.com/out';
const outtopic = 'i2r/kdi@gmail.com/in';
body: JSON.stringify({ email, mac: 'B0:A7:32:1D:4C:B6' })
MachineOverview에서 email과 mac 값을 입력할 수 있는 변수로 처리해줘
```

DB와 관현된 프로그램을 별도의 tsx로 만들어 App.tsx에서 분리하고 다른 tsx에서도 이를 활용 할 수 있게 합니다.    

<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="80">   [15-3] DB 독립 tsx로 만듬
```
async function fetchAllData() {
    try {
      const response = await fetch('http://localhost:5000/api/records', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({}) // POST 요청에 빈 바디 전송값을
      });
      const data = await response.json();
      console.log('모든 데이터:', data);
      setRecords(data);
    } catch (error) {
      console.error('모든 데이터를 가져오는 중 오류 발생:', error);
    }
  }
App.tsx 에 DB와 견련된 프로그램을 별도의 tsx로 만들어 App.tsx를 단순하게 만들어줘
```
생성된 파일 구조
```
src/
├── App.tsx
├── components/
│   ├── DataHandler.tsx
│   ├── MachineOverview.tsx
│   └── MQTTClient.tsx
└── App.css

```
# React로 완성하는 실전 IoT PLC UI
## 1. IoT PLC UI 설계
실전 프록그램을 만들기 위해 필요한 정보와 개념을 설명 합니다.
### 1.1 사용자 접속
여러명의 사용자가 접속을 하면 email을 기반으로 사용자에게 적합한 ui를 제공해야 합니다.
<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="80"> 로그인 설계
```
다수의 사용자가 접속하는 로그인 설계 어떻게 하면 되나요
```
다수의 사용자가 접속하는 로그인 설계를 할 때 중요한 요소는 보안, 세션 관리, 사용자 데이터 분리, 실시간 업데이트입니다. 다음은 여러 사용자가 접속할 수 있는 시스템을 위한 로그인 설계의 주요 개념과 단계입니다.

1. 사용자 인증 방식
JWT (JSON Web Token): 토큰 기반 인증을 사용하여 서버는 사용자의 세션을 유지하지 않고 토큰으로 사용자 상태를 관리합니다. 사용자가 로그인하면 서버에서 인증된 사용자의 정보로 JWT를 발급하고, 클라이언트가 이 토큰을 API 요청마다 포함해 사용합니다.
OAuth 2.0: Google, Facebook, GitHub 같은 외부 인증 서비스를 사용할 수 있으며, 로그인 보안 강화를 위해 유용합니다.
Session 기반 인증: 서버에서 사용자의 로그인 상태를 세션으로 유지하고, 클라이언트는 쿠키를 통해 세션 ID를 전달하여 상태를 확인하는 방식입니다.
2. 데이터베이스 구조
각 사용자에 대한 정보를 저장하는 테이블 또는 컬렉션을 만들고, 이곳에서 이메일, 비밀번호 해시, PLC와 관련된 데이터를 저장합니다.
```
- userId: string (고유 사용자 ID)
- email: string (사용자 이메일)
- passwordHash: string (비밀번호 해시)
- lastLogin: Date (마지막 로그인 시간)
- createdAt: Date (계정 생성일)
- plcDevices: [PLC_ID, PLC_NAME, ...] (사용자가 제어할 PLC 목록)
```
이 구조는 사용자가 로그인을 할 때, 자신의 PLC 목록을 불러오고 그와 연결된 데이터를 제어할 수 있게 합니다.

3. 다중 세션 관리
Refresh Token: JWT와 함께 사용되는 refresh token을 통해 만료된 액세스 토큰을 갱신하여 지속적으로 세션을 유지할 수 있습니다. 이를 통해 다중 세션(웹, 모바일, 태블릿 등에서 동시에 로그인)을 관리할 수 있습니다.
세션 제한: 특정 계정에서 동시에 몇 개의 세션이 허용될지를 결정할 수 있습니다. 예를 들어, 한 계정당 3개의 세션을 허용하거나, 한 번에 한 기기에서만 로그인하도록 할 수 있습니다.
4. 권한 및 데이터 접근 관리
사용자가 로그인한 후, 각 사용자가 접근할 수 있는 PLC 데이터는 해당 사용자의 권한과 소유한 장비에 따라 다르게 제공됩니다. 이때, role-based access control (RBAC) 모델을 사용할 수 있습니다.

Admin: 모든 PLC에 대한 접근 가능
User: 자신의 PLC에만 접근 가능
데이터베이스에서 사용자의 이메일을 기준으로 그 사용자에게 할당된 PLC 데이터를 불러와 처리합니다.
```
- plcId: string (PLC 고유 ID)
- userEmail: string (사용자 이메일)
- mac: string (PLC의 MAC 주소)
- type: number (PLC 타입: 2, 3, 4)
- temp: number (온도)
- humi: number (습도)
- in: [number] (입력 상태)
- out: [number] (출력 상태)
```
5. 실시간 업데이트
사용자별로 각 PLC에서 발생하는 실시간 데이터를 업데이트하기 위해서, MQTT 통신을 이용해 각 사용자가 소유한 PLC의 상태를 실시간으로 UI에 반영할 수 있습니다.

각 사용자가 로그인을 하면, 서버에서 사용자의 이메일에 맞는 PLC 정보를 구독(subscribe)하여 실시간으로 데이터를 받아 처리합니다.
새로운 데이터가 수신되면 해당 사용자의 UI에 데이터를 업데이트합니다.
6. 안전한 비밀번호 저장
비밀번호는 반드시 해시(Hash) 처리된 상태로 데이터베이스에 저장해야 합니다. 이를 위해 bcrypt 같은 해시 알고리즘을 사용하여 비밀번호를 암호화하고 저장합니다. 로그인 시에도 비밀번호는 해시값과 비교하여 인증합니다.

7. 로그인 과정
사용자가 이메일과 비밀번호로 로그인 시도
서버에서 이메일로 사용자 정보 조회
저장된 비밀번호 해시와 비교하여 인증 성공 시 JWT 또는 세션 생성
사용자의 이메일에 해당하는 PLC 정보를 로드
클라이언트는 로그인 이후 JWT 토큰을 사용하여 PLC 제어 및 데이터 조회
이 설계에 따라 사용자는 각기 다른 PLC를 동시에 제어할 수 있고, 실시간으로 UI가 업데이트되며, 안전한 로그인을 유지할 수 있습니다.

### 1.2 location
- location은 웹 애플리케이션에서 사용자의 현재 페이지 URL이나 경로에 대한 정보를 제공하는 객체입니다.
- React에서는 react-router-dom 라이브러리의 useLocation 훅을 통해 URL 경로 정보를 가져올 수 있습니다. 이 훅은 현재 경로, 검색 문자열(query string), 해시(hash) 등을 제공하며, 페이지 이동 시 해당 정보가 변경되면 자동으로 업데이트됩니다.
- location 객체를 통해 각 페이지의 URL을 이용해 상태를 관리하거나 특정 정보를 넘길 수 있습니다.
- 예를 들어, 특정 MAC 주소를 포함한 URL을 사용해 해당 MAC 주소에 해당하는 장비의 상세 정보를 표시할 수 있습니다. 사용자는 이 URL을 통해 원하는 장비를 조회하고, location을 이용해 실시간으로 데이터를 받아 화면에 표시할 수 있습니다.
```
import { useLocation } from 'react-router-dom';

function MyComponent() {
  const location = useLocation();
  console.log(location.pathname);  // 현재 경로
  console.log(location.search);    // 검색 문자열
}
```

### 1.3 wrapper
- wrapper는 흔히 여러 컴포넌트를 감싸거나 특정 기능을 추가하기 위해 사용되는 컴포넌트입니다.    
- wrapper를 사용하면 공통 스타일이나 기능을 자식 컴포넌트들에 일괄적으로 적용할 수 있어 효율적입니다. 
- Page03Wrapper와 같은 컴포넌트를 통해 특정 페이지(Page-03)의 고유 상태 관리와 데이터 업데이트 기능을 구현하고 있습니다. 
예를 들어, Page03Wrapper가 location을 사용해 MAC 주소를 받아 처리하도록 하고, 새로운 MQTT 메시지가 도착하면 해당 MAC 주소의 상태를 업데이트하도록 구현할 수 있습니다.
- 이를 통해, 공통된 로직과 스타일을 손쉽게 관리할 수 있습니다.
```
function Page03Wrapper({ children }) {
  return (
    <div className="wrapper">
      {/* 공통 스타일과 로직이 적용됨 */}
      {children}
    </div>
  );
}
```
location과 wrapper를 활용하여 MAC 주소를 페이지에 전달하고, 컴포넌트 상태를 일관되게 관리함으로써 사용자 인터페이스를 효율적으로 구성할 수 있습니다.

### 1.4 ChatGPT에 IoT PLC 기본정보 입력
지금까지는 IoT PLC 를 제어어하기 위한 React의 기본 개면을 설명했습니다. 프로그램의 구성 부터 설계 하겠습니다.      
<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="80"> IoT PLC 정보 입력   
```
사용자가 이메일 id로 접속하면 mac address로 구분되는 IoT PLC를 page 02 03 04 로 구분해서 입력과 출력을 제어하는 ui를 구성해서 보여줘
서버는 mongodb와 연동하고 사용자는 users 이름의 collection 으로, plc는 localRecord로 관리 합니다.
이메일 하나에 plc는 여러 개가 존재 합니다.
이메일로 로그인 하면 여러 개의 전체 plc 가 보이고 plc를 선택하면 출력 입력을 제어하는 상세 페이지가 보입니다.
plc는 서버와 mqtt 으로 통신을 받기도 하지만 실시간으로 현장에서 변화된 입력 상태와 온도 습도 등을 보내면 실시간으로 ui에 표시해야 합니다.
운전 중에 새로운 plc가 들어오면 ui와 db 가 업데이트 되어야 합니다.
상세 페이지에서는 해당하는 mac 데이터가 들어오면 ui를 업데이트 합니다.
이메일에 따라 전체 plc를 보여주는 것은 MachineOverview.tsx 구성하고
상세페이지에서 plc는 세가지 종류가 있는데 Page-02, Page-03, Pag-04로 구분하고 싶어요 
전체 프로그램은 location 과 wrapper를 사용해서 구성 합니다.
db의 데이터 구조는 다음과 같습니다.
{"mac":"D8:13:2A:C5:C3:7C","email":"kdi6033@gmail.com","humi":45,"in":[0,0,0,0],"name":["D8:13:2A:C5:C3:7C-1",
  "Led0-1","Led1","Led2","Led3","Switch0-1","Switch1","Switch2","Switch3"],"out":[0,0,0,0],"temp": 23.7,"type": 3}
여기서 type=2 이면 Page-02, type=3 이면 Page-03, type=4 이면 Page-04 로 연결됩니다.
프로그램을 위해 데이터 구조와 처리를 어떻게 햐야 하는지 설명해줘 
```
이와같이 chatgpt에 프로젝트의 기본 개념을 입력합니다. 응답은 생략 하겠습니다.    
## 2. React iotplc 시작하기
"iotplc" 이름으로 React를 typescripot로 시작 합니다.
```
npx create-react-app iotplc --template typescript
```
- 서버를 구성하기 위해서는 mqtt 와 db(mongoDB)를 연결해야 합니다. 
- mqtt 연결 프로그램은 크가가 작아 크라이언트 상에서 구동하게 설계하며, 
- db는 보안의 이유로 서버에서 api로 서버에서 구동하도록 설계 합니다.
- frontend 디렉토리를 만들어 앞에서 생성된 모든 프로그램을 여기로 옮기며,
- backend 디렉토리를 만들어 db 프로그램을 여기에 구성 합니다.
- frontend/src/compnents 디렉토리를 만들어 App에서 header를 분리하여 여기에 구성 합니다.
```
│  
└─iotpl
    ├─backend- 
    │      db-server.js
    │      생략
    └─frontend
        │  생략
        ├─public
        │      생략
        └─src
            │  App.css
            │  App.tsx
            │  생략
            └─components
                    Header.css
                    Header.tsx
```


location 과 wrapper 의 개념을 설명하겠습니다.    
<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="80"> header 분리
```
App.tsx 의 header를 components/header.tsx 로 분리해줘
header 왼쪽에 햄버거 버튼을 만들고 "로그인", "회원가입" 버튼을 만들어 줘
로그인을 누르면 id로 email, pw 입력창을 만들어 로그인하게 해줘
회원가입을 누르면 email 입력란을 만들고 pw 입력창은 확인까지 2개를 만들어줘 
입력창을 작성하고 "회원가입"을 누르면 db-server.js의 '/api/record'로 검색해서 같은 이름이 있으면 경고를 알려주고
없으면 '/api/upsert'를 이용해 정보를 추가해줘
```
로그인 진행과
```
로그인을 누르면 id와 pw 를 검색하여 로그인을 완성해줘
 '/api/record'를 이용해 id 가 존재하는지 검토하고 없으면 경고해줘, 성공한 후에는 pw 검토를 똑같은 과정으로 진행해줘
```
다음은 header 에서 진행되는 프로그램 입니다.
```
// components/Header.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);
  const [signupOpen, setSignupOpen] = useState<boolean>(false);
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 로직 추가 가능
    alert(`로그인 성공: ${id}`);
    setLoginOpen(false);
  };

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
  
    try {
      // 이메일 중복 확인을 위한 API 요청
      const response = await fetch('http://localhost:5000/api/record', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: id, collectionName: 'users' }), // email로 검색, collectionName 추가
      });
  
      const existingUser = await response.json();
  
      if (existingUser) {
        // 이미 같은 이메일이 존재할 경우
        alert('이미 존재하는 이메일입니다.');
        return;
      }
  
      // 중복이 없으면 회원가입 로직 진행 (데이터 삽입)
      const insertResponse = await fetch('http://localhost:5000/api/upsert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: id, pw: password, collectionName: 'users' }), // email과 pw를 삽입, collectionName 추가
      });
  
      if (insertResponse.ok) {
        alert('회원가입 성공');
        setSignupOpen(false); // 모달 닫기
      } else {
        alert('회원가입에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('서버 오류로 인해 회원가입을 할 수 없습니다.');
    }
  };

  return (
    <header className="App-header">
      <div className="menu-container" style={{ display: 'flex', alignItems: 'center' }}>
      <h2 style={{ marginLeft: '50px' }}>IoT PLC 콘트롤 시스템</h2>
        {/* 햄버거 메뉴 버튼 */}
        <button className="hamburger-button" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* 메뉴가 열렸을 때 */}
      {menuOpen && (
        <div className="menu">
          <button onClick={() => { setMenuOpen(false); setLoginOpen(true); }}>로그인</button>
          <button onClick={() => { setMenuOpen(false); setSignupOpen(true); }}>회원가입</button>
        </div>
      )}

      {/* 로그인 모달 */}
      {loginOpen && (
        <div className="menu">
          <div className="menu-container">
            <input
              type="text"
              placeholder="아이디"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>로그인</button>
            <button onClick={() => setLoginOpen(false)}>취소</button>
          </div>
        </div>
      )}

      {/* 회원가입 모달 */}
      {signupOpen && (
        <div className="menu">
          <div className="menu-container">
            <input
              type="text"
              placeholder="email 주소"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={handleSignup}>회원가입</button>
            <button onClick={() => setSignupOpen(false)}>취소</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
```

