import "./App.css";
import { Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const ps = [
  {},
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
  },
];
const textt = "Bởi vì thầy cô quá cute";
function App() {
  const [positon, setPosition] = useState(0);
  const [text, setText] = useState("");
  const handleWrong = () => {
    setPosition((positon + 1) % 5);
  };
  const handleNote = () => {
    if (text.length < textt.length) {
      setText(textt.slice(0, text.length + 1));
    }
  };
  const handleSend = (e) => {
    if (text.length < 16) {
      e.preventDefault();
      alert("Nhập chưa xong mà bấm gửi là sao -_-");
    }
  };
  return (
    <div className="main">
      <div className="main--bg" />
      <Route path="/" exact>
        <motion.div
          className="pop"
          initial={{ opacity: 0.7, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="pop--header">Hellu 10B15</p>
          <img src="cat.jpg" alt="" className="pop--img" />
          <Link to="/choose" className="pop--button">
            <div>Next</div>
          </Link>
        </motion.div>
      </Route>
      <Route path="/choose">
        <motion.div
          className="choose"
          initial={{ opacity: 0.7, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="note--text">10B15 có yêu thầy cô không??</p>
          <Link to="/note" className="choose--btn choose--btn__correct">
            <div>{"Yêu ơi là yêuuuuuu <3"}</div>
          </Link>
          <div
            className="choose--btn choose--btn__wrong"
            style={ps[positon]}
            onClick={handleWrong}
          >
            Khum
          </div>
        </motion.div>
      </Route>
      <Route path="/note">
        <motion.div
          className="note"
          initial={{ opacity: 0.7, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="note--text">
            Thật không zậy? Nói thầy cô biết lí do vì sao thích đi{" "}
          </p>
          <img src="cute.gif" className="note--img" />
          <input value={text} onChange={handleNote} className="note--input" />
          <Link
            to="/0"
            className="choose--btn note--btn__correct"
            onClick={(e) => handleSend(e)}
          >
            <div>Gửi</div>
          </Link>
        </motion.div>
      </Route>
      <Route path="/0">
        <motion.div
          className="note"
          initial={{ opacity: 0.7, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="note--text">
            Thầy cô cũng yêu 10B15, nên thầy cô đã gửi những lời chúc để các bạn
            đạt được kết quả thi tốt nhất
          </p>
          <img src="end.gif" className="note--img" />

          <Link to="/1" className="choose--btn note--btn__correct">
            <div>Next</div>
          </Link>
        </motion.div>
      </Route>
      <Route path="/1" exact>
        <motion.div
          className="pop"
          initial={{ opacity: 0.7, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <img src="pic1.jpg" alt="" className="pop--img" />
          <p className="pop--footer">1. Tự tin xin điểm 10!</p>
          <p className="pop--footer">2. Bình tĩnh - tự tin - chiến thắng</p>
          <p className="pop--footer">
            3. Chúc tất cả các thành viên của 10B15 “không điểm trên tay, mười
            điểm trên giấy”, “cá chép hóa rồng” và “vượt cạn thành công” nhé!{" "}
          </p>
          <Link to="/2" className="pop--button">
            <div>Next</div>
          </Link>
        </motion.div>
      </Route>
      <Route path="/2" exact>
        <motion.div
          className="pop"
          initial={{ opacity: 0.7, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <img src="pic2.jpg" alt="" className="pop--img" />
          <p className="pop--footer">4. 10B15 - Try your best!!! </p>
          <p className="pop--footer">5. Cẩn tắc vô áy náy</p>
          <p className="pop--footer">
            6. Ngày mai lên thớt rồi, đừng suy nghĩ gì nữa. Hãy ăn thật no, ngủ
            thật kỹ để lấy sức chiến đấu nào. Chúng ta sẽ cùng làm thật tốt
            trong kỳ thi này nhé!
          </p>
          <Link to="/3" className="pop--button">
            <div>Next</div>
          </Link>
        </motion.div>
      </Route>
      <Route path="/3" exact>
        <motion.div
          className="pop"
          initial={{ opacity: 0.7, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <img src="pic3.jpg" alt="" className="pop--img" />
          <p className="pop--footer">
            7. Các bạn hãy chiến thắng chính bản thân mình- Áp lực tạo kim cương
            nha
          </p>
          <Link to="/4" className="pop--button">
            <div>Next</div>
          </Link>
        </motion.div>
      </Route>
      <Route path="/4" exact>
        <motion.div
          className="pop"
          initial={{ opacity: 0.7, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <img src="pic3.jpg" alt="" className="pop--img" />
          <p className="pop--footer">
          Thầy cô mãi ở đây, đợi các chiến binh dũng cảm trở về 🌸
          </p>
        </motion.div>
      </Route>
    </div>
  );
}

export default App;
