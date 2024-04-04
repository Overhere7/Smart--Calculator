import React , {useState} from 'react'
import ParentContainer from './component/ParentContainer'
import Display from './component/Display'
import Buttons from './component/Buttons'
export default function App() {
  const [data,setData] = useState('');
  function handleClick(val){
     if (val === '='){
      setData(eval(data));
     }else if (val === 'C'){
      setData("");
     }else if (val === "<x"){
      let res =  data + '';
      setData(res.slice(0,-1));
     }else {
      setData(data + val);
     }
  }
  return (
    <ParentContainer>
     <Display data={data}/>
     <Buttons btnClick={handleClick}/>
    </ParentContainer>
  )
}
