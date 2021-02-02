import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
	render() {
		return (
			<div className="Comment">
				{this.props.commentList.map((com) => {
					return (
						<li>
							<span>xolovemirjam </span>
							{com}
						</li>
					);
				})}
			</div>
		);
	}
}

export default Comment;
