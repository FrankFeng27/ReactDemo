import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

const TextArea = styled.textarea`
  flex-grow: 10;
  cols: 100;
`;
const TextAreaContainer = styled.div`
  min-width: 800px;
  height: 50vh;
  display: flex;
  flex-direction: column;
`;
const ChangeButton = styled.button`
  width: 100px;
  margin: 10px auto;
`;


function App() {
  const [text, setText] = React.useState("");
  function onBtnClick() {
    setText("temporary string.");
  }
  const tempText = text.slice();
  console.log(`tempText is: ${tempText}`);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <TextAreaContainer>
        <TextArea value={tempText}></TextArea>
        <ChangeButton onClick={onBtnClick}>Change Text...</ChangeButton>
      </TextAreaContainer>
    </div>
  );
}

export default App;
