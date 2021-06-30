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
const textt="Tại vì cậu cute vl.... <3";
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
      <Route path="/" exact>
        <motion.div className="pop"
              initial={{opacity: 0.7, y: -20}}
              animate={{opacity: 1, y: 0}}>
          <p className="pop--header">He luu cậu!</p>
          <img src="cat.jpg" alt="" className="pop--img"/>
          <p className="pop--footer">Tớ có điều này muốn hỏi cậu nhớ phải trả lời thật lòng nhaaa.</p>
          <Link to="/choose" className="pop--button">
            <div >OK</div>
          </Link>
        </motion.div>
      </Route>
      <Route path="/choose">
        <motion.div className="choose"
              initial={{opacity: 0.7, y: -20}}
              animate={{opacity: 1, y: 0}}>
          <p className="choose--header">Cậu thích tớ phải không nào ._.</p>
          <p className="choose--header2">Nếu cậu không trả lời mà thoát ra thì phải làm vợ tớ đó nhaa</p>
          <Link to="/note" className="choose--btn choose--btn__correct">
            <div>{'Yêu ơi là yêuuuuuu <3'}</div>
          </Link>
          <div className="choose--btn choose--btn__wrong" style={ps[positon]}
               onClick={handleWrong} >
                Cậu mơ à ._.
          </div>
        </motion.div>
      </Route>
      <Route path="/note">
      <motion.div className="note"
          initial={{opacity: 0.7, y: -20}}
          animate={{opacity: 1, y: 0}}>
        <p className="note--text">Thật không zậy. Nói cho tớ lí do vì sao cậu thích tớ đi</p>
        <img src="cute.gif" className="note--img"/>
        <input value={text} onChange={handleNote} className="note--input"/>
        <Link to="/end" className="choose--btn note--btn__correct" onClick={ e => handleSend(e)}>
        <div>
                Gửi cho tớ
        </div>
        </Link>
      </motion.div>
      </Route>  
      <Route path="/end">
      <motion.div className="note"
          initial={{opacity: 0.7, y: -20}}
          animate={{opacity: 1, y: 0}}>
        <p className="end--text">Ỏoooooo :>. Tớ biết mà!. Vậy cậu làm người yêu tớ nhé</p>
        <img src="end.gif" className="end--img"/>
      </motion.div>
      </Route>    
    </div>
  );
}

export default App;
