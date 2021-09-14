import React from "react";
export default function Cardgroup(props) {
  let myStyle={
    background:props.mode==='dark'?'#000059':'white',
    color:props.mode==='dark'?'#41c0ff':'black',
    border:props.mode==='dark'?'2px solid blue':'2px solid #00ee00',
    borderRadius:'10px',
    textAlign:'justify',
    filter:'invert(0)'
  }
  return (
    <div className="container my-2" >
        <h2 className="my-3" style={{color:props.mode==='dark'?'#4ee44e':'black'}}>Card Infos</h2>
      <div className="card-group ">
        <div className="card mx-1 my-1" style={myStyle}>
          {/* <img src="src\myImages\img1.jpg" className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title" style={{color:props.mode==='dark'?'#d2f8f8':'black'}}>Card title 1</h5>
            <p className="card-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis doloremque distinctio eaque aspernatur debitis mollitia eius ab quos, veniam, nihil asperiores deserunt optio inventore?
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted" >Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card mx-1 my-1" style={myStyle}>
          {/* <img src="..." className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title" style={{color:props.mode==='dark'?'#d2f8f8':'black'}}>Card title 2</h5>
            <p className="card-text" >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis doloremque distinctio eaque aspernatur debitis mollitia eius ab quos, veniam, nihil asperiores deserunt optio inventore?
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card mx-1 my-1 " style={myStyle} >
          {/* <img src="..." className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title" style={{color:props.mode==='dark'?'#d2f8f8':'black'}}>Card title 3</h5>
            <p className="card-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis doloremque distinctio eaque aspernatur debitis mollitia eius ab quos, veniam, nihil asperiores deserunt optio inventore?
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
}
