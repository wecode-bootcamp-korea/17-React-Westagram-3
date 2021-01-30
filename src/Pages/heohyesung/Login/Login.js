import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class LoginHeo extends Component {
  constructor(){
    super();
    this.state = {id:"",
    pw:"", 
    backgroundcolor:"rgb(192, 223, 253)"};
  }

  handleIdInput = (e) => {
    this.setState({
      id : e.target.value
    })
  }

  handlePwInput = (e) => {
    this.setState({
      pw : e.target.value
    })
  }


  render() {
    return (
      <body>
        <section className="logincontainer">
          <p>Westagram</p>
          <article className="loginbox">
              <input  onChange={this.handleIdInput} name="id" className="loginId" type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/>
              <input  onChange={this.handlePwInput} name="pw" className="loginPw" type="password" placeholder="비밀번호"/> 
              <button className="loginbtn">로그인</button>
          </article>
          <h6 className="linestyle">또는</h6>
          <div className="bottomtext">
              <div className="facebook">
                  <i className="fab fa-facebook-square"></i>
                  <span>Facebook으로 로그인</span>
              </div>
              <h6>비밀번호를 잊으셨나요?</h6>
          </div>
        </section>	
      </body>
    );
  }
}

export default withRouter(LoginHeo);

