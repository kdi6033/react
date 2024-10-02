# react
react 프로그램과 이를 Data Science와 AI Science에 응용합니다.    
[React Learn 공식 사이트](https://react.dev/learn)    
[React Doc 공식 사이트](https://docs.github.com/ko/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links)

# react 시작하기    
### 1. Node.js 설치    
React는 Node.js 환경에서 동작하므로 먼저 Node.js를 설치해야 합니다.    
[Node.js 공식 사이트](https://nodejs.org/en)에서 설치합니다.
설치 후, 터미널이나 명령 프롬프트에 다음 명령어를 입력해 설치가 잘 되었는지 확인합니다:
```
node -v
npm -v
```
### 2. React 프로젝트 생성    
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
### 3. visual code 로 프로그램 합니다.
```
cmd
code my-app
```
### 4. 개발 서버를 시작합니다:
```
npm start
```
### 25-2
### [프로젝트] 버튼, 설명문, 스타일, 데이터, 그림 만들기
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

### 25-3
### [프로젝트] Conditional rendering
[프로그램 다운로드 25-3](https://github.com/kdi6033/react/releases/tag/conditional-rendering-v1.0)    
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

### 25-4
### [프로젝트] Rendering lists
이 React 프로그램은 두 개의 컴포넌트, App과 ShoppingList로 구성됩니다. App 컴포넌트는 화면에 "Shopping List" 제목과 ShoppingList 컴포넌트를 표시합니다. ShoppingList 컴포넌트는 products 배열을 사용하여 리스트를 만들고, 각 항목의 isFruit 값에 따라 색상을 다르게 표시합니다. 과일이면 magenta, 아니면 darkgreen 색상으로 렌더링됩니다.   
유튜브 보기    
<a href="https://youtu.be/wKed2Ycv1Fc">
    <img src="https://github.com/user-attachments/assets/93b32829-9d85-4c03-bc30-586c811839fd" alt="Rendering lists" width="400">
</a>

[프로그램 다운로드 25-4](https://github.com/kdi6033/react/releases/tag/react-rendering-lists-v1.0)   

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

### 25-5
### [프로젝트] Responding to events 
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

### 25-6
### [프로젝트] Updating the screen
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
### 25-7
### [프로젝트] Using Hooks
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
### 25-8 MQTT
이 프로그램은 MQTT 브로커에 연결하고, 주기적으로 메시지를 전송하며, 지정된 토픽에서 수신한 메시지를 화면에 출력하는 기능을 수행합니다.
- 브로커에 연결: MQTT 클라이언트가 브로커(ai.doowon.ac.kr:1803)에 연결됩니다.
- 토픽 구독: outtopic을 구독하고, 5초마다 intopic에 '김동일' 메시지를 전송합니다.
- 메시지 수신: 구독한 outtopic에서 수신된 메시지를 messages 배열에 저장하고 이를 화면에 출력합니다.
- 화면 출력: 수신된 메시지가 리스트로 출력됩니다.
<a href="https://youtu.be/hsZt9NN4e48">
    <img src="https://github.com/user-attachments/assets/63189d1d-ee99-4720-b30d-5bdf89376905" alt="Updating the screen" width="400">
</a>

[프로그램 다운로드 25-8](https://github.com/kdi6033/react/releases/tag/react-mqtt-v1.0)   

리엑트 프로그램을 새로 만들어 시작합니다.
```
npx create-react-app mqtt --template typescript
```
생성된 App.tsx 에서 아래와 같이 필요한 부분만 가지고 프로그램을 시작 합니다.    
[관련지식] 웹과 mqtt는 웹소켙으로 통신을 합니다. 보통은 1883포트로 사용하고 ai.doowon.ac.kr에서 웹소켙은 1803으로 설정 되었습니다. 그리고 프로그램을 구성하는데 필요한 서브프로그램은 /components 라는 디렉토리를 만들어 여기에 저장하는 것이 관리하기 용이 합니다.    
[ChatGPT 25-8]
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

### 25-9 MQTT i2r-03 IoT PLC 연결
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
### 25-10 MQTT Hook i2r-03 IoT PLC 연결
<a href="https://youtu.be/ymZNHD4hQZE">
    <img src="https://github.com/user-attachments/assets/6fda3a19-e210-40a2-a23d-e5abb8f74e62" alt="Updating the screen" width="400">
</a>    

[프로그램 다운로드 25-10](https://github.com/kdi6033/react/releases/tag/react-25-10-MqttHookIotPlc-v1.0)   

[ChatGPT 25-10]
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

[ChatGPT]
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

### 25-11 [정보 저장과 읽기] 이메일 맥어드레스 입력창 만들고 정보 저장하고 읽기
[프로그램 다운로드 25-11](https://github.com/kdi6033/react/releases/tag/react-25-11-v1.0)    
IoT PLC에서 mqtt로 들어오는 데이터를 4개의 Led를 만들어 연동합니다.    

[ChatGPT 11]
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

### 25-12 [UI 만들기] Led와 스위치를 만들어 IoT PLC와 연동한다.
[프로그램 다운로드 25-12](https://github.com/kdi6033/react/releases/tag/react-25-12-v1.0)   
React에서 4개의 스위치를 만들어 동작 시키면 IoT PLC 가 동작하게 프로그램 합니다.
[ChatGPT 12-1] Led 만들어 mqtt 데이터 연결
```
{"type":3,"email":"kdi6033@gmail.com","mac":"D8:13:2A:C3:73:58","temp":28.1,"humi":48,"in":[0,0,0,0],"out":[0,0,0,0]}
다음과 같이 메세지가 들어 옵니다. "in":[0,0,0,0] 으로 들어오는 데이터를 4개의 led를 만들어서 연결해줘
```
설명:    
- LED 상태 관리: ledStates라는 상태 변수를 추가하여 "in" 배열 값을 저장합니다.
- LED 상태 렌더링: ledStates 배열에 따라 4개의 LED가 렌더링되며, 각 값이 1이면 on, 0이면 off로 상태가 표시됩니다.
- CSS: 각 LED는 원형으로 표현되며, 상태에 따라 초록색(켜짐)과 빨간색(꺼짐)으로 표시됩니다.
- useEffect: 메시지가 들어올 때마다 MAC 주소를 확인하고, 일치하면 "in" 값으로 LED 상태를 업데이트합니다.

[ChatGPT 12-2] 스위치 만들어 mqtt 통신으로 데이터 보냄

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
