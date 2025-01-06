import React from 'react';
import "./Novel.css";
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  return (
    <div class="parent">
    <div class="div9" onClick={() => navigate('/')}  // 點擊時跳轉到首頁
        style={{ cursor: 'pointer' }}><div class="image-container">< img src="/images/logo.png"alt="示例圖片" style={{ width: "500px" }}/></div></div>
    <div class="div10" ><div class="image-container">< img src="/images/20241118_213746.jpg"alt="示例圖片" style={{ width: "300px" }}/></div></div>
    <div class="div11" ><div class="image-container">< img src="/images/20241118_220854.jpg"alt="示例圖片" style={{ width: "500px" }}/></div></div>
    <div class="div12" ><div class="image-container">< img src="/images/20241119_192706.jpg"alt="示例圖片" style={{ width: "600px" }}/></div></div>
    <div class="div13" ><div class="image-container">< img src="/images/20241118_220903.jpg"alt="示例圖片" style={{ width: "400px" }}/></div></div>
    <div class="div14"><div class="image-container">< img src="/images/20241118_212430.jpg"alt="示例圖片" style={{ width: "550px" }}/></div></div>
    <div class="div15"><div class="image-container">< img src="/images/20241118_222228.jpg"alt="示例圖片" style={{ width: "450px" }}/></div></div>
    <div class="div16"><div class="image-container">< img src="/images/20241119_185134.jpg"alt="示例圖片" style={{ width: "450px" }}/></div></div>
    <div class="div17" style={{ backgroundColor: "darkblue" }} >一、故事內容<br></br>
                                                                輕小說中有著各式各樣有趣的故事。<br></br>
                                                                二、紙本書籍<br></br>
                                                                比起電子書籍，紙本書籍較有溫度，並且較不傷眼。<br></br>
                                                                三、插畫<br></br>
                                                                小說的插畫也是輕小說的魅力的一部分，好看封面能夠吸引讀者拿起來閱讀，書中的插畫能讓故事更加生動具體的浮現在讀者的腦海中。</div>
                                                                </div>

  );
}

export default App;
