import "./App.css";

function App() {
  return (
    <div className="ll">
      <div className="title_content">
        <h2 className="title">블로그</h2>
      </div>
      <div className="card">
        <div className="card_content">
          <div className="card_img">
            <img src="" alt="배경 이미지" />
          </div>
          <div className="info">
            <span>여기는 제목입니다</span>
            <p>여기는 내용입니다</p>
          </div>
          <div className="profile_content">
            <div className="profile_img">
              <img src="" alt="프로필" />
            </div>
            <div className="user">
              <span>by</span>
              <span className="nickname">딸기우유</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
