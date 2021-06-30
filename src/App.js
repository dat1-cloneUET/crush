import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main">
      <div className="main--bg"/>
      <div className="pop">
      
        <p className="pop--header">He luu cậu!</p>
        <img src="cat.jpg" alt="" className="pop--img"/>
        <p className="pop--footer">Tớ có điều này muốn hỏi cậu nhớ phải trả lời thật lòng nhaaa.</p>
        <div className="pop--button">OK</div>
      </div>
      {/* <div className="choose">
        <p className="choose--header">Cậu thích tớ phải không nào ._.</p>
        <p className="choose--header2">Nếu cậu không trả lời mà thoát ra thì phải làm vợ tớ đó nhaa</p>
        <div className="choose--btn choose--btn__correct">{'Yêu ơi là yêuuuuuu <3'}</div>
        <div className="choose--btn choose--btn__wrong">Cậu mơ à ._.</div>
      </div> */}
    </div>
  );
}

export default App;
