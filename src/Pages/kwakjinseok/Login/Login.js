import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class LoginKwak extends Component {
	goToMain = () => {
		if (this.goToMain) {
			alert("안녕하세요");
		}
		this.props.history.push("/mainKwak");
	};
	render() {
		return (
			<div>
				<div className="Login">
					<header className="Logo">Westargram</header>

					<main>
						<input
							className="weAreInput"
							id="login"
							type="text"
							placeholder="전화번호,사용자 이름 또는 이메일"
						/>
						<input
							className="weAreInput"
							id="password"
							type="password"
							placeholder="비밀번호"
						/>

						<button onClick={this.goToMain}>로그인</button>
					</main>

					<footer>비밀번호를 잊었습니까?</footer>
				</div>
			</div>
		);
	}
}

export default withRouter(LoginKwak);
