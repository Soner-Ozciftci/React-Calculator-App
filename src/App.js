import {useState} from 'react';
import './App.css';
import Button from './components/Button'
import Input from './components/Input'

function App() {
  return (
    <div className="App">
<div className='calc-wrapper'>
  <Input/>
  <div className='row'>
  <Button symbol="7"/>
  <Button symbol="8"/>
  <Button symbol="9"/>
  <Button symbol="/" color="#00ad85"/>
  </div>
  <div className='row'>
  <Button symbol="4"/>
  <Button symbol="5"/>
  <Button symbol="6"/>
  <Button symbol="*"color="#00ad85"/>
  </div>
  <div className='row'>
  <Button symbol="1"/>
  <Button symbol="2"/>
  <Button symbol="3"/>
  <Button symbol="+"color="#00ad85"/>
  </div>
  <div className='row'>
  <Button symbol="0"/>
  <Button symbol="."/>
  <Button symbol="="/>
  <Button symbol="-"color="#00ad85"/>
  </div>
  <Button symbol="Clear" color="red"/>
</div>
    </div>
  );
}

export default App;
