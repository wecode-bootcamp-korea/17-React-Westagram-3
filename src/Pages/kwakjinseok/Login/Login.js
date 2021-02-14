import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class LoginKwak extends Component {
	constructor() {
		super();
		this.state = {
			idInputValue: "",
			pwInputValue: "",
		};
	}

	handleIdInput = (event) => {
		this.setState({
			idInputValue: `${event.target.value}`,
		});
	};
	handlePwInput = (event) => {
		this.setState({
			pwInputValue: `${event.target.value}`,
		});
	};

	goToMain = () => {
		this.props.history.push("/mainKwak");
	};

	handleLogin = () => {
		const { idInputValue, pwInputValue } = this.state;

		fetch("http://192.168.43.45:8000/user/signin", {
			method: "POST",
			body: JSON.stringify({
				email: idInputValue,
				password: pwInputValue,
			}),
		})
			.then((response) => response.json())
			.then((result) => {
				// 회원가입
				// result.message === "SUCCESS"
				// 	? alert("오이오이 히사시부리")
				// 	: alert("만 19세 미만입니다");

				// 회원가입 후 로그인
				if (result.TOKEN) {
					localStorage.setItem("token", result.TOKEN);
					alert("축하합니다");
					this.props.history.push("/mainKwak");
				} else {
					alert("아이디나 비밀번호를 확인해주세요.");
				}
			});
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
							onChange={this.handleIdInput}
						/>
						<input
							className="weAreInput"
							id="password"
							type="password"
							placeholder="비밀번호"
							onChange={this.handlePwInput}
						/>

						<button
							className={
								this.state.idInputValue.indexOf("@") !== -1 &&
								this.state.pwInputValue.length > 5
									? "changeButtonColor"
									: "normalButtonColor"
							}
							disabled={
								this.state.idInputValue.indexOf("@") !== -1 &&
								this.state.pwInputValue.length > 5
									? false
									: true
							}
							onClick={this.handleLogin}
						>
							로그인
						</button>
					</main>

					<footer>비밀번호를 잊었습니까?</footer>
				</div>
			</div>
		);
	}
}

export default withRouter(LoginKwak);
