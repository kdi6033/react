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

[프로그램소스](https://github.com/kdi6033/react/releases/tag/react-button-avatar-v1.0)   
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
[프로그램소스](https://github.com/kdi6033/react/releases/tag/conditional-rendering-v1.0)    
이 프로그램은 useState를 사용해 로그인 여부를 상태로 관리하며, 로그인 상태에 따라 다른 UI를 보여주는 조건부 렌더링을 구현했습니다. 사용자가 로그인 버튼을 클릭하면 isLoggedIn 상태가 true로 변경되어 로그인 화면이 나타나고, 로그아웃 버튼을 클릭하면 false로 변경되어 로그아웃 화면이 나타납니다.    
<a href="https://youtu.be/VZIVyQeKRKg">
    <img src="https://github.com/user-attachments/assets/cbe0daaf-da91-427e-b8b8-3ad4e7181b23" alt="Conditional rendering" width="400">
</a>
[프로그램소스](https://github.com/kdi6033/react/releases/tag/react-rendering-lists-v1.0)    

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

[프로그램소스](https://github.com/kdi6033/react/releases/tag/react-rendering-lists-v1.0)   

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

[프로그램소스](https://github.com/kdi6033/react/releases/tag/react-updating-the-screen-v1.0)   

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

[프로그램소스](https://github.com/kdi6033/react/releases/tag/react-using-hooks-v1.0)   

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
- 리엑트 프로글갬을 새로 만들어 시작합니다.
```
npx create-react-app mqtt --template typescript
```
생성된 App.tsx 에서 필요한 부분만 가지고 프로그램을 시작 합니다.
[지식] 웹과 mqtt는 웹소켙으로 통신을 합니다. 보통은 1883포트로 사용하고 ai.doowon.ac.kr에서 웹소켙은 1803으로 설정 되었습니다. 그리고 프로그램을 구성하는데 필요한 서브프로그램은 /components 라는 디렉토리를 만들어 여기에 저장하는 것이 관리하기 용이 합니다.
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
[생성된 프로그램]    
![25-8-1](https://github.com/user-attachments/assets/f313dc21-d6bc-4f6f-b3f2-96a9e78bdb64)

App.tsx
```
import React from 'react';
import './App.css';
import MQTTClient from './components/MQTTClient';  // 경로 수정

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to MQTT Client Application</h1>
      </header>
      <main>
        <MQTTClient />
      </main>
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
  const intopic = 'kdi6033@gmail.com/intopic';
  const outtopic = 'kdi6033@gmail.com/outtopic';

  useEffect(() => {
    const client = mqtt.connect(brokerUrl);

    client.on('connect', () => {
      console.log('Connected to broker');
      client.subscribe(outtopic, (err) => {
        if (!err) {
          console.log(`Subscribed to ${outtopic}`);
        }
      });

      const interval = setInterval(() => {
        client.publish(intopic, '김동일');
        console.log(`Message sent to ${intopic}: 김동일`);
      }, 5000);

      return () => {
        clearInterval(interval);
        client.end();
      };
    });

    client.on('message', (topic, message) => {
      if (topic === outtopic) {
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
        <h2>Messages from {outtopic}</h2>
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
