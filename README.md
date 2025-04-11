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
[Github 편집 사이트](https://docs.github.com/ko/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links)

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
# React로 시작하는 IoT PLC UI 기초과정
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
<a href="https://youtu.be/VZIVyQeKRKg">
    <img src="https://github.com/user-attachments/assets/cbe0daaf-da91-427e-b8b8-3ad4e7181b23" alt="Conditional rendering" width="400">
</a>

[프로그램 다운로드 25-3](https://github.com/kdi6033/react/releases/tag/react-rendering-lists-v1.0)    

이 프로그램은 useState를 사용해 로그인 여부를 상태로 관리하며, 로그인 상태에 따라 다른 UI를 보여주는 조건부 렌더링을 구현했습니다. 사용자가 로그인 버튼을 클릭하면 isLoggedIn 상태가 true로 변경되어 로그인 화면이 나타나고, 로그아웃 버튼을 클릭하면 false로 변경되어 로그아웃 화면이 나타납니다.    

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
[프로그램 다운로드 25-9](https://github.com/kdi6033/react/releases/tag/react-i2r-arduino-basic-v1.0)        

이제부터 i2r-03 IoT PLC 를 연결하는 과정을 설명 드리겠습니다.    
앞에서 설명한 MQTT 프로그램에서 topic을 PLC의 토픽과 일치 시키면 통신을 진행 할수 있습니다. 브로커에서 토픽이 중복되지 않게 자신의 이메일을 입력하여 사용하세요

-브로커를 결정하새요 다음 예시는 ai.doowon.ac.kr 을 사용하는 것으로 하겠습니다.
- MQTT 브로커(mqtt://ai.doowon.ac.kr:1803)에 연결한 후, 특정 토픽에서 메시지를 구독합니다.
- 메시지가 들어오면 이를 즉시 화면에 출력합니다.
- 클라이언트가 페이지를 벗어나면 연결이 해제됩니다.    
- App.tsx는 React 애플리케이션의 기본 구조를 정의합니다.
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

다음은 좀더 효율적인 방법으로 ChatGPT에 요구한 프로그램 입니다.     

<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100"> MQTT 프로그램 

```
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        두원공대 메카트로닉스과 김동일 MQTT
      </header>
      <main>
        메인 프로그램
      </main>
    </div>
  );
}

export default App;
mqtt 연결프로그램 만들어줘
브로커주소:ai.doowon.ac.kr 포트:1803 intopic:i2r/kdi6033@gmail.com/out  outtopic:i2r/kdi6033@gmail.com/in
mqtt 프로그램은 components/MQTTClient 에 만들어줘 들어온 데이터는 hook를 이용해서 App 전달하고 이것을 디스플레이 해줘 
```
App.tsx
```
// App.tsx
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MQTTClient from './components/MQTTClient';

function App() {
  const [mqttMessage, setMqttMessage] = useState<string>('');

  // MQTT 데이터가 들어올 때 실행될 함수
  const handleReceivedMessage = (message: string) => {
    setMqttMessage(message);
  };

  return (
    <div className="App">
      <header className="App-header">
        두원공대 메카트로닉스과 김동일 MQTT
      </header>
      <main>
        메인 프로그램
        <MQTTClient onMessageReceived={handleReceivedMessage} />
        <div>
          <h2>Received MQTT Message:</h2>
          <p>{mqttMessage}</p>
        </div>
      </main>
    </div>
  );
}
export default App;
```
MQTTClient.tsx
```
import React, { useEffect } from 'react';
import mqtt from 'mqtt';

interface MQTTClientProps {
  onMessage: (message: string) => void;
}

const MQTTClient: React.FC<MQTTClientProps> = ({ onMessage }) => {
  const brokerUrl = 'mqtt://ai.doowon.ac.kr:1803';
  const intopic = 'i2r/kdi6033@gmail.com/out';
  const outtopic = 'i2r/kdi6033@gmail.com/in';

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
        onMessage(newMessage); // 최신 메시지만 전달
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
  }, [brokerUrl, intopic, outtopic, onMessage]);

  return null;
};

export default MQTTClient;
```

[node red 25-8-1 소스파일](https://github.com/kdi6033/react/releases/tag/react-25-8-1-v1.0)   

## 9. MQTT Hook i2r-03 IoT PLC 연결
<a href="https://youtu.be/ymZNHD4hQZE">
    <img src="https://github.com/user-attachments/assets/6fda3a19-e210-40a2-a23d-e5abb8f74e62" alt="Updating the screen" width="400">
</a>    

[프로그램 다운로드 25-10](https://github.com/kdi6033/react/releases/tag/react-25-10-MqttHookIotPlc-v1.0)   

<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100">  [25-10]    

```
이 프로그램에서 ui창을 components/Display 별도의 서브 프로그램으로 만들어줘
mqtt로 들어온 메세지는 App.tsx 로 전달해 하위 모든 서브 프로그램이 바로 반영 할 수 있게 hoook 을 이용해서 전달하고
이 데이터를 Display에 전당해서 ui를 작성해줘
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

## 10. 정보(email,mac) 저장과 읽기
<a href="https://youtu.be/ebBb9uQH0dk">
    <img src="https://github.com/user-attachments/assets/56e51862-d8d2-478c-8f9b-a0ff939f2559" alt="Updating the screen" width="400">
</a>     

[프로그램 다운로드 25-11](https://github.com/kdi6033/react/releases/tag/react-25-11-v1.0)  
이메일 맥어드레스 입력창 만들고 정보 저장하고 읽어와 이 데이터의 
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

MQTT 연결을 중앙에서 관리하기 위해 클라이언트 연결을 한 곳에서 처리하고, 필요할 때마다 이를 다른 컴포넌트에서 재사용할 수 있도록 구현할 수 있습니다. 이를 위해 MQTTService라는 별도의 파일을 만들어 MQTT 클라이언트를 중앙 집중식으로 관리합니다.    
[프로그램 다운로드 25-11-1](https://github.com/kdi6033/react/releases/tag/react-25-11-1-v1.0)     
개선된 구조
- MQTTService.ts: MQTT 클라이언트를 관리하는 파일.
- App.tsx: 모든 하위 컴포넌트에서 MQTTService를 참조.
- MQTTClient.tsx와 Display.tsx: 공통 MQTT 클라이언트를 사용.
- MQTTService를 추가: 중앙에서 MQTT 클라이언트를 관리하도록 설계.
- MQTTService.getInstance로 재사용: 모든 컴포넌트가 동일한 클라이언트를 공유.
- 중복 연결 제거: MQTTClient와 Display가 하나의 MQTT 연결을 사용.

파일 구조
```
└─src
    │  App.css
    │  App.tsx
    ├─components
    │      Display.css
    │      Display.tsx
    │      MQTTClient.tsx
    │      MQTTService.tsx
    └─contexts
            ConfigContext.tsx
```
App.tsx
```
//App.tsx
import React, { useState } from 'react';
import './App.css';
import MQTTClient from './components/MQTTClient';
import Display from './components/Display';
import { ConfigProvider } from './contexts/ConfigContext'; // ConfigProvider 사용

function App() {
  const [mqttMessage, setMqttMessage] = useState<string | null>(null);

  const handleMqttMessage = (message: string) => {
    setMqttMessage(message);
    console.log('하드웨어 기록: ', message);
  };

  return (
    <ConfigProvider>
      <div className="App">
        <header className="App-header">MQTT 통신 프로그램</header>
        <main>
          <MQTTClient onMessage={handleMqttMessage} />
          <Display message={mqttMessage} />
        </main>
      </div>
    </ConfigProvider>
  );
}

export default App;
```
MQTTService.tsx
```
// components\MQTTService.tsx
import mqtt from 'mqtt';

class MQTTService {
  private static instance: MQTTService;
  private client: mqtt.MqttClient;
  private brokerUrl = 'mqtt://ai.doowon.ac.kr:1803'; // 고정 브로커 URL

  private constructor() {
    this.client = mqtt.connect(this.brokerUrl);

    this.client.on('connect', () => {
      console.log('Connected to MQTT broker');
    });

    this.client.on('error', (error) => {
      console.error('MQTT Connection Error:', error);
    });
  }

  public static getInstance(): MQTTService {
    if (!MQTTService.instance) {
      MQTTService.instance = new MQTTService();
    }
    return MQTTService.instance;
  }

  public getClient(): mqtt.MqttClient {
    return this.client;
  }

  public publish(topic: string, message: string): void {
    this.client.publish(topic, message, (err) => {
      if (err) {
        console.error('Publish Error:', err);
      } else {
        console.log(`Message published to ${topic}: ${message}`);
      }
    });
  }
}

export default MQTTService;
```
MQTTClient.tsx
```
// components\MQTTClient.tsx
import React, { useEffect } from 'react';
import { useConfig } from '../contexts/ConfigContext';
import MQTTService from './MQTTService';

interface MQTTClientProps {
  onMessage: (message: string) => void;
}

const MQTTClient: React.FC<MQTTClientProps> = ({ onMessage }) => {
  const { email } = useConfig();
  const intopic = `i2r/${email}/out`;

  useEffect(() => {
    const mqttClient = MQTTService.getInstance().getClient(); // 중앙 관리 MQTT 클라이언트 가져오기

    // 연결 성공 시, intopic 구독
    mqttClient.subscribe(intopic, (err) => {
      if (!err) {
        console.log(`Subscribed to ${intopic}`);
      } else {
        console.error(`Failed to subscribe to ${intopic}:`, err);
      }
    });

    // 메시지 수신 핸들러
    mqttClient.on('message', (topic, message) => {
      if (topic === intopic) {
        const newMessage = message.toString();
        onMessage(newMessage); // 메시지를 상위 컴포넌트로 전달
        console.log(`Received message from ${intopic}: ${newMessage}`);
      }
    });

    // 에러 핸들러
    mqttClient.on('error', (err) => {
      console.error('MQTT Client Error:', err);
    });

    return () => {
      // 컴포넌트 언마운트 시 토픽 구독 해제
      mqttClient.unsubscribe(intopic, () => {
        console.log(`Unsubscribed from ${intopic}`);
      });
    };
  }, [intopic, onMessage]);

  return <div>MQTT 연결 중...</div>;
};

export default MQTTClient;
```
Display.tsx
```
// components\Display.tsx
import React, { useState } from 'react';
import { useConfig } from '../contexts/ConfigContext';
import MQTTService from './MQTTService';
import './Display.css';

interface DisplayProps {
  message: string | null;
}

const Display: React.FC<DisplayProps> = ({ message }) => {
  const { email, mac, setEmail, setMac } = useConfig();
  const [inputEmail, setInputEmail] = useState(email);
  const [inputMac, setInputMac] = useState(mac);
  const outtopic = `i2r/${email}/in`;

  const handleSave = () => {
    setEmail(inputEmail);
    setMac(inputMac);
  };

  const sendMessage = () => {
    const mqttMessage = JSON.stringify({
      mac: inputMac,
      order: 2,
      value: 'Test Message',
    });

    MQTTService.getInstance().publish(outtopic, mqttMessage); // 메시지 발행
  };

  let macMessage = null;

  if (message) {
    try {
      const parsedMessage = JSON.parse(message);
      if (parsedMessage.mac === mac) {
        macMessage = message;
      }
    } catch (error) {
      console.error('Invalid JSON format:', error);
    }
  }

  return (
    <div className="display-container">
      <div className="form-group">
        <div className="form-row">
          <label>Email:</label>
          <input
            type="text"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            className="input-field"
            maxLength={20}
          />
        </div>
        <div className="form-row">
          <label>MAC Address:</label>
          <input
            type="text"
            value={inputMac}
            onChange={(e) => setInputMac(e.target.value)}
            className="input-field"
            maxLength={20}
          />
        </div>
        <button onClick={handleSave}>Save</button>
      </div>

      <div>
        <h2>Received Message</h2>
        {macMessage && <p>{macMessage}</p>}
      </div>

      <div>
        <h2>Send Message</h2>
        <button onClick={sendMessage}>Send Test Message</button>
      </div>
    </div>
  );
};

export default Display;
```


## 11. IoT PLC UI 만들기
<a href="https://youtu.be/SWQ7683I-hw">
    <img src="https://github.com/user-attachments/assets/4a6411aa-f9b6-4397-8843-3c0e8c4b7357" alt="Updating the screen" width="400">
</a>     

[프로그램 다운로드 25-12](https://github.com/kdi6033/react/releases/tag/react-25-12-v2.0)   
프로그램 다운로드 할 때 "react-25-12-v2.0.zip" 프로그램은 단원 25-10 에서 개선된 프로그램을 제작한 것입니다. 이것을 다운로드 하세요.    

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

실전 프로그램에서 여러 사용자가 동시 접속을 할 때는 mqtt 접속을 효율적으로 하기 위해서는 중앙집중식으로 mqtt를 설계하여 크라언트는 한번만 접속하고 생성된 인스턴스를 공유하는 방식이어야 합니다.
<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100"> mqtt 효율적 설계
```
이 프로그램에서 MQTTClient 에서
const client = mqtt.connect(brokerUrl);
한번 연결을 했는데 Display.tsx 에서 다시
const client = mqtt.connect(brokerUrl);
다시 연결하고 있습니다. 이를 중아집중식으로 효율적으로 다시 프로그램 해줘
```

## 12. MongoDB 연결과 사용법
<a href="https://youtu.be/sDjbWRu5gB0">
    <img src="https://github.com/user-attachments/assets/a740712d-5b3c-4dad-9235-4dfd464e1e43" alt="Updating the screen" width="400">
</a>      

[프로그램 다운로드 25-13](https://github.com/kdi6033/react/releases/tag/react-25-13-mongo-v1.0)  
mongoDB가 어떻게 작동하는지 학습하고 가겠습니다.    
이 React 프로그램은 MongoDB와의 연동을 통해 데이터를 조회하고 업데이트하는 기능을 제공합니다.     
사용자는 네 가지 버튼을 통해 다양한 작업을 수행할 수 있습니다.    
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

## 13. IoT PLC 에 mongoDB 연결
<a href="https://youtu.be/m26b7TIQkx0">
    <img src="https://github.com/user-attachments/assets/c135d48e-3485-415a-9873-05231612def2" alt="Updating the screen" width="400">
</a>    

[프로그램 다운로드 25-14](https://github.com/kdi6033/react/releases/tag/react-25-14-v1.0)  
앞에서 프로그램 한 IoT UI 프로그램에 monogoDB를 연결해 보겠습니다.
- frontend, backend 디렉토리를 만들어 기존의 프로그램은 모두 frontend로 이동하고, db는 backend에 생성 합니다.   
- MQTT 프로그램은 경량이라 frontend 의 UI 프로그램을 ChatGPT에 학습 시키고 ChatGPT에서 다음을 실행합니다.
    
<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100">  db-server.js 추가    
```
email 과 mac 을 만족시키는 데이터를 components/DataHandler.tsx 로 전달하고
/api/upsert 를 이용해 데이터가 없으면 insert, 존재하면 update 해줘
```
다음은 결과 파일 입니다.
App.tsx
```
//App.tsx
import React, { useState } from 'react';
import './App.css';
import MQTTClient from './components/MQTTClient';
import Display from './components/Display';
import DataHandler from './components/DataHandler'; // DataHandler 추가
import { ConfigProvider } from './contexts/ConfigContext'; // ConfigProvider 사용

function App() {
  const [mqttMessage, setMqttMessage] = useState<string | null>(null);

  const handleMqttMessage = (message: string) => {
    setMqttMessage(message);
    console.log('하드웨어 기록: ', message);
  };

  return (
    <ConfigProvider>
      <div className="App">
        <header className="App-header">MQTT 통신 프로그램</header>
        <main>
          <MQTTClient onMessage={handleMqttMessage} />
          <Display message={mqttMessage} />
          <DataHandler message={mqttMessage} /> {/* DataHandler에 메시지 전달 */}
        </main>
      </div>
    </ConfigProvider>
  );
}
export default App;
```
DataHandler.tsx
```
// components/DataHandler.tsx
import React, { useEffect } from 'react';
import axios from 'axios';
import { useConfig } from '../contexts/ConfigContext';

interface DataHandlerProps {
  message: string | null;
}

const DataHandler: React.FC<DataHandlerProps> = ({ message }) => {
  const { email, mac } = useConfig();

  useEffect(() => {
    const processMessage = async () => {
      if (!message) return;

      try {
        const parsedMessage = JSON.parse(message);
        
        // email과 mac이 일치하는지 확인
        if (parsedMessage.email === email && parsedMessage.mac === mac) {
          // upsert API 호출
          const response = await axios.post('http://localhost:5000/api/upsert', parsedMessage);
          console.log('업데이트 또는 삽입 결과:', response.data);
        }
      } catch (error) {
        console.error('메시지 처리 중 오류:', error);
      }
    };

    processMessage();
  }, [message, email, mac]);

  return null; // UI 요소가 필요하지 않으므로 null 반환
};
export default DataHandler;
```

## 14. 출력 시간 설정
<a href="https://youtu.be/E52x05yLvLo">
    <img src="https://github.com/user-attachments/assets/21d01497-b2ff-4787-b463-218783e32249" alt="Updating the screen" width="400">
</a>    

[프로그램 다운로드 25-15](https://github.com/kdi6033/react/releases/tag/react-25-15-vq.0)  

[보드의 프로토콜 링크](https://github.com/kdi6033/i2r#%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C)     

<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100"> 프로토콜 인식      
```
스위치 라벨을 누르면 시간 설정 입력이 보이게 해줘 그리고 저장 버튼을 누르면 mqtt 로 메세지 보내고 "취소" 버튼을 누르면 입력창을 닫아줘
다음은 프로토콜 입니다.
보드의 동작시간을 일일 또는 일주일 단위로 설정한다.
{'order':4,"oper":operation,"pI":pinIndex,"sH":시작시간,"sM":시작분,"eH":종료시간,"eM":종료분, "rM":repeatMode,"dW":dayOfWeek}
pI:pinIndex 출력핀 번호 0번부터 시작한다.
operation : "insert":설정을 추가한다. "delete":한개의 설정을 삭제한다. "deleteAll":모두 삭제한다.
repeatMode : "daily"="d", "weekly"="w"
dayOfWeek : 일주일 중 요일설정 일=0,월=1,화=2,수=3,목=4,금=5,토=6
예제
{"order":4,"mac":"A0:B7:65:CD:4D:34","oper":"insert","pI":0,"sH":9,"sM":55,"eH":9,"eM":57,"rM":"d","dW":0}
오전9시55분부터 9시57분까지 매일 동작한다.
{"order":4,"mac":"A0:B7:65:CD:4D:34","oper":"insert","pI":0,"sH":9,"sM":55,"eH":9,"eM":57,"rM":"w","dW":1}
오전9시55분부터 9시57분까지 매주 월요일에 동작한다.
{"order":4,"mac":"A0:B7:65:CD:4D:34","oper":"list","pI":0}
0번 포트에 저장 리스트를 보여준다.
{"order":4,"mac":"A0:B7:65:CD:4D:34","oper":"delete","pI":0,"slotIndex":0}
0번핀의 0번째 리스트를 삭제한다.
{"order":4,"mac":"A0:B7:65:CD:4D:34","oper":"deleteAll","pI":0}
0번 핀의 저장된 값을 모두 지운다.
```
<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100">보기 버튼      
```
"보기" 버튼을 "저장" 버튼 옆에 추가 해주고 버튼을 누르면 mqtt 로 다음 프로토r콜 보내줘
{"order":4,"mac":"A0:B7:65:CD:4D:34","oper":"list","pI":0}
0번 포트에 저장 리스트를 보여준다.
그리고 day of week의 리스트는 일 월 화 수 목 금 토 로 해줘
```
<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100">리스트 작성      
```
"보기" 버튼을 누른 후에 들어온 mqtt 메세지가 order=4 를 포함하고 있으면 "저장" 버튼 아래 같은 창 .time-settings 에 표시해줘
```
<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100">출력 보정      
```
Start: 22:48
End: 22:50
Repeat: d
Day: 일
이 표시를 "22:48 ~ 22:50 d 일" 한줄로 표시하고 같은줄 오른 쪽에 쓰레기통 아이콘 추가해줘
```
아이콘을 표시하기 위해서는 다음을 설치해야 합니다.
react-icons 설치
```
npm install react-icons
```
tsconfig.json 파일에서 node_modules 내의 타입 파일을 참조하고 있는지 확인합니다. 설정 파일에 아래 내용이 포함되어 있어야 합니다:
```
{
  "compilerOptions": {
    "typeRoots": ["node_modules/@types"]
  }
}
```
아이콘을 사용하려면 아래처럼 가져오세요:
```
import { FaTrashAlt } from 'react-icons/fa';
```
<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100">출력 메세지 보정      
```
프로토콜 중 d는 "매일"로 w는 "매주"로 표기 하고
월 화 수 목 등의 요일 표시는 "매주" 일 때만 표시 해줘
```

## 15 입력 on/off 설정
<a href="https://youtu.be/c7R9GEqEMtc">
    <img src="https://github.com/user-attachments/assets/5364d8d7-7e32-4b9f-978b-fd55ef2e7932" alt="입력 onoff 설정" width="400">
</a>    

[프로그램 다운로드 25-16](https://github.com/kdi6033/react/releases/tag/react-25-16-v1.0)  

LED 라벨을 클릭하여 각 LED의 설정 창을 열고 상태를 관리할 수 있습니다.    
- LED 라벨 클릭 : LED 라벨을 클릭하면 해당 LED의 설정 창이 열립니다.
- 설정 창 기능 : 설정 창에서 사용자는 On/Off 상태, MAC 주소, 포트 번호를 입력해 LED 설정을 관리할 수 있습니다.
- 상태 저장 : 설정 변경 후 "Save" 버튼을 클릭하면 MQTT 메시지를 통해 변경 사항이 실시간으로 저장됩니다.
- LED 상태 조회 : "View" 버튼을 클릭하여 선택한 LED의 현재 설정값을 조회하고, 조회된 상태는 UI에 실시간으로 반영됩니다.
- LED 설정 삭제 : 쓰레기통 아이콘을 클릭하면 선택한 LED 설정이 삭제됩니다. 삭제 후 설정 창은 자동으로 닫힙니다.
- 취소 버튼 : "취소" 버튼을 통해 설정 변경 없이 창을 닫을 수 있습니다. 이때 모든 입력 필드는 초기화됩니다.

<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100"> Led 라벨 추가   
```
led에 라벨을 붙여줘
```
```
      <div>
        <h2>LED States</h2>
        <div className="led-container">
          {ledStates.map((state, index) => (
            <div key={index} className="led-item">
              <span className="led-label">LED {index + 1}</span> {/* 라벨 추가 */}
              <div
                className={`led ${state ? 'on' : 'off'}`}
                title={`LED ${index + 1}`}
              ></div>
            </div>
          ))}
        </div>
      </div>
```
```
.led-label {
  margin-top: 5px; /* LED와 라벨 사이의 간격 */
  font-size: 14px; /* 라벨 폰트 크기 */
  color: #333; /* 라벨 색상 */
}
```
다음과 같이 입력창을 만듭니다.
mqtt 메세지는 i2r-03 기기의 프로토콜을 복사해서 넣어 줍니다.    
<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100">입력포트 설정 창 
```
led 라벨을 누르면 입력창을 만들고 "on 될 때" 맥어드레스 입력창, 출력포트 0~3까지 입력창, on/off 선택 입력창 등 
3가지 입력창을 만들어줘 그리고  "off 될 때"도 똑같이 만들어줘
저장 버튼을 만들어 mqtt로 다음 메세지 보내줘
입력핀의 on off 동작에 따라 출력을 연결한다. 통신에 연결되어 있는 모드 기기의 출력포트를 연결 할 수 있다.
예제
operation : "save":출력설정을 저장한다. "list":설정된 값의 리스트를 요구한다. "delete":선택한 설정 값을 지운다.
{"order":5,"oper":"save","mac":"A0:B7:65:CD:4D:34","portNo":0,"portState":[{"mac":"D4:8A:FC:B5:30:10","port":1,"value":false},{"mac":"B0:A7:32:1D:B3:B8","port":1,"value":true}]}
맥어드레스가 "A0:B7:65:CD:4D:34" 0번 핀의 동작 저장 on 될때 맥어드레스가 "A0:B7:65:CD:4D:34" 0번 핀이 on(true) 된다. off 될때 맥어드레스가 "A0:B7:65:CD:4D:34" 0번 핀이 off(false) 된다. 
```
보기 버튼을 만들어 현재 설정 되어 있는 상태를 읽어 옵니다.
```
보기 버튼을 만들고 다음 메세지를 보내줘
{"order":5,"mac":"A0:B7:65:CD:4D:34","oper":"list","portNo":0}
맥어드레스 "A0:B7:65:CD:4D:34" 기기 0번 핀의 설정 값을 요청한다.
```
```
view 버튼을 누르면 다음 메세지가 들어 옵니다.
Received message from i2r/kdi6033@gmail.com/out: {"order":6,"mac":"D8:13:2A:C5:C3:7C","portNo":0,"portState":[{"mac":"D8:13:2A:C5:C3:7C","port":0,"value":false},{"mac":"D8:13:2A:C5:C3:7C","port":0,"value":true}]}
그런데 입력창에 이를 기록해 주세요
```
취소 버튼을 만들어 창을 닫는다.
```
취소 버튼을 만들고 창을 닫게 해줘
```



# React로 완성하는 실전 IoT PLC UI
## 1. IoT PLC UI 구조 설계
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



## 2. React iotplc 프로젝트 시작
<a href="https://youtu.be/1jTiT87ZlnY">
    <img src="https://github.com/user-attachments/assets/02574b99-6138-4731-9556-7e1053329384" alt="Updating the screen" width="400">
</a>       

[프로그램 다운로드 iotplc-01](https://github.com/kdi6033/react/releases/tag/iotplc-01-v1.3)     

"iotplc" 이름으로 React를 typescripot로 시작 합니다.
```
npx create-react-app iotplc --template typescript
// backend frontend 디렉토리 만들어 db-server.js를 copy 한다.
cd backend
npm init -y
npm install express mongodb cors body-parser nodemailer bcrypt
```
- 서버를 구성하기 위해서는 mqtt 와 db(mongoDB)를 연결해야 합니다. 
- mqtt 연결 프로그램은 크가가 작아 크라이언트 상에서 구동하게 설계하며, 
- db는 보안의 이유로 서버에서 api로 서버에서 구동하도록 설계 합니다.
- frontend 디렉토리를 만들어 앞에서 생성된 모든 프로그램을 여기로 옮기며,
- backend 디렉토리를 만들어 db-server.js를 위치하고 필요한 npm을 설치 합니다.
- components/MQTTClient.tsx 를 복사해서 넣습니다.
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
### 2.1 npm 설치 프로그램 설명
- bcrypt : 로그인에서 비밀번호를 hash 처리함
- nodemailer : 임시 비밀번호를 메일로 보낼 때 필욤함 
- body-parser : Express 애플리케이션에서 클라이언트로부터 전달된 HTTP 요청의 본문(body)을 처리하기 위해 사용되는 미들웨어입니다. 이 미들웨어는 JSON, URL 인코딩된 데이터 등을 파싱하여 req.body 객체에 데이터를 추가해 줍니다. body-parser는 Express 4.x부터 독립된 모듈로 제공되며, 다양한 형식의 요청 데이터를 처리할 수 있습니다.    
- CORS(Cross-Origin Resource Sharing) : 웹 애플리케이션이 다른 출처(origin)의 리소스에 접근할 수 있도록 하는 보안 기능입니다. 웹 브라우저는 기본적으로 다른 출처의 요청을 차단하는 보안 정책(Same-Origin Policy)을 적용하는데, CORS를 통해 특정 출처에서만 리소스를 허용하도록 설정할 수 있습니다.
```
const checkUserResponse = await fetch('http://localhost:5000/api/checkUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: id }),
      });
```
- Express : Node.js 환경에서 동작하는 웹 애플리케이션 프레임워크로, 간단하면서도 유연한 서버 구축을 가능하게 합니다. Express를 사용하면 API 서버, 웹사이트, 마이크로서비스 등 다양한 유형의 서버 애플리케이션을 빠르게 개발할 수 있습니다. ex) app.get('/', (req, res)    
<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="80"> header 분리와 location 사용
```
App.tsx 의 header를 components/header.tsx 로 분리하고 location과 wrapper를 사용해줘
header 왼쪽에 햄버거 버튼을 만들고 "로그인", "회원가입" 버튼을 만들어 줘
```
프로그램은 햄버거 버튼까지 만들어서 저장해 놓았습니다.
Router는 App 컴포넌트를 감싸는 최상위 컴포넌트에 위치하게 하며, App.tsx에서 useLocation을 사용하도록 합니다.
```
// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```
```
// App.tsx
import React from 'react';
import './App.css';
import Header from './components/Header';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <main>
        현재 경로: {location.pathname}
        <div>IoT PLC</div>
      </main>
    </div>
  );
}
export default App;
```
App.css
```
.App {
  text-align: center;
}

.App-link {
  color: #61dafb;
}
```
Header.tsx
```
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="App-header">
      IoT PLC
    </header>
  );
};
export default Header;
```
Header.css
```
.App-header {
    background-color: #282c34;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
```

### 2.2 프로그램 구성
#### 프론트엔드 (React)
- App.tsx: React를 사용해 애플리케이션의 기본 구조를 설정하고, 현재 경로(location.pathname)를 표시합니다.
- Header.tsx: 헤더 컴포넌트로 "IoT PLC 모니터링"이라는 제목을 보여줍니다.
- MQTTClient.tsx: mqtt 라이브러리를 통해 브로커(mqtt://ai.doowon.ac.kr:1803)와 MQTT 통신을 수행합니다. 사용자 이메일을 기준으로 intopic과 outtopic을 구독하고 메시지를 수신하여 App.tsx에 전달합니다.

#### 백엔드 (Node.js Express)
MongoDB 연결: db-server.js에서 mongodb 클라이언트를 사용하여 local 데이터베이스와 localRecord 및 users 컬렉션에 연결합니다.
API 라우트:
- /api/records: MongoDB에서 모든 기록을 조회.
- /api/findArray: 특정 이메일을 기준으로 문서 검색.
- /api/record: 특정 MAC 주소의 기록을 단일 조회.
- /api/upsert: MAC을 기준으로 데이터를 삽입하거나 업데이트하는 기능.
- /api/checkUser 및 /api/checkPassword: 사용자 이메일 존재 여부와 비밀번호 검증.
- /api/upsertUser: 특정 이메일을 기준으로 사용자를 삽입하거나 업데이트.
-/api/signup: 신규 가입 시 임시 비밀번호를 생성하고, 이를 해시 처리하여 MongoDB에 저장하고 이메일로 전송.

### 2.3 Nodemailer와 Bcrypt 통합, location, BrowserRouter
- Nodemailer: gmail 계정을 사용해 임시 비밀번호를 전송하는 기능이 포함되어 있습니다.
- Bcrypt: 비밀번호 보안을 위해 해시 및 비교 기능을 사용하여 안전하게 비밀번호를 관리합니다.
- React Router의 useLocation 훅을 사용하여 현재 경로를 동적으로 표시하며, BrowserRouter를 통해 라우팅을 지원합니다. 

## 3. 로그인 프로그램
<a href="https://youtu.be/1jTiT87ZlnY">
    <img src="https://github.com/user-attachments/assets/e083bba8-0efd-42e0-b6ac-87296baa9a49" alt="Login" width="400">
</a>    

[프로그램 다운로드 iotplc-02](https://github.com/kdi6033/react/releases/tag/iotplc-02-v1.2)     
<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100">  로그인
```
로그인을 누르면 id로 email, pw 입력창을 만들어 로그인하게 해줘
회원가입을 누르면 email 입력란을 만들고 옆에 "가입" "취소" 버튼 만들어줘 
가입을 작성하고 "가입"을 누르면 db-server.js의 '/api/checkUser'로 검색해서 같은 이름이 있으면 경고를 알려주고
없으면 '/api/upsert'를 이용해 정보를 추가해줘
회원가입을 누르면 email로 4글자로 임시비밀번호를 보내는 것으로 수정해줘
email 보낸 후에 '/api/upsertUser' 를 사용해 time 항목으로 한국현재시간, email, pw 저장해줘
로그인을 누르면 id와 pw 를 검색하여 로그인을 완성해줘
 '/api/checkUser'를 이용해 id 가 존재하는지 검토하고 없으면 경고해줘, 성공한 후에는 pw 를 '/api/checkPassword'로똑같은 과정으로 진행해줘
pw 를 hash 처리해줘
hash 처리된 pw로 비교를 진행해줘
```
메일을 보내려면 다음 인증을 진행해야만 합니다.
### 3.1 Google 계정의 보안 설정에서 "2단계 인증"을 활성화와 비밀번호 설정 방법
- Google 계정의 보안 설정에서 "2단계 인증"을 활성화하고, "앱 비밀번호"를 생성하여 Nodemailer에서 사용할 수 있습니다. 이렇게 하면 기본 비밀번호 대신 안전한 앱 비밀번호를 이용할 수 있습니다.
- Gmail 로그인: 먼저 Gmail 계정에 로그인합니다.
- Google 계정 설정으로 이동: Gmail 창에서 오른쪽 상단 프로필 사진을 클릭하고, "Google 계정 관리"를 선택합니다.
- 보안 설정으로 이동: 왼쪽 사이드바에서 보안 탭을 선택합니다.
- 2단계 인증 활성화: '2단계 인증'이 활성화되어 있는지 확인하고, 활성화가 되어있지 않다면, 먼저 이 설정을 완료해야 합니다. 2단계 인증을 활성화해야 앱 비밀번호를 생성할 수 있습니다.
- 앱 비밀번호 생성: '앱 비밀번호' 옵션을 클릭합니다.
- Google 계정 비밀번호를 입력하여 보안 확인을 완료합니다.
- 앱과 기기를 선택할 수 있는 메뉴가 나타납니다. '앱' 목록에서 사용하려는 앱을 선택하고, '기기' 목록에서 해당 기기를 선택한 후 생성을 클릭합니다.
- 앱 비밀번호 확인 및 복사: 생성된 16자리 비밀번호가 나타납니다. 이 비밀번호를 사용해 외부 프로그램(예: Outlook, Mail 앱 등)에서 Gmail에 로그인할 수 있습니다.
- 주의: 앱 비밀번호는 한 번 생성된 이후에는 다시 볼 수 없으므로, 필요한 경우 복사해 안전한 곳에 보관하세요.

<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100">  로그인 메뉴설정
```
로그인 성공하면 새로운 햄버거 메뉴가 나오게 해줘 "설정","전체보기", "로그아웃" 세개 만들어 주고 처음에는 "전체보기"를 실행하고 components/MachineOverview.tsx 만들어 디스플레이 해줘
로그아웃을 누르면 
  const logout = () => {
    localStorage.removeItem('token');
    alert('로그아웃 되었습니다.');
  };
실행하고 나가게 해줘 
```

## 4. JWT (JSON Web Token) 토큰 발행과 관리

<a href="https://youtu.be/TP2E5p_Dbys">
    <img src="https://github.com/user-attachments/assets/2faac744-bd75-4062-869a-c975733fb5b8" alt="Token" width="400">
</a> 

[프로그램 다운로드 iotplc-04](https://github.com/kdi6033/react/releases/tag/iotplc-04-v1.0)   
토큰(Token)은 사용자의 인증 및 권한 부여를 위해 서버에서 발행하는 일종의 인증 정보입니다. 사용자가 로그인할 때 서버는 사용자 정보를 확인한 뒤, 해당 사용자가 특정 리소스에 접근할 권한이 있다는 것을 증명하는 토큰을 생성하여 발급합니다.

주로 JWT(JSON Web Token) 형식으로 사용되며, 서버는 클라이언트에 이 토큰을 전달하고, 이후 클라이언트는 이 토큰을 서버에 제출하여 인증을 받습니다. 이 방식은 서버에 사용자 세션을 저장할 필요 없이 클라이언트 측에서 인증 정보를 유지하게 해, 서버 부하를 줄이고 확장성을 높일 수 있습니다.

토큰은 다음과 같은 구성 요소로 이루어져 있습니다:

- 헤더(Header): 토큰의 타입과 암호화 방식을 포함합니다.
- 페이로드(Payload): 사용자 정보 및 기타 데이터(예: 이메일, 발급 시간 등)가 포함됩니다.
- 서명(Signature): 토큰의 무결성을 확인하기 위한 서명입니다

<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100">  토큰 발행과 관리
```
로그인 성공하면 토큰을 발행하여 localstorage 와 db의 collection name=users 에 token 항목으로 저장하고 logout 하면 두곳에서 토큰 항목을 삭제해줘
토큰에는 email과 time 항목을 포함시켜줘
토큰 항목을 전역적으로 관리하고 MachineOverview 로 이동하면 토큰을 전달하여 email을 표시해줘
```
### 4.1 프로그램 진행
**1. 토큰 생성 및 로그인 절차**
- 로그인 시도: 사용자가 로그인 버튼을 클릭하면 handleLogin 함수가 실행됩니다.
    - 아이디 확인: checkUser API를 호출하여 입력한 아이디가 존재하는지 서버에서 확인합니다. 존재하지 않으면 오류 메시지를 표시합니다.
    - 비밀번호 확인: 아이디가 확인되면 checkPassword API를 호출하여 입력된 비밀번호가 맞는지 확인합니다. 비밀번호가 일치하지 않으면 오류 메시지를 표시합니다.
    - 토큰 발급: 비밀번호가 맞을 경우, 서버에서 새로운 토큰을 생성하여 passwordCheck.token으로 반환합니다.
- 토큰 저장 및 상태 관리:
    - 토큰 발급에 성공하면 saveToken API를 호출해 서버에 발급된 토큰을 저장합니다.
    - localStorage에 토큰을 저장하여 브라우저에서 유지될 수 있도록 하고, isLoggedIn 상태를 true로 설정하여 로그인 상태를 유지합니다.
    - 페이지를 /overview로 이동시켜 사용자가 주요 페이지로 접속하도록 합니다.
  
**2. 토큰 활용**
- TokenProvider 컴포넌트는 전체 애플리케이션에서 토큰을 전역으로 관리합니다.
    - 토큰 전역 관리: TokenContext를 통해 token 상태와 setToken 함수가 제공되며, useToken 훅을 통해 자식 컴포넌트들이 로그인 상태를 확인하거나 토큰을 쉽게 사용할 수 있습니다.
    - 보안 관리: localStorage와 TokenContext를 사용해 각 페이지에서 로그인 상태가 필요한 경우 토큰 정보를 통해 사용자의 접근 권한을 제어할 수 있습니다.
**3. 로그아웃 절차**
- 로그아웃 시도: 사용자가 로그아웃 버튼을 클릭하면 logout 함수가 실행됩니다.
    - 서버에서 토큰 삭제: deleteToken API를 호출하여 서버에서 해당 사용자의 토큰을 삭제하고, 서버의 토큰 관리에 따라 로그아웃 처리가 완료됩니다.
    - 토큰 제거: localStorage에서 토큰을 삭제하고 isLoggedIn 상태를 false로 설정해 애플리케이션 내의 로그인 상태를 초기화합니다.
    - 메인 페이지로 이동: 로그아웃 후 메인 페이지(/)로 이동시켜 로그인 전 상태로 돌아가게 합니다.

### 4.2 프로그램 구조 요약
- App.tsx: 전체 앱을 TokenProvider로 감싸고, 라우터 설정과 메인 콘텐츠 구조를 관리합니다.
- Header.tsx: 사용자 인터페이스와 로그인/로그아웃 관련 UI를 제공하며, 로그인 상태에 따라 다르게 동작하도록 설정되어 있습니다.
- TokenContext.tsx: 로그인 토큰을 전역적으로 관리하는 TokenContext를 정의하여 로그인 및 로그아웃 시 토큰 상태를 업데이트하고 활용할 수 있습니다.

### 4.3 SECRET_KEY 생성과 관리
- .env 파일 생성 및 설정
your_secret_key_value_here 는 64바이트의 랜덤한 16진수 문자열을 사용 하시몀 되겠습니다.    
ex : 8e2c94b9e620d9c3d8f7d5e2f2e2cf4fe91c7d5efe8f1d9d6f4fbc0a0c5e7d5e
```
# .env 파일
SECRET_KEY=your_secret_key_value_here
DATABASE_URL=mongodb://127.0.0.1:27017
PORT=5000
```

### 4.4 Logout 시간설정
다음과 같은 이유로 logout 시간을 설정해야 합니다.
- 보안 위험 증가 : 로그인한 채로 자리를 비운 경우, 누군가가 해당 계정에 접근할 수 있는 위험이 있습니다.
- 세션 만료로 인한 오류 발생 가능성 : 인증 오류가 발생하여 이전에 보던 페이지에서 더 이상 작업을 수행할 수 없고, 때로는 페이지를 새로 고침하거나 다시 로그인해야 할 수도 있습니다.
- 서버 리소스 사용 증가 : 서버가 해당 세션을 유지하기 위해 리소스를 소모할 수 있습니다.

다음은 로그아웃 프로그램을 ChatGPT 가 작성한 것입니다. 본 사이트 프로그램은 모니터링 프로그램으로 24시간 가동할 때가 있어서 일단은 자동로그아웃은 적용을 하지 않고 소개만 해드립니다. 향후 프로그램을 돌려 보다가 문제가 생기면 그 때 보완 하겠습니다.
```
// TokenContext.js
export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [lastActivity, setLastActivity] = useState(Date.now());

  const saveToken = (userToken) => {
    setToken(userToken);
    setLastActivity(Date.now());
    const expireTime = Date.now() + 3600 * 1000; // 현재 시간에서 1시간 후
    localStorage.setItem('userToken', JSON.stringify({ token: userToken, expireTime }));
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('userToken');
  };

  // 페이지 로드 시 토큰 만료 확인
  useEffect(() => {
    const storedToken = JSON.parse(localStorage.getItem('userToken'));
    if (storedToken) {
      const { token, expireTime } = storedToken;
      if (Date.now() > expireTime) {
        logout();
      } else {
        setToken(token);
        setLastActivity(Date.now());
      }
    }
  }, []);

  return (
    <TokenContext.Provider value={{ token, saveToken, logout, setLastActivity }}>
      {children}
    </TokenContext.Provider>
  );
};

```

## 5. 윈도우 HTTPS 설정 및 인증서 설치
https를 연결하려면 인증서를 준비해야 합니다. 연결은 IP, 도메인네임 두가지를 연결해면 좋습니다. 다음은 무료로 사용하는 것을 소개하지만 두가지 중 하나만 연결할 수 있어서 도메인네임으로 설치하는 것을 소개 합니다. 
Windows에서 무료 인증서(예: Let's Encrypt 인증서)를 설치하려면 아래 단계를 따라 진행하세요. Let's Encrypt는 무료 인증서를 제공하며, 일반적으로 Certbot 도구를 사용하여 설치 및 갱신을 자동화할 수 있습니다.    
### 5.1 사전 준비
- 도메인 이름: 도메인을 소유하고 있어야 합니다. (도메인이나 IP 둘중에 하나를 등록 합니다. 두개를 동시에 하려면 유료로 서비스 하는 것 사용해야 합니다.)
- 웹 서버 설치: IIS(Internet Information Services) 또는 Apache, Nginx와 같은 웹 서버가 설치되어 있어야 합니다.
- 80 포트 및 443 포트 열림: 도메인의 HTTP 및 HTTPS 트래픽을 허용해야 합니다.
- 관리자 권한: Windows 관리자 권한이 필요합니다
### 5.2 Certbot 설치와 인증서 발급
- [Certbot 공식 사이트](https://certbot.eff.org/instructions)에 접속합니다.
그림과 같이 윈도우 운영체제 선택
![image](https://github.com/user-attachments/assets/557c5038-479a-4231-a70d-a5889529e54f)
아래 다음을 눌러 프로그램 다운로드
<img width="541" alt="image" src="https://github.com/user-attachments/assets/fd3c12b9-6131-4aeb-be74-4dc06a70791f">
다운로드한 프로그램을 설치 합니다.

![image](https://github.com/user-attachments/assets/ce6f9713-e769-4ca9-b59b-d91a345447d7)

![image](https://github.com/user-attachments/assets/a74ad2dc-e5a9-4842-94a6-8f73999fa2b1)

프로그램이 이제는 서비스를 하지 않는다고 합니다. 다음 사이트를 접속해서 다운로드 하세요. [Certbot 2.9.0](https://github.com/certbot/certbot/releases/tag/v2.9.0)
아래 도메인네임에는 자신의 도메인 네임을 입력하세요
```
cd "C:\Program Files\Certbot\bin"
certbot.exe certonly --standalone -d 도메인네임
```
성공하면 다음 파일이 C:\Certbot\live\  디렉토리에 생성 됩니다.    
인증서: C:\Certbot\live\도메인네임\fullchain.pem    
개인 키: C:\Certbot\live\도메인네임\privkey.pem    
보충설명: 

archive 디렉토리:
모든 인증서 버전을 보관.
백업 및 복원 목적으로 사용.
certX.pem (도메인 인증서)
chainX.pem (중간 인증서 체인)
fullchainX.pem (인증서와 체인 합본)
privkeyX.pem (개인 키)
여기서 X는 인증서 갱신 횟수를 의미합니다.

live 디렉토리:
항상 최신 인증서 버전을 가리키는 심볼릭 링크 제공, 링크파일이어서 파일의 크기는 0KB로 표시되어 있습니다.
서버가 이 디렉토리의 파일을 참조해 인증서를 사용.

- openssl 을 설치하고 다음을 진행한다.
pfx파일을 생성하기 위해서 관리자모드로 콤멘드창을 만들거나 powershell 을 실행합니다.    
```
cd C:\Certbot\live\도메인네임\
openssl pkcs12 -export -out certificate.pfx -inkey privkey.pem -in fullchain.pem
```
password 를 입력하거나 없음으로 진행 하면 됩니다. 그리고 다음 세개의 파일을 만듭니다.
```
openssl pkcs12 -in certificate.pfx -nocerts -nodes -out server.key
openssl pkcs12 -in certificate.pfx -clcerts -nokeys -out server.crt
openssl pkcs12 -in certificate.pfx -cacerts -nokeys -chain -out ca.crt
```
인증서가 올바를게 설정되었는지 다음으로 확인 합니다.
```
certbot certificates
```
다음은 인증서가 정상 동작하는지 알아볼 수 있습니다.
```
인증서 정보 확인
openssl x509 -in fullchain.pem -noout -dates
openssl x509 -in cert.pem -noout -dates
openssl x509 -in ca.crt -noout -text
인증서의 유효 기간 확인
openssl x509 -in ca.crt -noout -dates
인증서 체인 검증
openssl verify -CAfile ca.crt server.crt
연결확인
openssl s_client -connect 도매안네암:포트번호 -CAfile C:\Certbot\live\kdi.doowon.ac.kr\ca.crt
openssl x509 -in server.crt -text -noout
openssl rsa -in server.key -check
```
s_client 명령과 함께 위에서 제공한 CA 파일과 server.key/server.crt를 사용해 서버로 연결할 수 있습니다. 다음과 같이 실행합니다:
```
openssl s_server -accept 443 -cert server.crt -key server.key -CAfile ca.crt
```
-cert 옵션에는 server.crt 경로를 지정합니다.
-key 옵션에는 server.key 경로를 지정합니다.
-CAfile에는 인증 기관의 체인 인증서 (ca.crt)를 사용합니다.
이후 다른 클라이언트에서 s_client 명령을 통해 연결하면, 올바르게 인증되었는지 확인할 수 있습니다:
```
openssl s_client -connect 도메인:포트번호 -CAfile C:\Certbot\live\kdi.doowon.ac.kr\ca.crt
```

### 5.3 인증서 재발급
새로운 인증서는 "도메인네임-0001" 로 생성되어 링크되어 있는 프로그램을 모두 수정 하는 일이 번거럽고 실수가 발생함으로 새로 생성된 것을  "도메인네임" 복사 하는 일이 필요 합니다. 그래서 저는 기존의 것을 모두 지우고 새로 발급받아 인증서 등록을 다시 합니다.
위에서 기술된 인증서를 지웁니다. 그리고 /archive /live 두개의 디렉토리에 해당 파일과 디렉토리를 모두 지웁니다. 
"C:\Certbot\renewal\kdi.doowon.ac.kr.conf" 다음 파일도 삭제 합니다.
``` 
certbot delete --cert-name 도메인네임
certbot delete --cert-name 도메인네임-0001
```
새로운 인증서를 만듭니다.
```
certbot.exe certonly --standalone -d 도메인네임
```
발급이 같은 이름으로 생성되었으면 앞에서 만들었던 pfx, server.key, server.crt, ca.crt 파일을 만듭니다.

### 5.4 IIS에서 HTTPS 설정
<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100">  윈도우 https 설정
```
윈도우에서 https 설정 방법 알려줘
```

IIS(Internet Information Services)를 사용하는 경우:
_ IIS 설치:
Windows 기능 켜기/끄기에서 IIS를 활성화합니다.
IIS 관리자를 실행합니다.
- 인증서 설치:
IIS 관리자에서 왼쪽 트리에서 서버 이름을 선택하고, 오른쪽 패널에서 서버 인증서를 클릭합니다.
오른쪽 작업 창에서 인증서 가져오기를 선택하고, 인증서를 추가합니다.
- HTTPS 바인딩 설정:
IIS 관리자에서 사이트를 선택합니다.
오른쪽 작업 창에서 바인딩 편집을 클릭합니다.
추가 버튼을 클릭하고, 유형을 https로 설정합니다.
사용할 인증서를 선택하고, 포트를 443으로 설정합니다.
- 사이트 테스트:
브라우저에서 https://your-domain.com으로 접속하여 HTTPS가 동작하는지 확인합니다.    

#### 5.4.1 윈도우 인증서 설치
<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100">  윈도우 인증서 설치
```
윈도우에서 무료 인증서 설치 설명해줘
```
다음 순서대로 인증서를 가져 옵니다. 두가지 방법을 소개합니다.
IIS(인터넷 정보 서비스)관리자->서버 인증서 (추천방법)
<img src="https://github.com/user-attachments/assets/e523944d-b1fc-4f2c-a23b-5ec11a049b99" width="800">
<img src="https://github.com/user-attachments/assets/e7168ed6-5aa6-4238-a4e9-a00d7a5bd159" width="800">
<img src="https://github.com/user-attachments/assets/cce446bb-d76d-400b-8b66-1cb86acf81c2" width="800">

다음 방법으로 해도 됩니다.
```
Windows + R를 누르고 mmc를 입력한 후 실행합니다.
mmc->파일->스넵인 추가제거->인증서   선택
컴퓨터계정->로컬컴퓨터->마침->확인
생성된 인증서 확장->웹호스팅-> "인증서"를 마우스 오른쪽으로 선택
위에서 생성된 pxf 파일 선택
```

#### 5.4.2 HTTP 리디렉션
http로 접속을 하면 https 로 접속하게 설정 합니다.
<img src="https://github.com/user-attachments/assets/b24a8026-572d-4820-8965-0c4916f04e45" width="800">
<img src="https://github.com/user-attachments/assets/d82141eb-1ae4-44c7-a8c6-22262efb1ed3" width="800">

#### 5.4.3 바인딩 설정
<img src="https://github.com/user-attachments/assets/101a42c8-c873-4558-9582-c58d50757bfe" width="800">
<img src="https://github.com/user-attachments/assets/ba158d8a-4fa6-4179-8053-c4bfe8348533" width="800">
설정을 마치면 인터넷 정보 서비스를 새로 시작 합니다.
<img src="https://github.com/user-attachments/assets/35fc8376-7c18-4ee6-add4-0d8aed4117cf" width="500">

### 5.5 MongoDB와 React로 데이터 연결하기 - GET
[프로그램 다운로드 25-5-5](https://github.com/kdi6033/react/releases/tag/react-iotplc-5-5-v1.0)   
SSL 설정에 사용해야 하는 파일은 인증서와 개인 키입니다. 디렉터리에 제공된 파일과 심볼릭 링크 중 적합한 파일은 아래와 같습니다:     
- 개인 키 (Private Key)
경로: privkey.pem 또는 server.key
개인 키는 서버가 TLS 통신을 설정하기 위해 사용하는 파일입니다. server.key와 privkey.pem 모두 개인 키로 보이는데, 일반적으로 Let’s Encrypt와 같은 인증 기관에서 생성된 privkey.pem을 사용합니다.    
- 인증서 (Certificate)
경로: fullchain.pem 또는 server.crt
인증서는 클라이언트가 서버를 신뢰할 수 있도록 서버의 신원 정보를 제공합니다. fullchain.pem은 일반적으로 루트 인증서와 체인 인증서를 포함한 전체 인증서 체인을 제공하며, 서버 인증에 권장됩니다.   
다음은 DB 연결 파일 예제 입니다.
```
// SSL 인증서 파일 경로
const sslOptions = {
  key: fs.readFileSync('C:/Certbot/live/kdi.doowon.ac.kr/privkey.pem'), // SSL 인증서의 개인 키
  cert: fs.readFileSync('C:/Certbot/live/kdi.doowon.ac.kr/fullchain.pem'), // SSL 인증서
};
```
1. GET 요청
GET 요청은 클라이언트(React 애플리케이션)가 서버로 데이터를 요청하는 방식입니다. 이 프로그램에서는 fetch 메서드를 사용해 MongoDB 데이터를 가져오기 위해 HTTP GET 요청을 보냅니다.
```
const response = await fetch('https://kdi.doowon.ac.kr:1804/api/records');
```
위 코드는 서버의 /api/records 엔드포인트로 요청을 보내며, 서버는 이를 수신해 데이터를 처리합니다. GET 요청은 주로 데이터를 읽어오는 데 사용되며, 데이터의 변경이나 추가는 발생하지 않습니다.     
2. 서버 응답
서버는 GET 요청을 처리한 후 MongoDB에서 데이터를 조회하고 JSON 형식으로 응답합니다.
예를 들어, Node.js 서버는 다음과 같은 방식으로 응답할 수 있습니다:
```
app.get('/api/records', async (req, res) => {
  const records = await mongoCollection.find({}).toArray();
  res.json(records);
});
```
클라이언트는 이 응답 데이터를 response.json()으로 파싱해 React 상태로 저장하고 UI에 표시합니다. GET 요청과 JSON 응답을 통해 클라이언트는 서버 데이터를 효율적으로 가져올 수 있습니다.

### 5.6 MongoDB와 React로 데이터 연결하기 - POST
[프로그램 다운로드 5-6](https://github.com/kdi6033/react/releases/tag/iotplc-5-6-v1.0)   
1. POST 요청
React 애플리케이션에서 데이터를 가져오기 위해 fetch 메서드를 사용해 POST 요청을 보냅니다.
```
const response = await fetch('https://kdi.doowon.ac.kr:1804/api/records', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({}),
});
```
- method: 'POST': 서버에 데이터를 전송하기 위한 요청 방식.
- headers: 요청 헤더에 Content-Type을 JSON으로 지정해 데이터 형식을 알립니다.
- body: 요청 데이터. 여기서는 빈 객체를 보내지만, 필요한 경우 필터링 조건 등을 추가할 수 있습니다.
2. POST 요청에 대한 서버 응답
서버는 클라이언트의 POST 요청을 처리하고 MongoDB 데이터를 조회한 뒤 JSON 형식으로 응답합니다.
```
app.post('/api/records', async (req, res) => {
  const records = await collection.find({}).toArray(); // 모든 데이터 조회
  res.json(records); // JSON 형식으로 응답
});
```
- 클라이언트 요청을 받고 collection.find({})를 통해 MongoDB에서 모든 데이터를 조회합니다.
- 조회된 데이터를 res.json(records)로 응답하여 React 애플리케이션에서 사용할 수 있도록 전달합니다.

### 5.7 WSS(WebSocket Secure)를 이용한 MQTT 통신 프로그램
[프로그램 다운로드 5-7](https://github.com/kdi6033/react/releases/tag/react-iotplc-5-7-v1.0)   
1. WSS란?
WSS(WebSocket Secure)는 WebSocket을 TLS/SSL(보안 소켓 계층)을 통해 암호화한 프로토콜입니다. WebSocket은 클라이언트와 서버 간의 실시간 양방향 통신을 가능하게 하는 프로토콜이며, WSS는 이를 보안적으로 강화한 방식입니다. 즉, WSS를 사용하면 데이터가 안전하게 암호화되어 전송되므로 외부 공격으로부터 데이터를 보호할 수 있습니다.

2. 프로그램 설명     
이 프로그램은 MQTT를 기반으로 WSS 프로토콜을 사용하여 데이터를 주고받습니다. MQTT는 사물인터넷(IoT) 기기들 간의 경량 메시징 프로토콜로, 브로커를 중심으로 데이터를 발행(Publish) 하고 구독(Subscribe) 하는 구조입니다.
이 코드에서는 MQTT 브로커에 wss://kdi.doowon.ac.kr:1803 주소를 통해 연결합니다. 이 브로커와의 통신은 WSS를 통해 암호화되어 안전하게 이루어집니다.

다음은 mqtt 설정의 예입니다.  Mosquitto의 구성 파일에 다음과 같이 SSL/TLS 설정한 예제 입니다.
"C:\Program Files\mosquitto\mosquitto.conf" 파일에 다음을 설정하고 윈도우 "서비스"에서 mosquitto를 다시 시작합니다.
이 설정으로 Mosquitto 브로커는 1803 포트에서 SSL/TLS를 사용하여 클라이언트와 통신할 것입니다.
```
# WebSocket Secure listener 설정
listener 1803
protocol websockets
cafile C:/Certbot/live/kdi.doowon.ac.kr/ca.crt
certfile C:/Certbot/live/kdi.doowon.ac.kr/fullchain.pem
keyfile C:/Certbot/live/kdi.doowon.ac.kr/privkey.pem
require_certificate false  # 클라이언트 인증서를 요구하지 않을 경우 false로 설정
allow_anonymous true  # 익명 접속 허용 (필요에 따라 true/false로 설정)
```
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
  const brokerUrl = 'wss://kdi.doowon.ac.kr:1803';
  const intopic = 'i2r/kdi6033@gmail.com/out';
  const outtopic = 'i2r/kdi6033@gmail.com/in';

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


## 6. WSS를 이용한 MQTT mongoDB 프로그램
https 환경에서 mqtt mongoDB를 활용하여 IoT PLC 의 모니터링 프로그램을 만든다. 
### 6.1 모든 PLC 나열 및 mqtt 메세지 전달
<a href="https://youtu.be/Pu0yI2KpRfI">
    <img src="https://github.com/user-attachments/assets/99c16310-d9ac-4221-8987-35221e019813" alt="Token" width="400">
</a> 

[프로그램 다운로드 6-1](https://github.com/kdi6033/react/releases/tag/react-iotplc-25-6-0-v1.0)   

ChatGPT에 App.tsx, MQTTClient.tsx, MachineOverview.tsx 를 제시하고    

<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100"> MachineOverview 
```
MachineOverview 를 시작할 때 /api/findArray 를 실행하여 email에 해당하는 기기들을 버튼으로 만들어 프로그램해줘
그리고 나중에 버튼을 누르면 상세 제어페이지로 이동 하겠습니다. 
```
### 6.2 버튼에 데이터 표시
<a href="https://youtu.be/iZYrGCG3Efc">
    <img src="https://github.com/user-attachments/assets/fbad1cfd-c0ad-467f-816f-8b1ec3a8c775" alt="Button Monitor" width="400">
</a>    

[프로그램 다운로드 6-2](https://github.com/kdi6033/react/releases/tag/react-iotplc-6-1-v1.0)     

사옹자의 email 에 해당하는 IoT PLC 데이터를 가져와 버튼에 간략한 데이터를 표시해서 한 화면에 전체 IoT PLC 를 모니터링 할 수 있게 한다.    
<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100"> 버튼을 이용한 모니터링      
```
{"type":3,"email":"kdi6033@gmail.com","mac":"D8:13:2A:C5:C3:7C","temp":24.2,"humi":31,"in":[0,0,0,0],"out":[0,0,0,0]}
 다음과 같이 메세지가 들어 옵니다. "in" 데이타를 led를 만들어 버튼에 표시해줘
그리고 led는 버튼안에 조그맣게 원형으로 표시해줘, 버튼은 자동으로 페이지 폭에 맞게 옆으로 나열하고 
MachineOverview.css를 별도로 작성해줘
in 글짜와 led 같은 줄에 표시하고 out 글씨와 led 같은 줄에 표시해줘
<span className="device-name">{record.name || record.mac}</span> 옆에 type=2 이면 i2r-2,  type=3 이면 i2r-3, type=4 이면 i2r-4 을 작은 글씨로 써줘
여기에 temp 는 "온도"로, humi "습도"로 표시해서 버튼 안에 다음줄에 같은 줄로 표시해줘
record.temp, record.humi 값이 없으면 위 항목 전체를 표시 하지말아줘
```

### 6.3 MachineOverview.tsx를 활용한 상세 페이지 이동 및 데이터 업서트 구현
[프로그램 다운로드 6-3](https://github.com/kdi6033/react/releases/tag/react-iotplc-6-3-v1.0)     
목표
- 목표 1: 버튼 클릭 시 상세 페이지로 이동하도록 React Router를 이용해 라우팅 구현.
- 목표 2: MQTT로 들어온 데이터를 서버에 업서트(upsert)하여 저장하고, 데이터가 없을 경우 name[] 배열을 생성하여 초기화.
- 목표 3: 작성한 코드를 기반으로 학생들이 직접 프로젝트에 적용할 수 있도록 자세히 설명.
#### 6.3.1 버튼 클릭으로 상세 페이지 이동
React Router를 사용하여 버튼 클릭 시 특정 장치(MAC 주소)의 상세 페이지로 이동하도록 구현합니다.
```
버튼을 누르면 상세 페이지로 이동하게 프로그램 해줘
```
React Router의 useNavigate 훅을 사용하여 이동 구현:
```
import { useNavigate } from 'react-router-dom';

const handleRecordClick = (mac: string) => {
  navigate(`/device/${mac}`); // 특정 MAC 주소를 기반으로 상세 페이지로 이동
};
```
버튼 클릭 이벤트와 함께 handleRecordClick 연결:
```
<button
  key={record.mac}
  onClick={() => handleRecordClick(record.mac)}
  className="device-button"
>
  {record.name || record.mac}
</button>
```

#### 6.3.2 MQTT 데이터 서버 업서트
MQTT 메시지가 들어올 때 MongoDB에 데이터를 업서트(문서가 없으면 삽입, 있으면 업데이트)합니다. 추가적으로 데이터가 없을 경우 name[] 배열을 생성합니다.
```
이것을 이용해 업데이트 해줘 그리고 이전 데이터가 없을 때는 name[] 을 만들어 줘
처음 값 중 name[0]=mac 으로 해주고 나머지는 1,2,3 번호를 넣어주고
배열의 크기는 in 과 out 배열을 합친 것보다 하나 크게 해줘
```
upsert 구현 로직
name[] 생성 로직:
배열 크기는 in과 out 배열의 합 + 1.
name[0]은 mac, 나머지는 "1", "2", "3", ... 순서로 설정.
```
const nameArrayLength = inArray.length + outArray.length + 1;
const defaultNameArray = Array.from({ length: nameArrayLength }, (_, i) =>
  i === 0 ? mac : i.toString()
);
```
서버 요청:
MQTT 메시지를 파싱하여 POST 요청으로 업서트 실행.
```
fetch('https://kdi.doowon.ac.kr:1804/api/upsert', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(parsedMessage),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log('Upserted Data:', data);
  })
  .catch((error) => console.error('Error upserting data:', error));
```
#### 6.3.3 상세 페이지 이동 및 데이터 업서트 통합
다음과 같이 질문하여 데이터가 들어오면 데이터베이스에 업데이트 합니다.
```
MachineOverview.tsx upsert 추가해줘
```
결과 파일은 이 사이트에서 다운로드해서 참조 하세요.

### 6.4 상세 페이지 구현
[프로그램 다운로드 6-4](https://github.com/kdi6033/react/releases/tag/react-iotplc-6-4-v1.0)     
#### 6.4.1 입력 Led 출력 스위치 만들기
- MQTT 통신을 기반으로 하며, LED와 슬라이드 스위치를 사용해 PLC 출력을 제어합니다.
- 입력 신호는 MQTT 메시지로 전달되며, LED는 메시지의 "in" 배열 데이터를 기반으로 ON/OFF 상태를 표시합니다.
- 메시지 형식이 {"in":[1,0,1,0]}일 경우, 첫 번째와 세 번째 LED가 켜집니다.
- 스위치는 PLC 출력을 제어하기 위해 슬라이드 형태로 설계되었으며, 각 스위치 동작은 MQTT 메시지를 통해 서버로 전달됩니다.
- 메시지 형식은 {"mac":"","order":2,"no":1,"value":true}로, "no"는 스위치 번호(0~3), "value"는 ON/OFF 상태를 나타냅니다.
이를 통해 IoT와 PLC 제어 원리를 학습하고, MQTT 프로토콜과 실시간 데이터 처리의 기본을 경험할 수 있습니다.

<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100"> 프롬프트
```
DeviceDetail.tsx 화면에 여기 mac 에 해당하는 mqtt 데이타 표시해줘
mqtt 메세지는 
<Route path="/overview" element={<MachineOverview mqttMessage={mqttMessage} />} />
와 같이 처리해줘
데이터 들어오면 DataHandler.tsx를 이용해 바로 업데이트 하는 것으로 프로그램 해줘
```
  
<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100"> 프롬프트  
```
{\"type\":3,\"email\":\"kdi6033@gmail.com\",\"mac\":\"D8:13:2A:C3:E7:68\",\"temp\":25.2,\"humi\":22,\"in\":[0,0,0,0],\"out\":[1,0,0,1]}"
in 은 led 를 만들어 표시하고 out는 스위치를 만들어 표시 해줘 DeviceDetail.tsx DeviceDetail.css 만들어 줘
```

<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100"> 프롬프트   
```
스위치에 따라 on off 동작하게 해줘
프로토콜은 다음과 같습니다.
IoT PLC의 핀번호(0,1,2,3 4개)와 true/false를 보내면 릴레이가 동작한다.
{"mac":"A0:B7:65:CD:4D:34","order":2,"no":1,"value":true}
맥어드레스가 "A0:B7:65:CD:4D:34"인 기기의 1번핀 릴레이를 on 시킨다.
MQTTService.tsx 를 이용해서 mqtt 메세지 전송해줘
```

**주요 요구 사항**    
- DeviceDetail.tsx와 DeviceDetail.css를 생성하여 mac 주소에 해당하는 mqttMessage를 화면에 표시.
- in 데이터는 LED 표시, out 데이터는 스위치 표시로 UI 구성.
- 스위치 동작 시 MQTTService.tsx를 이용해 MQTT 메시지를 전송.
- 메시지 수신 시 DataHandler.tsx를 통해 데이터를 바로 업데이트.

**구현 파일 구성**    
DeviceDetail.tsx   DeviceDetail.css   MQTTService.tsx   DataHandler.tsx
이 파일의 소스 프로그램은 다운로드 해서 보세요.

**동작 설명**    
1. MQTT 데이터 표시
DeviceDetail.tsx는 mqttMessage를 prop으로 받아 mac, temp, humi, in, out 데이터를 화면에 표시합니다.
in은 LED로, out은 스위치로 구성합니다.

3. LED 상태
수신된 in 데이터를 기반으로 LED 상태를 표시하며, 활성화 시 녹색 배경으로 나타납니다.

3. 스위치 동작
스위치 버튼을 클릭하면 상태가 토글되며, 새로운 상태가 MQTT 메시지로 전송됩니다.
메시지 예
```
{"mac":"A0:B7:65:CD:4D:34","order":2,"no":1,"value":true}
```
4. MQTT 메시지 업데이트
새로운 MQTT 메시지가 들어오면 DataHandler.tsx를 통해 서버로 데이터를 전송해 업데이트합니다.
라우팅 처리
App.tsx에서 MachineOverview에 mqttMessage를 전달합니다:
```
<Route path="/overview" element={<MachineOverview mqttMessage={mqttMessage} />} />
```
### 6.5 Label Name 수정과 저장
[프로그램 다운로드 6-5](https://github.com/kdi6033/react/releases/tag/react-iotplc-6-5-v1.0)     
IoT PLC 장치의 이름 배열을 수정하고 저장하는 과정을 포함하며, 다음과 같은 단계를 거칩니다:
- 이름 편집 모드: 사용자가 Edit Names 버튼을 클릭하면 이름 배열을 수정할 수 있는 입력 창이 활성화됩니다.
- 이름 수정: 사용자는 각 입력 필드에 새로운 이름을 입력하거나 기존 이름을 수정합니다. 수정된 이름은 editedNames 상태에 저장됩니다.
- 저장 버튼 클릭: 사용자가 Save 버튼을 클릭하면 handleSave 함수가 호출됩니다. 이 함수는 updateName API를 통해 서버로 수정된 이름 배열을 POST 요청으로 전송합니다.
- 서버 데이터 업데이트: 서버는 /api/updateName 엔드포인트에서 mac 주소를 기준으로 해당 장치의 name[] 데이터를 업데이트합니다. 성공적으로 업데이트되면 클라이언트로 응답을 반환합니다.
- UI 업데이트: 서버 응답이 성공적이면, 클라이언트에서 setDevice를 호출하여 수정된 데이터를 반영하고 편집 모드를 종료합니다.
- 취소 버튼: 사용자가 Cancel 버튼을 누르면 수정 사항이 폐기되고, 원래의 이름 배열로 복원됩니다.

<img src="https://github.com/user-attachments/assets/8d3ef6cc-9df4-47de-a5eb-6bd3402c9eb4" alt="chatgpt prompts" width="100"> 프롬프트
```
'/api/updateName' 이름으로 name[] 저장하는 프로그램 만들고 이를 진행해줘
post로 작성해 주세요
```
components\DeviceDetail.tsx
```
import { updateRecord, updateName } from './DataHandler';
....
const handleSave = async () => {
    if (device) {
      try {
        const response = await updateName(device.mac, editedNames);
        console.log('Record updated successfully:', response);

        setDevice({ ...device, name: editedNames });
        setEditMode(false);
      } catch (error) {
        console.error('Error updating record:', error);
      }
    }
  };
....
{editMode && (
        <div className="edit-names">
          {editedNames.map((name, index) => (
            <div key={index}>
              <label>{`Name ${index}`}</label>
              <input
                type="text"
                value={name}
                onChange={(e) => handleNameChange(index, e.target.value)}
              />
            </div>
          ))}
          <button onClick={handleSave}>저장</button>
          <button onClick={handleCancel}>취소</button>
        </div>
      )}
```
db-server.js
```
// Label Name 저장장
app.post('/api/updateName', async (req, res) => {
  const client = new MongoClient(url);
  const { mac, name } = req.body; // MAC 주소와 이름 배열을 받아옴

  if (!mac || !Array.isArray(name)) {
    return res.status(400).send('유효하지 않은 요청입니다. MAC 주소와 name[] 배열이 필요합니다.');
  }

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // MAC 주소를 기준으로 name[] 배열 업데이트
    const result = await collection.updateOne(
      { mac }, // MAC 주소로 문서 검색
      { $set: { name } }, // name[] 배열 업데이트
      { upsert: false } // 문서가 없을 경우 삽입하지 않음
    );

    if (result.matchedCount === 0) {
      res.status(404).send('해당 MAC 주소를 가진 문서를 찾을 수 없습니다.');
    } else {
      console.log('name[] 업데이트 결과:', result);
      res.json({ message: 'name[] 배열이 성공적으로 업데이트되었습니다.', result });
    }
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
    res.status(500).send('MongoDB와의 연결 중 오류가 발생했습니다.');
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
});
```

AWS 서버 구축

filezilla를 이용한 서버 연결
# EC2 서버에 FileZilla로 연결하는 방법

이 문서는 Windows 환경에서 **FileZilla**를 이용해 **AWS EC2 인스턴스에 접속**하는 방법을 안내합니다.  
React 등의 웹 프로젝트에서 `build` 폴더를 EC2로 업로드할 때 사용됩니다.

---

## ✅ 사전 준비

1. AWS EC2 인스턴스 생성 완료
2. 퍼블릭 IP 주소 확보
3. EC2 생성 시 받은 `.pem` 키 파일
4. FileZilla 설치 ([https://filezilla-project.org/](https://filezilla-project.org/))
5. **Puttygen 설치** (ppk 변환용, [https://www.putty.org/](https://www.putty.org/))

---

## 📁 1단계: `.pem` → `.ppk` 파일로 변환

FileZilla는 `.pem` 키를 직접 사용할 수 없습니다. `Puttygen`을 사용해 `.ppk` 형식으로 변환합니다.

1. `Puttygen` 실행
2. 상단 메뉴 → `File > Load` 클릭
3. EC2 키 파일 (`your-key.pem`) 선택
4. 하단에서 `"Save private key"` 클릭 → 예: `ec2-key.ppk`
5. **변환된 파일을 안전한 위치에 저장**  
   예: `C:\Users\사용자이름\Documents\AWS\ec2-key.ppk`

---

## 🌐 2단계: FileZilla 사이트 관리자 설정

1. **FileZilla 실행**
2. 메뉴 상단 → `파일(File)` > `사이트 관리자(Site Manager)` 클릭
3. 왼쪽에서 `"새 사이트(New Site)"` 클릭 → 이름 지정 (`My EC2` 등)

오른쪽 설정은 아래와 같이 입력합니다:

| 항목            | 값                                       |
|-----------------|------------------------------------------|
| 프로토콜         | SFTP - SSH File Transfer Protocol        |
| 호스트(Host)    | EC2 퍼블릭 IP 주소 (예: 13.209.xxx.xxx)   |
| 포트(Port)      | 22                                       |
| 로그온 유형      | Key file                                |
| 사용자(User)    | ubuntu                                   |
| 키 파일         | `ec2-key.ppk` 경로 입력 (예: `C:\...\ec2-key.ppk`) |

4. 설정 후 **[연결] 클릭**

---

## 🗂️ 3단계: 파일 업로드

1. **왼쪽 창**: 내 컴퓨터의 폴더 (예: `C:\my-react-app\build`)
2. **오른쪽 창**: 서버의 `/home/ubuntu` 디렉토리
3. `build` 폴더를 드래그 앤 드롭하여 업로드

업로드 완료 후 EC2 터미널에서 아래 명령어로 확인:

```bash
cd /home/ubuntu
ls

