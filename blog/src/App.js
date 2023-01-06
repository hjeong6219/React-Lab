/* eslint-disable */

import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['맛집 추천', '놀이공원 추천', '영화 추천']);
  let [count, countChange] = useState(0);
  let posts = '맛집'

  function changeTitle(newTitle){
    var newArray = [...글제목];
    newArray[0] = newTitle;
    글제목변경( newArray );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ () => { changeTitle('미국 맛집 추천') }}>버튼</button>
      <div className="list">
        <h3>{ 글제목[0] } <span onClick={ ()=>{ countChange(count + 1) } }>👍</span>{ count }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[1] } </h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[2] } </h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>
      <Modal></Modal>
    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
