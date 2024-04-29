import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [ selMenu, setMenu ] = useState( "메뉴를 선택하세요" );

  let handleChange = function(event){
    if ( event.target.value != '' ){
      setMenu( event.target.value + "을 선택함");

    }else{
      setMenu("메뉴를 선택하세요");
    }
  }

  return (
    <div className="App">
      <h2>하이루</h2>
      <select id='hiroo' onChange={handleChange}>
        <option value="">메뉴</option>
        <option value="짜장">짜장</option>
        <option value="짬뽕">짬뽕</option>
      </select>

      <p style={{color:'blue'}}>{selMenu}</p>

    </div>
  );
}

export default App;
