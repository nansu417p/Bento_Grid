import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Novel from './components/Novel';
import Hobby from './components/Hobby';
import './App.css';  // 這是全局的 CSS 文件

const App = () => {
  return (
    <Router> {/* 確保 <Router> 包裹了整個應用 */}
      <Routes>
        {/* 這裡是應用的路由設置 */}
        <Route path="/" element={<MainContent />} />
        <Route path="/novel" element={<Novel />} />
        <Route path="/hobby" element={<Hobby />} />
      </Routes>
    </Router>
  );
};

const MainContent = () => {
  return (
    <div className="parent">
     
    <div class="div18" ><h2 class="grid-title">關於我</h2><div class="image-container">< img src="/images/Card.png"alt="示例圖片" style={{ width: "900px" }}/></div></div>
    <div class="div20" ><h2 class="grid-title">旅遊</h2><div class="image-container">< img src="/images/Card-1.png"alt="示例圖片" style={{ width: "1200px" }}/></div></div>
    <div class="div21" ><h2 class="grid-title">遊戲</h2><div class="image-container">< img src="/images/4c2f1a7677f332b2f4859d1cb31govx5.jpg"alt="示例圖片" style={{ width: "820px" }}/></div></div>
     {/* 點擊 div22 時跳轉到 novel 頁面 */}
     <div className="div22" onClick={() => window.location.href = '/novel'}  style={{ cursor: 'pointer' }}>
        <h2 className="grid-title">小說</h2>
        <div className="image-container">
          <img src="/images/20241118_212430.jpg" alt="示例圖片" style={{ width: "400px" }} />
        </div>
      </div>
    <div class="div23"><h2 class="grid-title">聯絡我</h2><div class="image-container">< img src="/images/Card-4.png"alt="示例圖片" style={{ width: "700px" }}/></div></div>
     {/* 點擊 div22 時跳轉到 novel 頁面 */}
     <div className="div24" onClick={() => window.location.href = '/hobby'}  style={{ cursor: 'pointer' }} >
        <h2 className="grid-title">我的作品</h2>
        <div className="image-container">
          <img src="/images/螢幕擷取畫面 2025-01-02 141720.png" alt="示例圖片" style={{ width: "400px" }} />
        </div>
      </div>
    <div class="div25" ><h2 class="grid-title">建模</h2><div class="image-container">< img src="/images/螢幕擷取畫面 2025-01-02 142246.png"alt="示例圖片" style={{ width: "500px" }}/></div></div>
    <div class="div26" ><h2 class="grid-title">2D遊戲</h2><div class="image-container">< img src="/images/螢幕擷取畫面 2025-01-02 141901.png"alt="示例圖片" style={{ width: "400px" }}/></div></div>
    <div class="div27" ><h2 class="grid-title">3D遊戲</h2><div class="image-container">< img src="/images/螢幕擷取畫面 2025-01-02 141951.png"alt="示例圖片" style={{ width: "500px" }}/></div></div>
    </div>
  );
};

export default App;
