import logo from './logo.svg';
import './App.css';
import { Route, Link }  from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from 'react';

const ps=[
  {
    // right: "10%",
  },
  {
    left: "10%",
    top: "2%",
  },
  {
    right: "15%",
    top: "5%",
  },
  {
    right: "15%",
    bottom: "20%",
  },
  {
    left: "5%",
    bottom: "0%",
  }
]
const textt="Tại vì anh cute vl.... <3";
function App() {
  const [positon, setPosition] = useState(0);
  const [text, setText] = useState("");
  const handleWrong = () => {
    setPosition((positon + 1 ) % 5);
  }
  const handleNote = () => {
    if(text.length < textt.length) {
      setText(textt.slice(0, text.length+1));
    }
  }
  const handleSend = (e) => {
    if(text.length < 16){
      e.preventDefault();
      alert("Nhập chưa xong mà bấm gửi là sao -_-");
    }
      
  }
  return (
    <div className="main">
      <div className="main--bg"/>
      {/* <p className="pop--footer">Anh có điều này muốn hỏi em nhớ phải trả lời thật lòng nhaaa.</p> */}
      <Route path="/" exact>
        <motion.div className="pop"
              initial={{opacity: 0.7, y: -20}}
              animate={{opacity: 1, y: 0}}>
          <p className="pop--header">He luu !</p>
          <img src="cat.jpg" alt="" className="pop--img"/>
          <p className="pop--footer">Anh có điều này muốn hỏi em nhớ phải trả lời thật lòng nhaaa.</p>
          <Link to="/choose" className="pop--button">
            <div >OK</div>
          </Link>
        </motion.div>
      </Route>
      <Route path="/choose">
        <motion.div className="choose"
              initial={{opacity: 0.7, y: -20}}
              animate={{opacity: 1, y: 0}}>
          <p className="choose--header">Em thích anh phải không ._.</p>
          <p className="choose--header2">Nếu em không trả lời mà thoát ra thì phải làm vợ anh đó nhaa</p>
          <Link to="/note" className="choose--btn choose--btn__correct">
            <div>{'Yêu ơi là yêuuuuuu <3'}</div>
          </Link>
          <div className="choose--btn choose--btn__wrong" style={ps[positon]}
               onClick={handleWrong} >
                Anh mơ à ._.
          </div>
        </motion.div>
      </Route>
      <Route path="/note">
      <motion.div className="note"
          initial={{opacity: 0.7, y: -20}}
          animate={{opacity: 1, y: 0}}>
        <p className="note--text">Thật không zậy. Nói cho anh lí do vì sao em thích anh đi</p>
        <img src="cute.gif" className="note--img"/>
        <input value={text} onChange={handleNote} className="note--input"/>
        <Link to="/end" className="choose--btn note--btn__correct" onClick={ e => handleSend(e)}>
        <div>
                Gửi cho anh
        </div>
        </Link>
      </motion.div>
      </Route>  
      <Route path="/end">
      <motion.div className="note"
          initial={{opacity: 0.7, y: -20}}
          animate={{opacity: 1, y: 0}}>
        <p className="end--text">Ỏoooooo :>. Anh biết mà!. Vậy em làm người yêu anh nhé</p>
        <img src="end.gif" className="end--img"/>
      </motion.div>
      </Route>    
    </div>
  );
}

export default App;
