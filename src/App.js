import React, { Fragment } from "react";
import "./styles.css";
import "./App.css";
import ReactApp from "./ReactApp"


class App extends Component {

  //const name = "veloper!";
  static defaultProps = {
    name: '기본이름'
  };
  const value = 4;
  const style = {
    backgroundColor: 'black',
    padding: '16px',
    color: 'white',
    fontSize: '36px'
  };

  render() {
    return (
      
      <Fragment>
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
      </div>  
      <ReactApp name="이철영" />
      <div>
        {/* 리액트에서 주석 방법, 멀티라인도 동일 */ }
        <h1
        //여기에 주석을 남겨도 된다.
        >리액트</h1>
      </div>
      <div className="App">리액트입니다.</div>
      <div style={style}>
        안녕하세요!!
      </div>  
      <div>
        {
          //name === "veloper!" && <div>벨로퍼트다!</div>

          (function() {
            if(value === 1) return <div>1이다</div>
            if(value === 2) return <div>2이다</div>
            if(value === 3) return <div>3이다</div>
            return <div>없다</div>
          })()

          
        }
      </div>
    </Fragment>
    );
  }
}

export default App;

