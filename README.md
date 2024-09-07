# react
react 프로그램과 이를 Data Science와 AI Science에 응용합니다.    
[React Learn 공식 사이트](https://react.dev/learn)

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
### Conditional rendering
[프로그램소스](https://github.com/kdi6033/react/releases/tag/conditional-rendering-v1.0)    
이 프로그램은 useState를 사용해 로그인 여부를 상태로 관리하며, 로그인 상태에 따라 다른 UI를 보여주는 조건부 렌더링을 구현했습니다. 사용자가 로그인 버튼을 클릭하면 isLoggedIn 상태가 true로 변경되어 로그인 화면이 나타나고, 로그아웃 버튼을 클릭하면 false로 변경되어 로그아웃 화면이 나타납니다.    

### Rendering lists
<a href="https://youtu.be/wKed2Ycv1Fc">
    <img src="https://github.com/user-attachments/assets/93b32829-9d85-4c03-bc30-586c811839fd" alt="Conditional rendering" width="400">
</a>
[프로그램소스](https://github.com/kdi6033/react/releases/tag/react-rendering-lists-v1.0)   
이 React 프로그램은 두 개의 컴포넌트, App과 ShoppingList로 구성됩니다. App 컴포넌트는 화면에 "Shopping List" 제목과 ShoppingList 컴포넌트를 표시합니다. ShoppingList 컴포넌트는 products 배열을 사용하여 리스트를 만들고, 각 항목의 isFruit 값에 따라 색상을 다르게 표시합니다. 과일이면 magenta, 아니면 darkgreen 색상으로 렌더링됩니다.   

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

