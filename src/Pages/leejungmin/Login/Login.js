import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class LoginLee extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pwd: "",
      isDisabled: true,
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

  loginValid = () => {
    if (this.state.id.includes("@") && this.state.pwd.length >= 5) {
      this.setState({
        isDisabled: false,
      });
    } else {
      this.setState({
        isDisabled: true,
      });
    }
  };
  goToMain = (e) => {
    if (this.state.id.includes("@") && this.state.pwd.length >= 5) {
      console.log("id 값은 =" + this.state.id);
      console.log("pwd 값은 =" + this.state.pwd);
      alert(this.state.id + "님 어서오세용");
      this.props.history.push("/mainLee");
    } else {
      alert("아이디 비밀번호 확인점 해주세여 ~");
      e.preventDefault();
    }
  };

  render() {
    return (
      <div>
        <main className="container_main_login">
          <div className="container_sub_login">
            <span className="login_logo">westagram</span>
            <form action="/" className="login_form" onKeyUp={this.loginValid}>
              <input
                type="text"
                className="login_id"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={this.idSet}
              />
              <input
                type="password"
                className="login_pw"
                placeholder="비밀번호"
                onChange={this.pwdSet}
              />
              <input
                type="submit"
                className={
                  this.state.isDisabled ? "login_form_submit" : "color_change"
                }
                className="login_form_submit"
                value="로그인"
                onClick={this.goToMain}
                disabled={this.state.isDisabled}
              ></input>
              {/* <Link to="./Main" ></Link> */}
              {/* 임시로 input에 disabled 값 뺌 */}
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
