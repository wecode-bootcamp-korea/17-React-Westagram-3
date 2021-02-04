import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class LoginPark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      id: '',
      pw: '',
    };
  }

  validation = () => {
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
          return true;
        }
      }
    }
  };

  handleInput = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });

    this.validation();
  };

  goToMain = (e) => {
    e.preventDefault();

    const validationResult = this.validation;

    if (validationResult) {
      fetch('http://10.58.2.215:8000/user/login', {
        method: 'POST',
        body: JSON.stringify({
          email: this.state.id,
          password: this.state.pw,
          account: '',
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // if (data.AUTHORIZATION) {
          //   localStorage.setItem('test-token', data.AUTHORIZATION);
          // }
          this.props.history.push('/mainPark');
        });
    }

    // ## access token으로 로그인
    // let token = localStorage.getItem('test-token') || '';

    // fetch('http://10.58.2.215:8000/posting', {
    //   method: 'POST',
    //   headers: {
    //     AUTHORIZATION: token,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  };

  render() {
    return (
      <div className="container">
        <h1 className="logo">Westagram</h1>
        <form>
          <input
            className="email"
            name="id"
            onKeyPress={this.handleInput}
            type="text"
            placeholder="이메일"
          />
          <input
            className="password"
            name="pw"
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
          <a href="www.naver.com" className="pwmsg">
            비밀번호를 잊으셨나요?
          </a>
        </footer>
      </div>
    );
  }
}

export default withRouter(LoginPark);
