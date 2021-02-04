import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class LoginLee extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pwd: "",
      // isDisabled: true,
      // name: "jungmin",
      // phone: "010-1234-5678",
    };
  }
  idSet = (e) => {
    this.setState({
      id: e.target.value,
    });
  };
  pwdSet = (e) => {
    this.setState({
      pwd: e.target.value,
    });
  };

  goToMain = () => {
    this.props.history.push("/mainLee");
  };

  loginValid = (e) => {
    e.preventDefault();
    if (this.state.id.includes("@") && this.state.pwd.length >= 5) {
      fetch("http://10.58.4.186:8000/user", {
        method: "POST",
        body: JSON.stringify({
          email: this.state.id,
          password: this.state.pwd,
          // name: this.state.name,
          // phone: this.state.phone,
        }),
      }).then((response) => response.json());
      // .then((res) => this.joinCheckResult(res));
      // .then((res) => this.loginCheckResult(res));
      // .then((res) => console.log("백엔드에서 온 데이터 : ", res));
    } else {
      alert("아이디와 비밀번호 입력 기준이 틀렸습니다 !");
    }
  };

  joinCheckResult = (res) => {
    if (res.message === "SUCCESS") {
      alert("회원가입을 축하드립니다 ! ");
    } else {
      alert("회원가입이 실패하셨습니다 !");
    }
  };

  loginCheckResult = (res) => {
    if (res.message === "SUCCESS") {
      console.log(res);
      localStorage.getItem("token", res.access_token);
      this.goToMain();
    } else {
      alert("너 우리 회원아님 !");
    }
  };
  render() {
    return (
      <div>
        <main className="container_main_login">
          <div className="container_sub_login">
            <span className="login_logo">westagram</span>
            <form action="/" className="login_form">
              <input
                type="text"
                className="login_id"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={this.btnCheck}
              />
              <input
                type="password"
                className="login_pw"
                placeholder="비밀번호"
                onChange={this.btnCheck}
              />
              <input
                type="submit"
                className={
                  this.state.isDisabled
                    ? "login_form_submit"
                    : "login_form_submit:disabled"
                }
                value="로그인"
                onClick={this.loginValid}
                // disabled={this.state.isDisabled}
              ></input>
            </form>
            <span className="pwd_help">비밀번호를 잊으셨나요?</span>
          </div>
        </main>
        <footer className="login_footer">
          <ul className="login_footer_option1">
            <li className="login_footer_option_btn">소개</li>
            <li className="login_footer_option_btn">블로그</li>
            <li className="login_footer_option_btn">채용 정보</li>
            <li className="login_footer_option_btn">도움말</li>
            <li className="login_footer_option_btn">개인정보처리방침</li>
            <li className="login_footer_option_btn">약관</li>
            <li className="login_footer_option_btn">API</li>
            <li className="login_footer_option_btn">인기 계정</li>
            <li className="login_footer_option_btn">해시태그</li>
            <li className="login_footer_option_btn">위치</li>
          </ul>
          <div className="login_footer_option2">
            <span>
              한국어<i className="fas fa-angle-down footer_icon_left"></i>
            </span>
            <span>
              <i className="far fa-copyright footer_icon_right"></i>2021
              Instagram from Facebook
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default withRouter(LoginLee);
