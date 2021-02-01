import React, { Component } from "react";
import Props from "../Props/Props";
import "./State.scss";

class State extends Component {
	constructor() {
		super();
		this.state = {
			titleColorState: true,
			color: "yellow",
			comment: "",
			commentArray: [],
		};
	}
	changeText = (event) => {
		this.setState({
			comment: event.target.value,
		});
	};

	addComment = (event) => {
		this.state.commentArray.push(this.state.comment);
		const add = this.state.commentArray;
		const listAdd = add.map((added) => <li>{added}</li>);
		this.setState({
			commentArray: listAdd,
		});
		// const add = this.state.commentArray;
		// const listAdd = add.map((added) => <li>{added}</li>);
		console.log(listAdd);
		console.log(this.state.commentArray);
	};

	handleTitleColor = () => {
		// if (this.state.titleColorState === true) {
		// 	this.setState({
		// 		titleColorState: false,
		// 	});
		// } else {
		// 	this.setState({
		// 		titleColorState: true,
		// 	});
		// }

		this.handleColor = () => {
			this.setState({
				color: "red",
			});
		};

		this.setState({
			titleColorState: !this.state.titleColorState,
		});
	};

	render() {
		return (
			<div className="state">
				<h1
					className={
						this.state.titleColorState === true ? "blueText" : "orangeText"
					}
				>
					state
				</h1>
				<div></div>
				<button onClick={this.handleTitleColor}>click</button>
				<Props color={this.state.color} changeColor={this.handleColor} />
				<textarea
					placeholder="연습중 입니다"
					onChange={this.changeText}
				></textarea>
				<button onClick={this.addComment}></button>
				<ul>{this.state.commentArray}</ul>
			</div>
		);
	}
}

export default State;
