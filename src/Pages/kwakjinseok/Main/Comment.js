import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
	render() {
		return (
			<ul className="Comment">
				<li>
					<span className="userNameSpan">{this.props.userId}</span>
					<span> {this.props.comment}</span>
				</li>
			</ul>
		);
	}
}

export default Comment;
