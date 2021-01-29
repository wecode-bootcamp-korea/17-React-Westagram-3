import React, { Component } from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';

class LoginPark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      id: '',
      pw: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.goToMain = this.goToMain.bind(this);
  }

  handleInput(e) {
    if (e.target.type === 'text') {
      this.setState({
        id: e.target.value,
      });
    } else if (e.target.type === 'password') {
      this.setState({
        pw: e.target.value,
      });
    }

    if (this.state.id) {
      const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,8}$/i;
      const isGoodId = this.state.id.match(regExp);
      if (isGoodId && this.state.pw) {
        const regExp = '^[a-zA-Z0-9]{5,}$';
        const isGoodPw = this.state.pw.match(regExp);
        if (isGoodPw) {
          this.setState({
            isDisabled: false,
          });
        }
      }
    }
  }

  // goToMain() {
  //   this.props.history.push('/main');
  // }
  goToMain() {
    if (this.state.id) {
      const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      const isGoodId = this.state.id.match(regExp);
      if (isGoodId && this.state.pw) {
        const regExp = '^[a-zA-Z0-9]{5,}$';
        const isGoodPw = this.state.pw.match(regExp);
        if (isGoodPw) {
          this.setState({
            isDisabled: false,
          });
          alert('id & pw GOOD!');
          this.props.history.push('/mainPark');
        }
      }
    }
  }

  render() {
    return (
      <div className="container">
        <h1 id="logo">Westagram</h1>
        <form>
          <input
            className="email"
            onKeyPress={this.handleInput}
            type="text"
            placeholder="이메일"
          />
          <input
            className="password"
            onKeyPress={this.handleInput}
            type="password"
            placeholder="비밀번호"
          />
          <button
            type="submit"
            onClick={this.goToMain}
            className={this.state.isDisabled ? '' : 'active'}
          >
            로그인
          </button>
        </form>
        <footer>
          <a href="www.naver.com" id="pwmsg">
            비밀번호를 잊으셨나요?
          </a>
        </footer>
      </div>
    );
  }
}

export default withRouter(LoginPark);
