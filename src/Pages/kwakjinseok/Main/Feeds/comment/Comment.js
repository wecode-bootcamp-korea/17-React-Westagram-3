import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
	render() {
		return (
			<li className="Comment">
				<span className="userNameSpan">{this.props.userId}</span>
				<span> {this.props.comment}</span>
			</li>
		);
	}
}

export default Comment;
