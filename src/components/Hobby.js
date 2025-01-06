import React from 'react';
import "./Hobby.css";
import { useNavigate } from 'react-router-dom';


function App() {

const navigate = useNavigate();

  return (
    <div class="parent">
    <div class="div1" onClick={() => navigate('/')}  // 點擊時跳轉到首頁
        style={{ cursor: 'pointer' }}><div class="image-container">< img src="/images/logo.png"alt="示例圖片" style={{ width: "500px" }}/></div></div>
    <div class="div2" ><h2 class="grid-title">漢堡怎麼做?</h2><div class="image-container">< img src="/images/1131A_M1361102廖能靖_2.png"alt="示例圖片" style={{ width: "500px" }}/></div></div>
    <div class="div3" ><h2 class="grid-title">網站怎麼做?</h2><div class="image-container">< img src="/images/1131A_M1361102廖能靖_1.png"alt="示例圖片" style={{ width: "500px" }}/></div></div>
    <div class="div4" ><h2 class="grid-title">名片怎麼做?</h2><div class="image-container">< img src="/images/螢幕擷取畫面 2025-01-06 182911.png"alt="示例圖片" style={{ width: "820px" }}/></div></div>
    <div class="div5" ><div class="image-container">< img src="/images/113Hb_M1361102_廖能靖_02_0102.png"alt="示例圖片" style={{ width: "400px" }}/></div></div>
    <div class="div6"><h2 class="grid-title">纏繞怎麼畫?</h2><div class="image-container">< img src="/images/113B_M1361102_廖能靖.jpg"alt="示例圖片" style={{ width: "550px" }}/></div></div>
    <div class="div7"><h2 class="grid-title">文字怎麼排?</h2><div class="image-container">< img src="/images/113Ha_M1361102_廖能靖_1_0102.png"alt="示例圖片" style={{ width: "300px" }}/></div></div>
    </div>
    
  );
}

export default App;
